import { cn } from "@/lib/utils";
import {
  Github,
  Instagram,
  Linkedin,
  LucideProps,
  MailOpen,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface LinkProps {
  title: string;
  url: string;
  icon: any;
}

export default function Footer() {
  const links: LinkProps[] = [
    {
      title: "Email",
      url: "/contact",
      icon: <MailOpen size={18} />,
    },
    {
      title: "Twitter",
      url: "https://twitter.com/shaswat_X",
      icon: <Twitter size={18} />,
    },
    {
      title: "GitHub",
      url: "https://github.com/deepshaswat",
      icon: <Github size={18} />,
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com/in/deepshaswat",
      icon: <Linkedin size={18} />,
    },
    {
      title: "Instagram",
      url: "https://instagram.com/deepshaswat",
      icon: <Instagram size={18} />,
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
        <span className='hidden md:block '>{link.title}</span>
        {/* <span className='text-sm'>{React.createElement(link.icon)}</span> */}
        {/* <span className='opacity-100 md:opacity-0 hover:opacity:100 ml-1'>
          {link.icon}
        </span> */}

        <span className='block md:hidden opacity-100 ml-2'>{link.icon}</span>
        <span className='hidden md:group-hover:block opacity-0 group-hover:opacity-100 ml-1 transition-opacity duration-300 ease-in-out'>
          {link.icon}
        </span>
      </Link>
    );
  };

  return (
    <div className='bg-background flex items-center justify-center py-5'>
      {links.map(renderAnchor)}
    </div>
  );
}
