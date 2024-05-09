import { useKBar } from "kbar";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface ShortcutButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export const ShortcutButton = ({
  children,
  className,
}: ShortcutButtonProps) => {
  const { query } = useKBar();
  
  return (
    <Button variant={"ghost"} onClick={query.toggle} className={className}>
      <div className='grid grid-flow-col gap-1 mx-[0] text-lg'>{children}</div>
    </Button>
  );
};
