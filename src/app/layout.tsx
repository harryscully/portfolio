import "./globals.css";
import consoleIcon from "../../public/console_prompt-0.png"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "harry scully",
    template: "%s | harry scully"
  },
  description: "Fullstack developer, quiz enthusiast, film watcher"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-neutral-800 w-full px-6 md:px-16">
        <div className="flex flex-col gap-16 md:flex-row py-8 md:py-16">
          <div className="flex flex-col gap-2 items-center md:gap-8">
            <Link 
              className="tracking-widest"
              href="/"
            >
              harryscully.com
            </Link>
            <Image src={consoleIcon} alt="console windows 98 icon" className="h-8 w-8 mb-6 md:m-0"/>
            <Navbar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
