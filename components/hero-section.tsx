"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import ParticleBackground from "./particle-background"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <motion.h1
              className="mb-4 text-5xl font-bold text-white md:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="relative">
                Vlad Honcharenko
                <span
                  className="absolute -inset-1 block -z-10 blur-lg opacity-50"
                  style={{ backgroundColor: "#9ccc3d" }}
                ></span>
              </span>
            </motion.h1>

            <motion.h2
              className="mb-8 text-xl text-zinc-400 md:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Full Stack Developer | React Developer | Node.js | SaaS Developer
            </motion.h2>

            <motion.div
              className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg" 
                className="bg-[#9ccc3d] text-black hover:bg-[#8bbb2c] transition-all duration-300 hover:shadow-[0_0_15px_rgba(156,204,61,0.5)]"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#9ccc3d] text-[#9ccc3d] hover:bg-[#9ccc3d]/10 hover:text-[#9ccc3d] transition-all duration-300"
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  projectsSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
        }}
      >
        <ChevronDown className="h-8 w-8 text-[#9ccc3d]" />
      </motion.div>
    </section>
  )
}

