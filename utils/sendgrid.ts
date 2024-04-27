// lib/sendgrid.ts
import sgMail from '@sendgrid/mail';

const apiKey = process.env.SENDGRID_API_KEY || '';

sgMail.setApiKey(apiKey);

export const sendEmail = async (to: string, subject: string, body: string) => {
  const msg = {
    to,
    from: process.env.SENDGRID_FROM_EMAIL || '', // Change this to your verified sender
    subject,
    text: body,
    html: `<div>${body}</div>`,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to send email');
  }
};