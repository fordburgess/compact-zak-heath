'use server';
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  name: 'compact.network',
  auth: {
    user: 'zak.compact@gmail.com',
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendMail(
  name,
  email,
  text,
) {
  try {
    const isVerified = await transporter.verify();

  } catch (error) {

    return;
  }
  const info = await transporter.sendMail({
    from: email,
    subject: `Message from: ${name}`,
    to: 'zak.compact@gmail.com',
    text: text,
  });
  console.log('Message Sent', info);
  return info;
}
