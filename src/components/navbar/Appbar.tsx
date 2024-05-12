"use client";

import { useKBar } from "kbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Navigation } from "./navigation";

export function Appbar() {
  const { query } = useKBar();
  return (
    <header className=' px-4 py-2 '>
      <div className='max-w-screen-4xl mx-auto'>
        <div className='w-full flex items-center justify-between '>
          <Link href='/' passHref>
            <Button
              className='font-bold text-3xl no-underline font-heading'
              variant={"ghost"}
            >
              S
            </Button>
          </Link>
          <div className='flex items-center md:gap-x-12 lg:gap-x-16'>
            <Navigation />
          </div>
          <Button variant={"ghost"} onClick={() => query.toggle()}>
            <Menu size={32} />
          </Button>
        </div>
      </div>
    </header>
  );
}
