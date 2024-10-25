import type { Metadata } from "next";
import "../globals.css";
import NavBar from "@/components/navBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
