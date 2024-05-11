"use server";

import * as z from "zod";

import { ContactSchema } from "@/schemas/index";
import prisma from "@/db/index";
import { sendContactEmail } from "@/lib/mail";

export const contact = async (values: z.infer<typeof ContactSchema>) => {
  const validatedFields = ContactSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  const { email, name, message } = validatedFields.data;

  try {
    console.time("DB Operation");
    await prisma.contactForm.create({
      data: {
        name,
        email,
        message,
      },
    });
    console.timeEnd("DB Operation");
    console.time("Email Sending");
    sendContactEmail(name, email, message).then((status) => {
      if (status.error) {
        console.error("Email Error:", status.error);
      }
    });
    console.timeEnd("Email Sending");
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong!",
    };
  }

  return {
    success: "Message sent!",
  };
};
