"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutSection() {
  const timelineItems = [
    {
      year: "2023 - Present",
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      description: "Leading the frontend team in developing modern React applications with TypeScript.",
    },
    {
      year: "2021 - 2023",
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      description: "Developed responsive web applications using React, Redux, and TypeScript.",
    },
    {
      year: "2019 - 2021",
      title: "Junior Web Developer",
      company: "Web Creators Studio",
      description: "Started my journey with React and modern JavaScript frameworks.",
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-4xl font-bold text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-[#9ccc3d]">
              <Image
                src="/placeholder.svg?height=256&width=256"
                alt="Developer Profile"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-zinc-800/50 border-zinc-700">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-white">Hello, I'm Vlad Honcharenko</h3>
                <p className="mb-6 text-zinc-300">
                  I'm a passionate Frontend Developer specializing in React and TypeScript. With over 5 years of
                  experience in building modern web applications, I focus on creating clean, efficient, and
                  user-friendly interfaces.
                </p>
                <p className="text-zinc-300">
                  My approach combines technical expertise with creative problem-solving to deliver exceptional digital
                  experiences that meet both user needs and business objectives.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-semibold text-white">My Journey</h3>

          <div className="relative mx-auto max-w-3xl">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-zinc-700"></div>

            {/* Timeline items */}
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                  <div className="w-1/2 px-4"></div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -ml-2.5 h-5 w-5 -translate-x-1/2 rounded-full bg-[#9ccc3d]"></div>

                  <div className="w-1/2 px-4">
                    <Card className="bg-zinc-800/50 border-zinc-700 overflow-hidden">
                      <div className="h-1 w-full bg-[#9ccc3d]"></div>
                      <CardContent className="p-4">
                        <span className="mb-2 block text-sm font-medium text-[#9ccc3d]">{item.year}</span>
                        <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-zinc-400">{item.company}</p>
                        <p className="mt-2 text-sm text-zinc-300">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

