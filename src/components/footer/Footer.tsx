"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Instagram, Linkedin, MailOpen, Twitter } from "lucide-react";

interface LinkProps {
  title: string;
  url: string;
  icon: React.ReactNode;
}

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const size = 16;

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobileDevice =
      /iPhone|iPad|Android/i.test(userAgent) ||
      (userAgent.includes("Mac") && "ontouchend" in document) ||
      navigator.maxTouchPoints > 0;
    setIsMobile(isMobileDevice);
  }, []);

  const links: LinkProps[] = [
    {
      title: "Email",
      url: "/contact",
      icon: <MailOpen size={size} />,
    },
    {
      title: "Twitter",
      url: "https://twitter.com/shaswat_X",
      icon: <Twitter size={size} />,
    },
    {
      title: "GitHub",
      url: "https://github.com/deepshaswat",
      icon: <Github size={size} />,
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com/in/deepshaswat",
      icon: <Linkedin size={size} />,
    },
    {
      title: "Instagram",
      url: "https://instagram.com/deepshaswat",
      icon: <Instagram size={size} />,
    },
  ];

  const renderAnchor = (link: LinkProps, index: number) => {
    return (
      <Link
        className='group flex items-center ml-5 text-sm text-neutral-500 border-0 no-underline lowercase transition-color duration-200 ease-in-out hover:text-neutral-100 focus:text-primary'
        key={index}
        href={link.url}
        passHref
        target={link.title === "Email" ? "_self" : "_blank"}
      >
        {!isMobile ? (
          <>
            <span className='hidden md:block text-lg text-neutral-600'>
              {link.title}
            </span>
            <span className='block md:hidden opacity-100 ml-2'>
              {link.icon}
            </span>
            <span className='hidden md:group-hover:block opacity-0 group-hover:opacity-100 ml-1 transition-opacity duration-300 ease-in-out'>
              {link.icon}
            </span>
          </>
        ) : (
          <span className='block opacity-100 ml-2'>{link.icon}</span>
        )}
      </Link>
    );
  };

  return (
    <div className='max-w-screen-4xl mx-auto mb-5'>
      <div className='w-full flex items-center justify-center'>
        {links.map(renderAnchor)}
      </div>
    </div>
  );
}
{
  /* <div className='bg-background flex gap-x-3 items-center justify-center py-5'>
  {links.map(renderAnchor)}
</div>; */
}
