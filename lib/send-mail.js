'use server';
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  // host: SMTP_SERVER_HOST,
  port: 587,
  secure: true,
  auth: {
    user: 'fburg6824@gmail.com',
    pass: '',
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
    console.error('Something Went Wrong', 'fburg6824@gmail.com', '', error);
    return;
  }
  const info = await transporter.sendMail({
    from: email,
    subject: `Message from: ${name}`,
    to: 'fburg6824@gmail.com',
    text: text,
  });
  console.log('Message Sent', info.messageId);
  return info;
}
