import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"

import { Suspense } from "react"
import Loading from "@/components/loading"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Vivek Portofolio",
    icons: {
        icon: [
            { url: '/haquedot.svg', sizes: 'any', type: 'image/x-icon' },
            { url: '/haquedot.svg', sizes: '16x16', type: 'image/png' },
            { url: '/haquedot.svg', sizes: '32x32', type: 'image/png' },
        ],
        apple: '/haquedot.svg',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>

                    <Suspense fallback={<Loading />}>
                        <Analytics />
                        <Header />
                        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
                        <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Vivek.. All rights reserved.
                        </footer>
                    </Suspense>
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    )
} 