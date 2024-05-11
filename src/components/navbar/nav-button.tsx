"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavButtonProps = {
  href: string;
  path: string;
};

export const NavButton = ({ href, path }: NavButtonProps) => {
  const pathname = usePathname();
  const isActive = path === pathname;
  return (
    <div>
      <Button
        asChild
        size='sm'
        variant={"outline"}
        className={cn(
          "w-full lg:w-auto justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-transparent focus:ring-offset-0 outline-none text-white focus:bg-white/30 transition"
          //, isActive ? "bg-white/10 text-white" : "bg-transparent"
        )}
      >
        <Link href={href}>
          {/* this is change the UI to have a covered on focus */}
          {/* {path.substring(1).toUpperCase()} */}

          {isActive && <Underline label={path.substring(1).toUpperCase()} />}
          {!isActive && path.substring(1).toUpperCase()}
        </Link>
      </Button>
    </div>
  );
};

interface UnderlineProps {
  label: string;
}
const Underline: React.FC<UnderlineProps> = ({ label }) => {
  const mid = Math.floor(label.length / 2);
  if (label.length < 2) {
    return <span>{label}</span>;
  }

  return (
    <>
      {label.substring(0, mid - 1)}
      <span className='underline underline-offset-8'>
        {label.substring(mid - 1, mid + 1)}
      </span>
      {label.substring(mid + 1)}
    </>
  );
};
