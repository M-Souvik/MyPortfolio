import { NextResponse } from 'next/server';
import connectDB from '@/server/config/database';
import Message from '@/server/models/message';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message } = await request.json();

  await connectDB();

  try {
    // Save message to MongoDB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // Send email using Nodemailer
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sm6984767@gmail.com',
      subject: 'New Contact Form Message',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing request', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
