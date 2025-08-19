"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
    {
        title: "Odd Enough AI",
        description: "Odd Enough AI is a platform where the Odd Enough team leverages AI tools such as GPT-4, Sonar (Perplexity API), and custom Google search to conduct audits, manage CRM details, and enhance their agency’s overall efficiency and profitability.",
        tech: [
            "React.js",
            "Tailwind CSS",
            "Supabase",
            "ChatGPT-4",
            "Sonar (Perplexity API)",
            "Node.js"
        ],
        features: [
            "Comprehensive company audits",
            "AI-powered analytics and insights",
            "Customer growth and marketing tools",
            "Seamless team collaboration features"
        ],
        images: [
            "/public/oddai.png",
        ],
        live: "https://oddenoughai.netlify.app/"
    },
    {
        title: "Launch It",
        description: "Launch It is a dynamic platform built to empower startups by streamlining the discovery, submission, and showcasing of innovative ventures.",
        tech: ["React.js", "Tailwind CSS", "Supabase", "Express js"],
        features: [
            "Advanced Talent Attraction Tools",
            "Enhanced Startup Profile Creation",
            "AI-Powered Analytics",
            "Customer Growth and Marketing Tools",
            "Team Collaboration Tools",
        ],
        images: ["/launch1.png"],
        live: "https://launchit.site",
    },
    {
        title: "CCBOND",
        description: "CCBOND is a comprehensive B2B networking platform that facilitates business connections, lead generation, and communication between companies through enquiries, sales opportunities, and product listings.",
        tech: ["React.js", "Tailwind CSS", "MySQL", "Twilio"],
        features: [
            "Business enquiry and sales posting",
            "Real-time chat and messaging system",
            "Company profile management",
            "Multi-tenant architecture with role-based access",
            "File sharing and document management",
            "Mobile verification and authentication"
        ],
        images: ["/cc1.png"],
        live: "https://ccbond.app/enquiry"
    },
    {
        title: "ClearNav – A Pothole Alert Navigation Application",
        description: "A user-centric mobile application that enhances road safety through real-time pothole alerts and crowdsourced hazard reporting.",
        tech: ["Flutter", "Dart", "Firebase", "Google Maps API"],
        features: [
            "Live Location Tracking",
            "Google Maps Integration",
            "Audio Alerts for Driver Safety",
            "Cross-Platform App Development",
            "Image-Based Severity Detection",
        ],
        images: ["/cl1.png"],
        live: null,
    },
    {
        title: "Facial Emotion Recognition",
        description: "A deep learning app that recognizes human emotions using facial expressions.",
        tech: ["Python", "Machine Learning", "OpenCV", "Keras"],
        features: [
            "Real-time facial detection",
            "Emotion classification with CNN",
            "Uses deep learning CNN model",
            "Built with Keras and TensorFlow",
            "Pretrained Haarcascade with OpenCV",
        ],
        images: ["/emoition_detection.png"],
        live: null,
    },
]

export default function Projects() {
    return (
        <section id="projects" className="py-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold mb-10">Projects</h2>

                <div className="grid gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="grid md:grid-cols-2 gap-6 border rounded-xl overflow-hidden group"
                        >
                            <div className="overflow-hidden relative h-[300px] md:h-[400px] border-b md:border-b-0 md:border-r">
                                <div className="h-full w-full">
                                    <Image
                                        src={project.images?.[0] || "/placeholder.svg"}
                                        alt={project.title}
                                        width={800}
                                        height={1200}
                                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <p className="text-muted-foreground">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tag, idx) => (
                                        <Badge key={idx} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="space-y-2">
                                    <h4 className="font-semibold">Key Features:</h4>
                                    <ul className="list-disc pl-5 space-y-1">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx} className="text-sm">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex gap-3 pt-2">
                                    {project.live ? (
                                        <Button size="sm">
                                            <Link
                                                href={project.live}
                                                className="flex items-center"
                                                target="_blank"
                                            >
                                                <ExternalLink className="mr-2 h-4 w-4" /> Live
                                            </Link>
                                        </Button>
                                    ) : (
                                        <Button size="sm" variant="outline" disabled>
                                            <span className="flex items-center">
                                                <span className="mr-2 h-4 w-4">⏰</span> Expired
                                            </span>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
} 