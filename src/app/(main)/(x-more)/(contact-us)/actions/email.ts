"use server";

import { FormData } from "../types/form-types";
import { Resend } from "resend";
import ContactEmail from "@/components/ContactEmail";

export const send = async (data: FormData) => {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, subject, message } = data;

    const emailData = {
        from: `CDMC Contact Form <contact@cdmclife.org>`,
        to: process.env.SMTP_EMAIL as string,
        subject: `Email from CDMC Contact Form`,
        react: ContactEmail({ name, email, message, subject }),
    };

    try {
        const { error } = await resend.emails.send(emailData);
        if (error) throw new Error(error.message);
        return { message: "Email sent to us!" };
    } catch (error) {
        console.error("Error sending email:", error);
        return { error: "Failed to send email. Please try again later." };
    }
};