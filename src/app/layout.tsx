import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

import type React from "react";
import { ThemeProvider } from "~/components/ui/theme-provider";
import Sidebar from "~/components/ui/Sidebar";
import Header from "~/components/ui/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cooking At Home",
  description: "Find and save your favorite recipes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-background text-foreground flex h-screen">
            <Sidebar />
            <div className="flex flex-1 flex-col">
              <Header />
              <main className="flex-1 overflow-auto">{children}</main>
            </div>
          </div>
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              var theme = localStorage.getItem('theme') || 'dark';
              document.documentElement.classList.add(theme);
              document.documentElement.style.colorScheme = theme;
            })();
          `,
          }}
        />
      </body>
    </html>
  );
}
