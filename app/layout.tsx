import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IELTS CD Mock | Onlayn IELTS imtihon simulyatori",
  description:
    "IELTS Computer-Delivered formatiga mos onlayn mock imtihon platformasi. Listening, Reading, Writing, Speaking - AI baholash bilan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
