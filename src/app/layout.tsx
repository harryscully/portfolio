import "./globals.css";
import Navbar from "@/components/Navbar"

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
            <Navbar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
