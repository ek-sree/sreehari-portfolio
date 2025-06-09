"use server"
import nodemailer from "nodemailer";

export default async function sendEmail(name:string,email:string,message:string){
    if(!process.env.EMAIL_USER || !process.env.EMAIL_PASS){
        return "Server Error";
    }
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
        from: email,  
        to: 'eksreehari05@gmail.com',  
        subject: `New Contact Form Submission from ${name}`, 
        text: `
          You have a new message from your portfolio contact form:
          
          Name: ${name}
          Email: ${email}
          
          Message:
          ${message}
        `,
      };

    try {
      await transporter.sendMail(mailOptions);
      return "Message sent successfully";
    } catch (error) {
      console.error('Error sending email:', error);
      return "Failed to send the email";
    }
  } 