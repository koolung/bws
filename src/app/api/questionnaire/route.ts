import { NextRequest, NextResponse } from 'next/server';
import { sendQuestionnaireEmails } from '@/lib/emailService';

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;
const RECAPTCHA_SCORE_THRESHOLD = 0.5; // Adjust based on your needs (0.0-1.0)

async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!RECAPTCHA_SECRET) {
    console.warn('RECAPTCHA_SECRET_KEY not configured');
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${RECAPTCHA_SECRET}&response=${token}`,
    });

    const data = (await response.json()) as {
      success: boolean;
      score: number;
      action: string;
      challenge_ts?: string;
      hostname?: string;
      error_codes?: string[];
    };

    // Check if verification was successful and score is above threshold
    if (data.success && data.score >= RECAPTCHA_SCORE_THRESHOLD) {
        console.log('reCAPTCHA verification succeeded:', data);
      return true;
    }

    console.log('reCAPTCHA verification failed:', {
      success: data.success,
      score: data.score,
      action: data.action,
      errors: data.error_codes,
    });
    return false;
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Verify reCAPTCHA token
    if (!body.recaptchaToken) {
      return NextResponse.json(
        { error: 'reCAPTCHA token is missing' },
        { status: 400 }
      );
    }

    const isValidCaptcha = await verifyRecaptcha(body.recaptchaToken);
    if (!isValidCaptcha) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send emails
    await sendQuestionnaireEmails({
      name: body.name,
      email: body.email,
      phone: body.phone,
      service: body.service || [],
      serviceOther: body.serviceOther || '',
      addOns: body.addOns || [],
      business: body.business || '',
      businessOther: body.businessOther || '',
      payment: body.payment || '',
      features: body.features || [],
      budget: body.budget || '',
      source: body.source || '',
      sourceOther: body.sourceOther || '',
      notes: body.notes || '',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Questionnaire submitted successfully. Check your email for confirmation.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Questionnaire submission error:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Failed to process questionnaire submission',
      },
      { status: 500 }
    );
  }
}
