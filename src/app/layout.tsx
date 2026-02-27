import "./globals.css";
import Navbar from "./components/Navbar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-10 flex gap-10">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
