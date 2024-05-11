"use client";

import { useEffect, useState, useTransition } from "react";
import { useRecoilState } from "recoil";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { showToastEmailState } from "@/store/atoms/toastState";
import { toast } from "sonner";
import { ContactSchema } from "@/schemas";
import { contact } from "@/actions/contact";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/error-page/form-error";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import Head from "next/head";
import Base from "../posts/BaseStatic";

export const Contact = () => {
  const meta = {
    title: "Contact // Shaswat Deep",
    description: "",
    tagline: "Email me. Like in the old days.",
    image: "/static/images/reminder-bw.jpg",
    primaryColor: "cyan",
    secondaryColor: "green",
  };
  const { title, description, image, tagline, primaryColor, secondaryColor } =
    meta;

  const [showToast, setShowToast] = useRecoilState(showToastEmailState);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ContactSchema>) => {
    setError("");
    setSuccess("");
    console.log(values);
    startTransition(() => {
      contact(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
      if (success) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        form.reset();
      }
    });
  };

  useEffect(() => {
    const displayToast = () => {
      <div className='fixed bottom-15 right-5'>
        {toast("Email Sent!", {
          action: {
            label: "Close",
            onClick: () => setShowToast(false),
          },
        })}
      </div>;
    };

    if (showToast) {
      displayToast();
      setShowToast(false);
    }
  }, [showToast, setShowToast]);

  const renderForm = () => {
    return (
      <Card className='flex flex-col h-full  w-full max-w-md'>
        <CardHeader>
          <CardTitle className='text-2xl justify-center items-center'>
            Let&apos;s Talk
          </CardTitle>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <div className='space-y-0 px-4'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder='John Doe'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder='john.doe@example.com'
                        type='email'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className='min-h-[100px]'
                        id='message'
                        disabled={isPending}
                        placeholder='Enter your message'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='mx-auto pl-4 pr-4'>
              <FormError message={error} />
            </div>

            <CardFooter>
              <Button
                disabled={isPending}
                type='submit'
                className='w-full text-black'
              >
                Send Email
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    );
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name='description' />
        <meta content={description} property='og:description' />
        <meta content='https://deepshaswat.com/reminder' property='og:url' />
        <meta content={`https://deepshaswat.com${image}`} property='og:image' />
      </Head>

      <Base
        title={title}
        description=''
        tagline={tagline}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      >
        {renderForm()}
      </Base>
    </>
  );
};
