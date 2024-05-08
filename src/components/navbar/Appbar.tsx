"use client";

import { useKBar } from "kbar";
import { NavigationMenuBar } from "./NavigationMenuBar";
import { Button } from "../ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";

export function Appbar() {
  const { query } = useKBar();
  return (
    <div className='fixed top-1 left-2 right-2  shadow-md bg-background '>
      <div className='w-full border-b-[0] flex flex-row items-center justify-between'>
        <div className='flex items-center justify-start'>
          <Link href='/' passHref>
            <Button
              className='font-bold text-3xl no-underline font-heading'
              variant={"ghost"}
            >
              S
            </Button>
          </Link>
        </div>
        <div className='hidden md:block w-full max-w-lg flex-row items-center justify-center py-2'>
          <NavigationMenuBar />
        </div>
        <div className='flex item-center justify-end'>
          <Button variant={"ghost"} onClick={() => query.toggle()}>
            <Menu size={32} />
          </Button>
        </div>
      </div>
    </div>
  );
}
