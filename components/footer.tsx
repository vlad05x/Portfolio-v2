"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="border-t border-zinc-800 bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-center text-zinc-400 md:text-left">
              &copy; {currentYear ?? "Loading..."} Vlad Honcharenko. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            <a href="https://github.com/vlad05x" className="text-zinc-400 transition-colors hover:text-[#9ccc3d]" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/vlad-honcharenko-4a003228b/" className="text-zinc-400 transition-colors hover:text-[#9ccc3d]" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:organizm777alf@gmail.com" className="text-zinc-400 transition-colors hover:text-[#9ccc3d]">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <nav>
              <ul className="flex flex-wrap justify-center gap-4 md:justify-end">
                <li><a href="#" className="text-sm text-zinc-400 transition-colors hover:text-[#9ccc3d]">Home</a></li>
                <li><a href="#about" className="text-sm text-zinc-400 transition-colors hover:text-[#9ccc3d]">About</a></li>
                <li><a href="#skills" className="text-sm text-zinc-400 transition-colors hover:text-[#9ccc3d]">Skills</a></li>
                <li><a href="#projects" className="text-sm text-zinc-400 transition-colors hover:text-[#9ccc3d]">Projects</a></li>
                <li><a href="#contact" className="text-sm text-zinc-400 transition-colors hover:text-[#9ccc3d]">Contact</a></li>
              </ul>
            </nav>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
