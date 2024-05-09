"use client";

import { Button } from "@/components/ui/button";
import { useKBar } from "kbar";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { ShortcutHome } from "../shortcut/shortcut-home";

export default function Landing() {
  return (
    <div className='min-h-[calc(100vh-15vh)] sm:min-h-[calc(100vh-6.85vh)] flex items-center justify-start max-w-screen-sm md:max-w-screen-md  '>
      <div className='flex flex-col justify-center items-start ml-6 md:mx-auto'>
        <h1 className='text-5xl font-bold mb-12 px-4'>Shaswat Deep</h1>
        <h3 className='text-lg font-normal px-4 mb-2 '>
          Founder & CEO at{" "}
          <Link
            href={"https://orbizza.com"}
            className='underline underline-offset-4 hover:text-neutral-400 '
            target='_blank'
          >
            Orbizza
          </Link>
        </h3>
        <h4 className='text-lg font-noraml text-slate-500 px-4 mb-8'>
          Building a{" "}
          <Link
            href={"https://www.orbizza.com/ratecreator"}
            className='underline underline-offset-4 hover:text-neutral-200'
            target='_blank'
          >
            {" "}
            platform
          </Link>{" "}
          to review content creators
          {/* 
          1. Content Creator Review Platform for <em> YouTube, Instagram, X (Twitter)</em> and more.
          2. Building the future of content interaction
          */}
        </h4>
        <ShortcutHome />
      </div>
    </div>
  );
}
