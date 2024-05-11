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
    const status = await sendContactEmail(name, email, message);
    if (status.error) {
      return {
        error: "Sending Email Failed!",
      };
    } else if (status.success) {
      await prisma.contactForm.create({
        data: {
          name,
          email,
          message,
        },
      });
    }
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
