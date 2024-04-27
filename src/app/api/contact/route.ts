// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { sendEmail } from '@/../../utils/sendgrid'; // Update this path to match the location of your sendgrid.ts file

export async function POST(request: Request) {
  const body = await request.formData();
  const fullName = body.get('first-name');
  const contactInfo = body.get('last-name');
  const message = body.get('message');

  try {
    await sendEmail(
      process.env.SENDGRID_TO_EMAIL || '',
      `New message from ${fullName}`,
      `Name: ${fullName}\nContact: ${contactInfo}\n\n${message}`
    );
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}