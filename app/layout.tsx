import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OSBlack Prompt Architect — by Owais Baat",
  description: "A privacy-conscious prompt workspace with guided briefs, concise output, and editable memory. Created by Owais Baat.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
