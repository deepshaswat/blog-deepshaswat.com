import { cn } from "@/lib/utils";
import { Github, Instagram, Linkedin, MailOpen, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

interface LinkProps {
  title: string;
  url: string;
  icon: any;
}

export default function Footer() {
  const size = 13;
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
    <span>{link.icon}</span>;

    return (
      <Link
        className='group flex items-center ml-5 text-sm text-neutral-500 border-0 no-underline lowercase transition-color duration-200 ease-in-out hover:text-neutral-100 focus:text-primary'
        key={index}
        href={link.url}
        passHref
      >
        <span className='hidden md:block'>{link.title}</span>
        <span className='block md:hidden opacity-100 ml-2'>{link.icon}</span>
        <span className='hidden md:group-hover:block opacity-0 group-hover:opacity-100 ml-1 transition-opacity duration-300 ease-in-out'>
          {link.icon}
        </span>
      </Link>
    );
  };

  return (
    <div className='bg-background flex gap-x-3 items-center justify-center py-5'>
      {links.map(renderAnchor)}
    </div>
  );
}
