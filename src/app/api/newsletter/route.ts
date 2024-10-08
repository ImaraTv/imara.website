import type { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const { email } = await req.json();

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const MailchimpKey = process.env.MAILCHIMP_API_KEY;
    const MailchimpServer = process.env.MAILCHIMP_SERVER_PREFIX;
    const MailchimpAudience = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!MailchimpKey || !MailchimpServer || !MailchimpAudience) {
      throw new Error('Missing Mailchimp environment variables');
    }

    const md5Email = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
    const memberUrl = `https://${MailchimpServer}.api.mailchimp.com/3.0/lists/${MailchimpAudience}/members/${md5Email}`;

    // Check if the email already exists
    const checkResponse = await fetch(memberUrl, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${MailchimpKey}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
    });

    if (checkResponse.status === 200) {
      // Email already exists in the Mailchimp list
      return res.status(409).json({ error: 'This email is already subscribed.' });
    }

    if (checkResponse.status !== 404) {
      const errorData = await checkResponse.json();
      return res.status(checkResponse.status).json({ error: errorData.detail });
    }

    // If email doesn't exist, proceed to add to the list
    const customUrl = `https://${MailchimpServer}.api.mailchimp.com/3.0/lists/${MailchimpAudience}/members`;

    const response = await fetch(customUrl, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${MailchimpKey}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: errorData.detail });
    }

    const received = await response.json();
    return NextResponse.json(received);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
