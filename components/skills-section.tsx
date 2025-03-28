"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import {
  ReactIcon,
  NextIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  NodeJsIcon,
  ReduxIcon,
  HtmlIcon,
  CssIcon,
} from "@/components/Icons";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 100 },
        { name: "Next.js", level: 100 },
        { name: "JavaScript", level: 100 },
        { name: "TypeScript", level: 100 },
        { name: "Redux", level: 100 },
        { name: "Electron.js", level: 100 },
        { name: "Tailwind CSS", level: 100 },
        { name: "SASS/CSS", level: 100 },
        { name: "HTML5", level: 100 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 100 },
        { name: "Express.js", level: 100 },
        { name: "MongoDB", level: 100 },
        { name: "MySQL", level: 100 },
      ],
    },
    {
      title: "Other",
      skills: [
        { name: "React Native", level: 100 },
        { name: "Figma", level: 100 },
        { name: "Git", level: 100 },
      ],
    },
  ];

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
                                ></motion.div>
                              </div>
                              <span className="text-center text-sm font-medium text-zinc-300 group-hover:text-[#9ccc3d]">
                                {skill.name}
                              </span>
                            </motion.div>
                          </TooltipTrigger>
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
                  { name: "React", icon: <Image src={ReactIcon} alt="React" width={32} height={32} /> }, 
                  { name: "Next.js", icon: <Image src={NextIcon} alt="React" width={32} height={32} /> }, 
                  { name: "JavaScript", icon: <Image src={JavaScriptIcon} alt="React" width={32} height={32} /> },
                  { name: "TypeScript", icon: <Image src={TypeScriptIcon} alt="React" width={32} height={32} /> },
                  { name: "Redux", icon: <Image src={ReduxIcon} alt="React" width={32} height={32} /> },
                  { name: "Node.js", icon: <Image src={NodeJsIcon} alt="React" width={32} height={32} /> },
                  { name: "HTML5", icon: <Image src={HtmlIcon} alt="React" width={32} height={32} /> },
                  { name: "CSS", icon: <Image src={CssIcon} alt="React" width={32} height={32} /> },
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
                    <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800">
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
  );
}
