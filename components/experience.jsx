"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
    {
        title: "Freelance Full Stack Developer",
        company: "CCBOND E-COMMERCE PVT LTD",
        period: "September 2024 - April 2025",
        responsibilities: [
            "Led end-to-end frontend development using React.js and Tailwind CSS to create a responsive UI, supporting digital product management for early chemical suppliers.",
            "Collaborated closely with the co-founder to define product requirements and ship 8+ core features.",
            "Integrated REST APIs for secure user login, file uploads, and role-based access control, enhancing platform security and usability.",
            "Contributed to backend modules for managing enquiries and inventory, enabling seamless handling of product records.",
        ],
        skills: ["React", "Tailwind CSS", "MySQL", "Twilio", "JWT"],
    },
]

export default function Experience() {
    return (
        <section id="experience" className="py-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold mb-10">Experience</h2>

                <div className="space-y-10">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="space-y-4"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                                    <p className="text-muted-foreground">{exp.company}</p>
                                </div>
                                <p className="text-sm text-muted-foreground">{exp.period}</p>
                            </div>

                            <ul className="list-disc pl-5 space-y-2">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="text-sm">
                                        {resp}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, idx) => (
                                    <Badge key={idx} variant="outline">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
} 