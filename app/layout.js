import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyOrigin - AI Career Coach",
  description: "MyOrigin empowers users to build standout resumes, track skill progress, and stay updated with industry trends — all in one personalized platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className}`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header />

            {/* main content */}
            <main className="min-h-screen">{children}</main>
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with 💗 by Dhruv Garg</p>
              </div>
            </footer>

          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
