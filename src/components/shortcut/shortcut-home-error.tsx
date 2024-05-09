"use client";

import { useEffect, useState } from "react";
import { ShortcutButton } from "@/components/shortcut/shortcut-button";
import Kbd from "@/components/ui/kbd";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const ShortcutErrorHome = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const onClick = () => {
    router.push("/");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

    const message = isMobile ? (
      <span>Tap to go home →</span>
    ) : (
      <span>
        Press <Kbd>G</Kbd> <Kbd>H</Kbd> to go home →
      </span>
    );
    return (
      <Button variant={"ghost"} onClick={onClick} className='font-normal mb-10'>
        <div className='grid grid-flow-col gap-1 mx-[0] text-lg '>
          {message}
        </div>
      </Button>
    );
  }
};
