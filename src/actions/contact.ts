"use server";

import * as z from "zod";

import { ContactSchema } from "@/schemas";
import prisma from "@/db";
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
    await prisma.contactForm.create({
      data: {
        name,
        email,
        message,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong!",
    };
  }
  sendContactEmail(name, email, message).then((status) => {
    if (status.error) {
      console.error("Email Error:", status.error);
    }
  });

  return {
    success: "Message sent!",
  };
};
