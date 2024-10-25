import "./globals.css";
import NavBar from "@/components/navBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F5F8FF] h-[100vh]">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
