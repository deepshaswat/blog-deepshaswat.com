"use client";

import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { showToastState } from "@/store/atoms/toastState";
import { toast } from "sonner";

export async function getStaticProps() {
  const meta = {
    title: "Contact // Zeno Rocha",
    tagline: "Email me. Like in the old days.",
    image: "/static/images/reminder-bw.jpg",
    primaryColor: "cyan",
    secondaryColor: "green",
  };

  return { props: meta };
}

export const Contact = ({ ...props }) => {
  const [showToast, setShowToast] = useRecoilState(showToastState);

  const onSendEmail = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  useEffect(() => {
    const displayToast = () => {
      <div className='fixed bottom-5 right-5'>
        {toast("Email Sent!", {
          action: {
            label: "Close",
            onClick: () => setShowToast(false),
          },
        })}
      </div>;
    };

    if (showToast) {
      displayToast();
      setShowToast(false);
    }
  }, [showToast, setShowToast]);
  return <div></div>;
};
