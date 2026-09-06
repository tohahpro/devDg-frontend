import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
// @ts-ignore - allow side-effect css import without type declarations
import "./globals.css";
import { cn } from "@/lib/utils";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Depth Digi | Web Development, SEO & Photo Editing",
    template: "%s | Depth Digi",
  },

  description:
    "Depth Digi helps businesses build high-performing websites, improve search visibility, and create professional product images that drive digital growth.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      cz-shortcut-listen="true"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <>
          {children}
          <Toaster richColors position="bottom-center" />
          <ScrollToTop />
        </>
      </body>
    </html>
  );
}
