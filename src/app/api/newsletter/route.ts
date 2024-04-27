// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { newsletter } from '@/../../utils/sendgrid2'; // Update this path to match the location of your sendgrid.ts file

export async function POST(request: Request) {
  const body = await request.formData();
  const email = body.get('email');

  try {
    await newsletter(
      process.env.SENDGRID_TO_EMAIL || '',
      `New message from ${email}`,
      `Email: ${email}`
    );
    return NextResponse.json({ message: 'Successfully subscribed to our newsletter' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}