
import { Github, Linkedin, Download, Mail } from "lucide-react"
import { RiNodejsFill, RiReactjsFill, RiTailwindCssFill, RiTwitterXLine } from "react-icons/ri"
import { SiSupabase } from "react-icons/si"
import Link from "next/link"

export default function Hero() {
    return (
        <section className="py-6 md:py-10">
            <div className="grid md:grid-cols-3 gap-10 items-center max-w-6xl mx-auto">
                <div className="space-y-6 md:col-span-2 animate-fade-in">
                    <div className="space-y-2">
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Sai Vivek Manikonda</h1>
                        <p className="text-lg sm:text-xl text-muted-foreground">Software Engineer</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Mail className="h-4 w-4" />
                            <a href="mailto:vivekmanikonda113@gmail.com">vivekmanikonda113@gmail.com</a>
                        </div>
                    </div>

                    <p className="text-muted-foreground text-sm sm:text-base">
                        A goal-oriented software developer with experience in building web applications using modern technologies
                        like React, Node.js, and more. Seeking to leverage my technical skills to deliver exceptional user
                        experiences.
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        <Link
                            href="/.pdf"
                            target="_blank"
                            download
                        >
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 bg-primary text-primary-foreground hover:bg-primary/90">
                                <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Resume
                            </button>
                        </Link>
                        <Link
                            href="https://github.com/CodewVivek"
                            target="_blank"
                        >
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                                <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                            </button>
                        </Link>
                        <Link
                            href="mailto:vivekmanikonda113@gmail.com"
                            target="_blank"
                        >
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                            </button>
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/haquedot/"
                            target="_blank"
                        >
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                                <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center h-48 md:h-auto animate-fade-in-delayed">
                    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
                        {/* Grid with floating tech stacks */}
                        <div className="absolute inset-0 grid grid-cols-2 gap-2 sm:gap-4 p-2 sm:p-4">
                            {/* Top Left - React Logo */}
                            <div className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                                <div className="text-4xl text-[#087ea4] animate-spin-slow">
                                    <RiReactjsFill />
                                </div>
                            </div>

                            {/* Top Right - Node.js */}
                            <div className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center animate-bounce-slow">
                                <div className="text-4xl">
                                    <RiNodejsFill />
                                </div>
                            </div>

                            {/* Bottom Left - Database */}
                            <div className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                                <div className="text-4xl text-green-600 animate-pulse">
                                    <SiSupabase />
                                </div>
                            </div>
                            <div className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center animate-pulse">
                                <div className="text-4xl text-sky-500">
                                    <RiTailwindCssFill />
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-3 sm:-top-5 -left-3 sm:-left-5 bg-background px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm shadow-md border animate-float">
                            ReactJs
                        </div>

                        <div className="absolute -bottom-3 sm:-bottom-5 -right-3 sm:-right-5 bg-background px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm shadow-md border animate-float-delayed">
                            Tailwind CSS
                        </div>

                        <div className="absolute -top-3 sm:-top-5 -right-3 sm:-right-5 bg-background px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm shadow-md border animate-float-x">
                            Node.js
                        </div>

                        <div className="absolute -bottom-3 sm:-bottom-5 -left-3 sm:-left-5 bg-background px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm shadow-md border animate-float-x-delayed">
                            Supabase
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 