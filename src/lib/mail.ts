import { Resend } from "resend";

import EmailTemplate from "@/components/ui/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = async (
  name: string,
  email: string,
  message: string
) => {
  const { data, error } = await resend.emails.send({
    from: "contact@mail.deepshaswat.com",
    to: "hi@deepshaswat.com",
    subject: "Email from: " + name,
    reply_to: email,
    react: EmailTemplate({ name, email, message }),
  });

  if (error) {
    return {
      error: "Something went wrong!",
    };
  }

  return {
    success: "Message sent!",
    data: data,
  };
};
