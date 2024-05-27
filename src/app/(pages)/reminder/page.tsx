import { Metadata } from "next";

import { generateSiteConfig } from "@/components/config/site-config";
import Reminder from "@/components/reminder/reminder";

export const metadata: Metadata = generateSiteConfig(
  "Reminder // Shaswat Deep",
  "Time is the only thing that is finite. Rest all things can be bought, sold, or created. So, make the most of it.",
  "/reminder",
  "/static/images/reminder-bw.jpg"
);

const ReminderPage = () => {
  return <Reminder />;
};

export default ReminderPage;
