"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavigationMenuBar() {
  const router = usePathname();

  const isActive = (pathname: string) => router === pathname;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {[
          "/about",
          "/articles",
          "/investing",
          "/library",
          "/uses",
          "/newsletter",
          "/reminder",
        ].map((path) => (
          <NavigationMenuItem key={path}>
            <Link href={path} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  isActive(path) && " text-gray-100"
                )}
              >
                {isActive(path) && (
                  <Underline label={path.substring(1).toUpperCase()} />
                )}
                {!isActive(path) && path.substring(1).toUpperCase()}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface UnderlineProps {
  label: string;
}

const Underline: React.FC<UnderlineProps> = ({ label }) => {
  const mid = Math.floor(label.length / 2);
  if (label.length < 2) {
    return <span>{label}</span>; // Simple case for short labels
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
