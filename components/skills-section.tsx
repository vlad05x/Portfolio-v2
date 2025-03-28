"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Redux", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "SASS/CSS", level: 85 },
        { name: "HTML5", level: 95 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "MongoDB", level: 65 },
        { name: "MySQL", level: 60 },
      ],
    },
    {
      title: "Other",
      skills: [
        { name: "React Native", level: 70 },
        { name: "Figma", level: 75 },
        { name: "Git", level: 85 },
      ],
    },
  ]

  const chartData = [
    { name: "React", value: 95 },
    { name: "TypeScript", value: 90 },
    { name: "Next.js", value: 85 },
    { name: "Node.js", value: 75 },
    { name: "UI/UX", value: 80 },
  ]

  return (
    <section id="skills" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-4xl font-bold text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full bg-zinc-800/50 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="mb-6 text-xl font-semibold text-white">{category.title}</h3>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {category.skills.map((skill, index) => (
                      <TooltipProvider key={skill.name}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <motion.div
                              className="group flex h-24 cursor-pointer flex-col items-center justify-center rounded-lg bg-zinc-900 p-3 transition-all duration-300 hover:bg-[#9ccc3d]/10"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <div className="mb-2 h-2 w-full rounded-full bg-zinc-700">
                                <motion.div
                                  className="h-full rounded-full bg-[#9ccc3d]"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                                ></motion.div>
                              </div>
                              <span className="text-center text-sm font-medium text-zinc-300 group-hover:text-[#9ccc3d]">
                                {skill.name}
                              </span>
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Proficiency: {skill.level}%</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-zinc-800/50 border-zinc-700">
            <CardContent className="p-6">
              <h3 className="mb-6 text-center text-xl font-semibold text-white">Tools & Technologies</h3>

              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {[
                  { name: "React", icon: "⚛️" },
                  { name: "TypeScript", icon: "TS" },
                  { name: "Next.js", icon: "N" },
                  { name: "Redux", icon: "⟲" },
                  { name: "Node.js", icon: "🟢" },
                  { name: "MongoDB", icon: "🍃" },
                  { name: "Git", icon: "⎇" },
                  { name: "Tailwind", icon: "🌊" },
                  { name: "Figma", icon: "🎨" },
                  { name: "Jest", icon: "🃏" },
                  { name: "GraphQL", icon: "◮" },
                  { name: "Docker", icon: "🐳" },
                ].map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    className="flex flex-col items-center justify-center rounded-lg bg-zinc-900 p-4 text-center transition-all duration-300 hover:bg-[#9ccc3d]/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800 text-3xl">
                      {tool.icon}
                    </div>
                    <span className="font-medium text-zinc-300">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

