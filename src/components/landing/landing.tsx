"use client";

import { Button } from "@/components/ui/button";
import { useKBar } from "kbar";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Landing() {
  const { query } = useKBar();
  return (
    <div className='min-h-[calc(100vh-6.85vh)] flex items-center justify-start max-w-screen-sm md:max-w-screen-md  '>
      <div className='flex flex-col justify-center items-start mx-auto'>
        <h1 className='text-5xl font-bold mb-12 px-4'>Shaswat Deep</h1>
        <h3 className='text-md font-normal px-4 mb-2 '>
          Founder & CEO at{" "}
          <Link
            href={"https://orbizza.com"}
            className='underline underline-offset-4 hover:text-neutral-400 '
          >
            Orbizza
          </Link>
        </h3>
        <h4 className='text-md font-noraml text-slate-500 px-4 mb-4 '>
          Building{" "}
          <Link
            href={"https://www.orbizza.com/ratecreator"}
            className='underline underline-offset-4 hover:text-neutral-200'
          >
            {" "}
            Rate Creator
          </Link>{" "}
          to review Creators across platforms
          {/* to review Creators of <em> YouTube, Instagram, X (Twitter)</em> */}
        </h4>
        {/* <h4 className='text-md font-noraml text-slate-500 px-4 mb-4 '>
          Building the future of content interaction
        </h4> */}
        <Button
          variant={"ghost"}
          onClick={() => query.toggle()}
          className='mt-4'
          size={"sm"}
        >
          <div className='grid grid-flow-col gap-1 mx-[0] text-lg'>
            Press
            <div className='bg-white bg-opacity-40 text-primary-foreground p-1 uppercase rounded-sm text-sm w-6 text-center'>
              ⌘
            </div>
            <div className='bg-white bg-opacity-40 text-primary-foreground p-1 uppercase rounded-sm text-sm w-6 text-center'>
              K
            </div>
            to Start <MoveRight size={20} className='m-1' />
          </div>
        </Button>
      </div>
    </div>
  );
}
