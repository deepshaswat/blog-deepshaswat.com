"use client";

import { useKBar } from "kbar";
import { NavigationMenuBar } from "./NavigationMenuBar";
import { Button } from "../ui/button";
import Link from "next/link";

export function Appbar() {
  const { query } = useKBar();
  return (
    <div className='fixed top-1 left-0 right-0  shadow-md bg-background '>
      {/* Outer container with full width and border */}

      <div className='w-full border-b-[0] flex flex-row items-center'>
        <div>
          <Link href='/' passHref>
            <Button
              className='font-bold text-3xl no-underline ml-3 md:ml-0 lg:ml-3 font-heading'
              variant={"ghost"}
            >
              S
            </Button>
          </Link>
        </div>
        {/* Inner container with max width for content but stretches full width for background */}
        <div className='hidden md:block ml-auto  w-full md:max-w-screen-sm lg:max-w-screen-md flex-row items-center justify-between py-2'>
          <NavigationMenuBar />
        </div>
        <div className='flex center mr-3 md:mr-0 lg:mr-3 ml-auto'>
          <Button variant={"ghost"} onClick={() => query.toggle()}>
            <span className='text-3xl'>⌘</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
