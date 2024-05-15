import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luis Castro - Software Engineer",
  description: "Software Engineer and Technical Coach with client-facing experience, excellent communication skills, and the ability to drive solutions to meet user needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
