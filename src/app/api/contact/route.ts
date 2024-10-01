import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

interface MailBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextRequest) {
  console.log('API Request received');
  try {
    const body = await req.json();
    const { name, email, message }: MailBody = body;
    console.log('Form Data:', { name, email, message });

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Please provide all required fields (name, email, and message).' });
    }

    const transporter = nodemailer.createTransport({
      service: 'Yahoo',
      host: 'smtp.mail.yahoo.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
      },
      logger: true, // Enable logging to the console
      debug: true,  // Show debug output
    });

    console.log('USER_EMAIL:', process.env.USER_EMAIL);
    console.log('USER_PASSWORD:', process.env.USER_PASSWORD);

    console.log('Nodemailer configured successfully');

    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.USER_EMAIL,
      subject: `Contact form submission from ${email}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>New Contact Form Submission</strong></p><br>
      <p><strong>Name:</strong> ${name}</p><br>
      <p><strong>Email:</strong> ${email}</p><br>
      <p><strong>Message:</strong> ${message}</p><br>
          `,
    });

    console.log('Email sent:', info);

    return NextResponse.json({ success: true, message: 'Message sent successfully!', code: 200 });

  } catch (error) {
    console.error('Error sending email:', (error as Error).message);
    return NextResponse.json({ error: 'Failed to send message. Please try again later.', code: 500 });
  }
}

