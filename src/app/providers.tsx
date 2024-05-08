"use client";

import React from "react";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Command } from "lucide-react";
import { CommandBar } from "@/components/command/CommandBar";
// import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    // /<SessionProvider>
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      enableSystem
      disableTransitionOnChange
    >
      <RecoilRoot>
        <CommandBar>{children}</CommandBar>
      </RecoilRoot>
    </ThemeProvider>
    // </SessionProvider>
  );
};
