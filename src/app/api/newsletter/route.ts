// Example: pages/api/newsletter.js or newsletter.ts

import type { NextApiRequest, NextApiResponse } from 'next';
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {  // Ensure POST method is allowed
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    try {
      const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
        email_address: email,
        status: 'subscribed',
      });

      return res.status(201).json({ message: 'Subscription successful' });
    } catch (error) {
      console.error('Mailchimp error:', error);
      return res.status(500).json({ error: 'Subscription failed' });
    }
  } else {
    res.setHeader('Allow', ['POST']);  // Allow only POST requests
    res.status(405).end(`Method ${req.method} Not Allowed`);  // Respond with 405 for other methods
  }
}
