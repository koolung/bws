import { NextRequest, NextResponse } from 'next/server';
import { sendQuestionnaireEmails } from '@/lib/emailService';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone' },
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
