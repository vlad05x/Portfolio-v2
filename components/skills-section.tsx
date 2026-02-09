"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  Code2,
  Database,
  Smartphone,
  Palette,
  Zap,
  Shield,
  Globe,
  Layout,
  Server,
  Cloud,
  Cpu,
  BarChart,
} from "lucide-react";

export default function SkillsSection() {
  const serviceCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="h-6 w-6" />,
      services: [
        {
          name: "SPA Development",
          description: "Single Page Applications with React/Next.js",
          icon: <Layout className="h-5 w-5" />,
        },
        {
          name: "Responsive UI Implementation",
          description: "Mobile-first design that works on all devices",
          icon: <Smartphone className="h-5 w-5" />,
        },
        {
          name: "Performance Optimization",
          description: "Fast loading times and smooth user experience",
          icon: <Zap className="h-5 w-5" />,
        },
        {
          name: "Component Architecture",
          description: "Reusable, maintainable UI components",
          icon: <Cpu className="h-5 w-5" />,
        },
        {
          name: "State Management",
          description: "Complex application state with Redux/Zustand",
          icon: <Database className="h-5 w-5" />,
        },
        {
          name: "UI/UX Integration",
          description: "Transform designs into functional interfaces",
          icon: <Palette className="h-5 w-5" />,
        },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      services: [
        {
          name: "REST API Design",
          description: "Scalable and secure API architecture",
          icon: <Globe className="h-5 w-5" />,
        },
        {
          name: "Database Architecture",
          description: "Efficient data modeling and optimization",
          icon: <Database className="h-5 w-5" />,
        },
        {
          name: "Server-side Logic",
          description: "Business logic implementation with Node.js",
          icon: <Server className="h-5 w-5" />,
        },
        {
          name: "Authentication Systems",
          description: "Secure user authentication and authorization",
          icon: <Shield className="h-5 w-5" />,
        },
        {
          name: "Cloud Integration",
          description: "AWS/Azure deployment and management",
          icon: <Cloud className="h-5 w-5" />,
        },
        {
          name: "Performance Monitoring",
          description: "Real-time application monitoring and analytics",
          icon: <BarChart className="h-5 w-5" />,
        },
      ],
    },
    {
      title: "Full-Stack Solutions",
      icon: <Globe className="h-6 w-6" />,
      services: [
        {
          name: "MVP Development",
          description: "Rapid prototype to market-ready product",
          icon: <Zap className="h-5 w-5" />,
        },
        {
          name: "E-commerce Platforms",
          description: "Complete online store solutions",
          icon: <Layout className="h-5 w-5" />,
        },
        {
          name: "Progressive Web Apps",
          description: "Offline-capable web applications",
          icon: <Smartphone className="h-5 w-5" />,
        },
        {
          name: "Real-time Applications",
          description: "WebSocket-based live features",
          icon: <Globe className="h-5 w-5" />,
        },
        {
          name: "API Integration",
          description: "Third-party service integration",
          icon: <Cloud className="h-5 w-5" />,
        },
        {
          name: "Code Optimization",
          description: "Performance tuning and refactoring",
          icon: <Cpu className="h-5 w-5" />,
        },
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-4 text-center text-4xl font-bold text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Services & Solutions
        </motion.h2>

        <motion.p
          className="mb-12 text-center text-lg text-zinc-400 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          From concept to deployment, I provide comprehensive development services that solve real business problems and deliver exceptional user experiences.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full bg-zinc-800/50 border-zinc-700 hover:border-[#9ccc3d]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="mr-3 text-[#9ccc3d]">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {category.services.map((service, index) => (
                      <TooltipProvider key={service.name}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <motion.div
                              className="group flex cursor-pointer items-start rounded-lg bg-zinc-900/50 p-3 transition-all duration-300 hover:bg-[#9ccc3d]/10"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                              }}
                            >
                              <div className="mr-3 mt-0.5 text-[#9ccc3d] group-hover:text-white transition-colors">
                                {service.icon}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-white group-hover:text-[#9ccc3d] transition-colors">
                                  {service.name}
                                </h4>
                                <p className="text-sm text-zinc-400 mt-1">
                                  {service.description}
                                </p>
                              </div>
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent side="right" className="bg-zinc-800 border-zinc-700 text-white max-w-xs">
                            <p className="text-sm">
                              Click to learn more about {service.name}
                            </p>
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
            <CardContent className="p-8">
              <h3 className="mb-8 text-center text-xl font-semibold text-white">
                Technologies & Tools
              </h3>

              <div className="grid gap-6 md:grid-cols-3">
                {/* Frontend Technologies */}
                <motion.div
                  className="rounded-xl bg-zinc-900/50 border border-zinc-700 p-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{
                    borderColor: "#9ccc3d",
                    boxShadow: "0 0 20px rgba(156, 204, 61, 0.1)"
                  }}
                >
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 rounded-lg bg-[#9ccc3d]/10 p-2">
                      <Code2 className="h-5 w-5 text-[#9ccc3d]" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Frontend</h4>
                  </div>

                  <div className="space-y-3">
                    {[
                      { name: "React", desc: "Component library" },
                      { name: "Next.js", desc: "Full-stack framework" },
                      { name: "TypeScript", desc: "Type safety" },
                      { name: "Tailwind CSS", desc: "Utility-first CSS" },
                      { name: "Redux", desc: "State management" },
                      { name: "HTML5/CSS3", desc: "Web standards" },
                    ].map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        className="group flex items-center justify-between rounded-lg bg-zinc-800/50 p-3 transition-all duration-300 hover:bg-[#9ccc3d]/5"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <div>
                          <span className="block text-sm font-medium text-white group-hover:text-[#9ccc3d] transition-colors">
                            {tech.name}
                          </span>
                          <span className="text-xs text-zinc-400">
                            {tech.desc}
                          </span>
                        </div>
                        <div className="text-[#9ccc3d]/50 group-hover:text-[#9ccc3d] transition-colors">
                          <Cpu className="h-4 w-4" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Backend Technologies */}
                <motion.div
                  className="rounded-xl bg-zinc-900/50 border border-zinc-700 p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{
                    borderColor: "#9ccc3d",
                    boxShadow: "0 0 20px rgba(156, 204, 61, 0.1)"
                  }}
                >
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 rounded-lg bg-[#9ccc3d]/10 p-2">
                      <Server className="h-5 w-5 text-[#9ccc3d]" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Backend</h4>
                  </div>

                  <div className="space-y-3">
                    {[
                      { name: "Node.js", desc: "Runtime environment" },
                      { name: "Express.js", desc: "Web framework" },
                      { name: "MongoDB", desc: "NoSQL database" },
                      { name: "MySQL", desc: "SQL database" },
                      { name: "REST API", desc: "API architecture" },
                      { name: "GraphQL", desc: "Query language" },
                    ].map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        className="group flex items-center justify-between rounded-lg bg-zinc-800/50 p-3 transition-all duration-300 hover:bg-[#9ccc3d]/5"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 + 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <div>
                          <span className="block text-sm font-medium text-white group-hover:text-[#9ccc3d] transition-colors">
                            {tech.name}
                          </span>
                          <span className="text-xs text-zinc-400">
                            {tech.desc}
                          </span>
                        </div>
                        <div className="text-[#9ccc3d]/50 group-hover:text-[#9ccc3d] transition-colors">
                          <Database className="h-4 w-4" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Other Technologies */}
                <motion.div
                  className="rounded-xl bg-zinc-900/50 border border-zinc-700 p-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{
                    borderColor: "#9ccc3d",
                    boxShadow: "0 0 20px rgba(156, 204, 61, 0.1)"
                  }}
                >
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 rounded-lg bg-[#9ccc3d]/10 p-2">
                      <Zap className="h-5 w-5 text-[#9ccc3d]" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Other</h4>
                  </div>

                  <div className="space-y-3">
                    {[
                      { name: "Git", desc: "Version control" },
                      { name: "Docker", desc: "Containerization" },
                      { name: "AWS", desc: "Cloud services" },
                      { name: "Figma", desc: "Design tool" },
                      { name: "React Native", desc: "Mobile development" },
                      { name: "Performance", desc: "Optimization" },
                    ].map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        className="group flex items-center justify-between rounded-lg bg-zinc-800/50 p-3 transition-all duration-300 hover:bg-[#9ccc3d]/5"
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
                        whileHover={{ x: 5 }}
                      >
                        <div>
                          <span className="block text-sm font-medium text-white group-hover:text-[#9ccc3d] transition-colors">
                            {tech.name}
                          </span>
                          <span className="text-xs text-zinc-400">
                            {tech.desc}
                          </span>
                        </div>
                        <div className="text-[#9ccc3d]/50 group-hover:text-[#9ccc3d] transition-colors">
                          <Cloud className="h-4 w-4" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
