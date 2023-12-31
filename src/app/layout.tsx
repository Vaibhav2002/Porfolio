import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const dmSans = DM_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaibhav Jaiswal",
  description: "I am Vaibhav Jaiswal, a Computer Science Engineering student, currently working as a Software Engineer Intern at Pratilipi.",
  twitter: {
    card: "summary_large_image",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main>
          <div className="max-w-[1920px] mx-auto">
              {children}
          </div>

        </main>
        <Analytics/>
      </body>
    </html>
  );
}
