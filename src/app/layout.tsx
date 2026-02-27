import "./globals.css";
import consoleIcon from "../../public/console_prompt-0.png"
import Navbar from "@/components/Navbar"
import Image from "next/image"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-neutral-800">
        <div className="m-16 flex gap-16">
          <div className="flex flex-col gap-8 items-center">
            <a 
              className="tracking-widest"
              href="/"
            >
              harryscully.com
            </a>
            <Image src={consoleIcon} alt="console windows 98 icon" className="h-10 w-10"/>
            <Navbar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
