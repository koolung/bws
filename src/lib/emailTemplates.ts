export interface EmailData {
  name: string;
  email: string;
  phone: string;
  service: string[];
  serviceOther: string;
  addOns: string[];
  business: string;
  businessOther: string;
  payment: string;
  features: string[];
  budget: string;
  source: string;
  sourceOther: string;
  notes: string;
}

const LOGO_URL = 'https://bedfordwebservices.com/logo.png'; // Update with actual logo URL
const BUSINESS_COLOR = '#21705e'; // Teal color from your site
const ACCENT_COLOR = '#14b8a6'; // Lighter teal

export const getBusinessEmailTemplate = (data: EmailData): string => {
  const serviceList = data.service
    .map((s) => (s === 'Others' ? `Others: ${data.serviceOther}` : s))
    .join(', ');
  const featureList = data.features.length > 0 ? data.features.join(', ') : 'None selected';
  const addOnsList = data.addOns.length > 0 ? data.addOns.join(', ') : 'None selected';
  const businessType = data.business === 'Others' ? `Others: ${data.businessOther}` : data.business;
  const source = data.source === 'Others' ? `Others: ${data.sourceOther}` : data.source;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; background: #f9fafb; }
    .header { background: ${BUSINESS_COLOR}; color: white; padding: 30px 20px; text-align: center; }
    .logo { height: 50px; margin-bottom: 15px; }
    .header h1 { font-size: 24px; margin-bottom: 10px; }
    .header p { font-size: 14px; opacity: 0.9; }
    .content { background: white; padding: 30px 20px; }
    .section { margin-bottom: 25px; }
    .section-title { color: ${BUSINESS_COLOR}; font-size: 16px; font-weight: 600; margin-bottom: 12px; border-bottom: 2px solid ${ACCENT_COLOR}; padding-bottom: 8px; }
    .info-row { display: flex; margin-bottom: 10px; font-size: 14px; }
    .info-label { font-weight: 600; color: ${BUSINESS_COLOR}; min-width: 140px; }
    .info-value { flex: 1; color: #555; }
    .cta-box { background: #f0fdf4; border-left: 4px solid ${ACCENT_COLOR}; padding: 15px; margin: 20px 0; border-radius: 4px; }
    .cta-text { color: #333; font-size: 14px; }
    .footer { background: #f3f4f6; padding: 20px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #e5e7eb; }
    .footer-link { color: ${BUSINESS_COLOR}; text-decoration: none; }
    .divider { height: 1px; background: #e5e7eb; margin: 15px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Questionnaire Submission</h1>
      <p>A new lead has submitted the questionnaire form</p>
    </div>

    <div class="content">
      <!-- Client Info Section -->
      <div class="section">
        <div class="section-title">📋 Client Information</div>
        <div class="info-row">
          <div class="info-label">Name:</div>
          <div class="info-value">${escapeHtml(data.name)}</div>
        </div>
        <div class="info-row">
          <div class="info-label">Email:</div>
          <div class="info-value"><a href="mailto:${escapeHtml(data.email)}" style="color: ${ACCENT_COLOR}; text-decoration: none;">${escapeHtml(data.email)}</a></div>
        </div>
        <div class="info-row">
          <div class="info-label">Phone:</div>
          <div class="info-value"><a href="tel:${escapeHtml(data.phone)}" style="color: ${ACCENT_COLOR}; text-decoration: none;">${escapeHtml(data.phone)}</a></div>
        </div>
      </div>

      <div class="divider"></div>

      <!-- Services Section -->
      <div class="section">
        <div class="section-title">🎯 Services Requested</div>
        <div class="info-row">
          <div class="info-label">Service Type:</div>
          <div class="info-value">${serviceList}</div>
        </div>
        <div class="info-row">
          <div class="info-label">Add-ons:</div>
          <div class="info-value">${addOnsList}</div>
        </div>
      </div>

      <div class="divider"></div>

      <!-- Business Section -->
      <div class="section">
        <div class="section-title">🏢 Business Details</div>
        <div class="info-row">
          <div class="info-label">Business Type:</div>
          <div class="info-value">${businessType}</div>
        </div>
        <div class="info-row">
          <div class="info-label">Desired Features:</div>
          <div class="info-value">${featureList}</div>
        </div>
      </div>

      <div class="divider"></div>

      <!-- Budget & Payment Section -->
      <div class="section">
        <div class="section-title">💰 Budget & Payment</div>
        <div class="info-row">
          <div class="info-label">Budget:</div>
          <div class="info-value">${data.budget}</div>
        </div>
        <div class="info-row">
          <div class="info-label">Payment Method:</div>
          <div class="info-value">${data.payment}</div>
        </div>
      </div>

      <div class="divider"></div>

      <!-- Source Section -->
      <div class="section">
        <div class="section-title">📢 How Did You Hear About Us?</div>
        <div class="info-row">
          <div class="info-label">Source:</div>
          <div class="info-value">${source}</div>
        </div>
      </div>

      ${
        data.notes
          ? `
      <div class="divider"></div>
      <div class="section">
        <div class="section-title">📝 Additional Notes</div>
        <div class="info-value" style="white-space: pre-wrap; background: #f9fafb; padding: 12px; border-radius: 4px; border-left: 3px solid ${ACCENT_COLOR};">${escapeHtml(data.notes)}</div>
      </div>
      `
          : ''
      }

      <div class="cta-box">
        <div class="cta-text">
          ✉️ <strong>Next Steps:</strong> Reply to the client's email at <strong>${escapeHtml(data.email)}</strong> to follow up on their inquiry.
        </div>
      </div>
    </div>

    <div class="footer">
      <p>Bedford Web Services | <a href="mailto:contact@bedfordwebservices.com" class="footer-link">contact@bedfordwebservices.com</a></p>
      <p style="margin-top: 10px; font-size: 11px;">This is an automated email from your questionnaire system.</p>
    </div>
  </div>
</body>
</html>
  `;
};

export const getClientEmailTemplate = (data: EmailData): string => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; background: #f9fafb; }
    .header { background: linear-gradient(135deg, ${BUSINESS_COLOR} 0%, ${ACCENT_COLOR} 100%); color: white; padding: 40px 20px; text-align: center; }
    .logo { height: 50px; margin-bottom: 15px; }
    .header h1 { font-size: 28px; margin-bottom: 10px; font-weight: 700; }
    .header p { font-size: 15px; opacity: 0.95; }
    .content { background: white; padding: 40px 20px; }
    .greeting { font-size: 16px; margin-bottom: 20px; line-height: 1.8; }
    .section { margin-bottom: 25px; }
    .section-title { color: ${BUSINESS_COLOR}; font-size: 16px; font-weight: 600; margin-bottom: 12px; border-bottom: 2px solid ${ACCENT_COLOR}; padding-bottom: 8px; }
    .highlight-box { background: linear-gradient(135deg, rgba(33, 112, 94, 0.05) 0%, rgba(20, 184, 166, 0.05) 100%); border-left: 4px solid ${ACCENT_COLOR}; padding: 20px; border-radius: 4px; margin: 20px 0; }
    .highlight-text { color: ${BUSINESS_COLOR}; font-weight: 600; font-size: 16px; }
    .details { background: #f9fafb; padding: 15px; border-radius: 4px; font-size: 14px; }
    .detail-item { margin-bottom: 10px; }
    .detail-label { color: ${BUSINESS_COLOR}; font-weight: 600; }
    .cta-button { display: inline-block; background: ${BUSINESS_COLOR}; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: 600; margin: 20px 0; }
    .footer { background: #f3f4f6; padding: 30px 20px; text-align: center; font-size: 13px; color: #666; border-top: 1px solid #e5e7eb; }
    .footer-link { color: ${BUSINESS_COLOR}; text-decoration: none; font-weight: 500; }
    .divider { height: 1px; background: #e5e7eb; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Reaching Out!</h1>
      <p>We've received your questionnaire and can't wait to help</p>
    </div>

    <div class="content">
      <div class="greeting">
        <p>Hi <strong>${escapeHtml(data.name)}</strong>,</p>
        <p style="margin-top: 12px;">
          Thank you for submitting your questionnaire! We've successfully received your information and are excited to explore how Bedford Web Services can help bring your vision to life.
        </p>
      </div>

      <div class="highlight-box">
        <div class="highlight-text">✓ Submission Confirmed</div>
        <p style="margin-top: 8px; font-size: 14px; color: #555;">
          Our team will review your details and reach out to you within 24 hours to discuss your project and answer any questions.
        </p>
      </div>

      <div class="divider"></div>

      <div class="section">
        <div class="section-title">Your Submission Summary</div>
        <div class="details">
          <div class="detail-item">
            <span class="detail-label">Service:</span> ${data.service.length > 0 ? data.service.join(', ') : 'Not specified'}
          </div>
          <div class="detail-item">
            <span class="detail-label">Budget Range:</span> ${data.budget}
          </div>
          <div class="detail-item">
            <span class="detail-label">Email:</span> ${escapeHtml(data.email)}
          </div>
          <div class="detail-item">
            <span class="detail-label">Phone:</span> ${escapeHtml(data.phone)}
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="section">
        <div class="section-title">What's Next?</div>
        <ol style="margin-left: 20px; color: #555; font-size: 14px; line-height: 1.8;">
          <li>Our team will review your responses</li>
          <li>We'll reach out to discuss your project in detail</li>
          <li>We'll provide you with a tailored proposal and timeline</li>
          <li>Together, we'll bring your project to life!</li>
        </ol>
      </div>

      <div style="text-align: center; margin: 30px 0;">
        <p style="font-size: 14px; color: #666; margin-bottom: 15px;">Have questions in the meantime?</p>
        <a href="mailto:contact@bedfordwebservices.com" class="cta-button">Get in Touch</a>
      </div>

      <div class="highlight-box" style="background: linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(33, 112, 94, 0.1) 100%);">
        <p style="font-size: 14px; color: #555;">
          <strong style="color: ${BUSINESS_COLOR};">📞 Contact Info:</strong><br>
          Email: <a href="mailto:contact@bedfordwebservices.com" style="color: ${ACCENT_COLOR}; text-decoration: none;">contact@bedfordwebservices.com</a><br>
          Phone: <a href="tel:+19024122260" style="color: ${ACCENT_COLOR}; text-decoration: none;">+1 (902) 412-2260</a>
        </p>
      </div>
    </div>

    <div class="footer">
      <p><strong>Bedford Web Services</strong></p>
      <p style="margin-top: 10px;">600 Bedford Hwy, Suite #238, Halifax, NS</p>
      <p style="margin-top: 15px;">
        <a href="https://bedfordwebservices.com" class="footer-link">Visit Our Website</a> | 
        <a href="mailto:contact@bedfordwebservices.com" class="footer-link">Email Us</a>
      </p>
      <p style="margin-top: 15px; font-size: 12px; opacity: 0.8;">© 2025 Bedford Web Services. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `;
};

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
