"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

type Project = {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  demoUrl: string
  longDescription: string
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 3

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for e-commerce analytics and management.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Chart.js"],
      githubUrl: "#",
      demoUrl: "#",
      longDescription:
        "A fully-featured e-commerce dashboard that provides real-time analytics, inventory management, and order processing. Built with React and TypeScript, it features a responsive design that works seamlessly across all devices. The dashboard includes interactive charts for sales analysis, a product management system, and a customer relationship module.",
    },
    {
      id: 2,
      title: "Social Media App",
      description: "A modern social networking platform with real-time features.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      githubUrl: "#",
      demoUrl: "#",
      longDescription:
        "A full-stack social media application that enables users to connect, share content, and interact in real-time. The frontend is built with React, while the backend uses Node.js and Express. Real-time features like chat and notifications are implemented using Socket.io. The app includes user authentication, profile management, post creation with media upload, and a responsive design.",
    },
    {
      id: 3,
      title: "Task Management System",
      description: "A collaborative task management tool for teams and individuals.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "TypeScript", "Next.js", "Prisma", "PostgreSQL"],
      githubUrl: "#",
      demoUrl: "#",
      longDescription:
        "A comprehensive task management system designed for both individual users and teams. It features drag-and-drop task organization, priority setting, deadline management, and team collaboration tools. Built with Next.js and TypeScript, it offers server-side rendering for optimal performance and SEO. The backend uses Prisma ORM with a PostgreSQL database for efficient data management.",
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "A beautiful weather application with detailed forecasts.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "TypeScript", "OpenWeather API", "Framer Motion"],
      githubUrl: "#",
      demoUrl: "#",
      longDescription:
        "An elegant weather forecast application that provides current conditions and forecasts for any location worldwide. The app features beautiful visualizations of weather data, including temperature, humidity, wind speed, and precipitation. Built with React and TypeScript, it uses the OpenWeather API for accurate data and Framer Motion for smooth animations and transitions.",
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "A personal fitness tracking application with progress visualization.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "TypeScript", "Firebase", "Recharts", "Tailwind CSS"],
      githubUrl: "#",
      demoUrl: "#",
      longDescription:
        "A comprehensive fitness tracking application that helps users monitor their workouts, nutrition, and overall progress. The app includes features for creating custom workout routines, tracking daily activities, setting goals, and visualizing progress over time. Built with React and TypeScript, it uses Firebase for authentication and data storage, and Recharts for data visualization.",
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "A recipe discovery app with filtering and saving capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Context API", "Spoonacular API", "CSS Modules"],
      githubUrl: "#",
      demoUrl: "#",
      longDescription:
        "A recipe discovery application that helps users find recipes based on ingredients, dietary restrictions, and cuisine preferences. The app features a clean, intuitive interface for browsing recipes, detailed cooking instructions, nutritional information, and the ability to save favorites. Built with React and the Context API for state management, it integrates with the Spoonacular API for comprehensive recipe data.",
    },
  ]

  // Pagination logic
  const totalPages = Math.ceil(projects.length / projectsPerPage)
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-4xl font-bold text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects Showcase
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="group h-full overflow-hidden border-zinc-700 bg-zinc-800/50 transition-all duration-300 hover:border-[#9ccc3d] hover:shadow-[0_0_15px_rgba(156,204,61,0.3)]"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mb-4 text-sm text-zinc-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} className="bg-[#9ccc3d]/20 text-[#9ccc3d] hover:bg-[#9ccc3d]/30">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge className="bg-zinc-700 text-zinc-300 hover:bg-zinc-600">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between p-4 pt-0">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-zinc-600 text-zinc-300 hover:border-[#9ccc3d] hover:bg-[#9ccc3d]/10 hover:text-[#9ccc3d]"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.githubUrl, "_blank")
                    }}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-[#9ccc3d] text-black hover:bg-[#8bbb2c]"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.demoUrl, "_blank")
                    }}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-12 flex items-center justify-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full border-zinc-700 text-zinc-400 hover:border-[#9ccc3d] hover:text-[#9ccc3d]"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous page</span>
          </Button>

          {Array.from({ length: totalPages }).map((_, index) => (
            <Button
              key={index}
              variant={currentPage === index + 1 ? "default" : "outline"}
              className={`h-10 w-10 rounded-full ${
                currentPage === index + 1
                  ? "bg-[#9ccc3d] text-black hover:bg-[#8bbb2c]"
                  : "border-zinc-700 text-zinc-400 hover:border-[#9ccc3d] hover:text-[#9ccc3d]"
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Button>
          ))}

          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full border-zinc-700 text-zinc-400 hover:border-[#9ccc3d] hover:text-[#9ccc3d]"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next page</span>
          </Button>
        </div>

        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-3xl bg-zinc-900 text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-[#9ccc3d]">{selectedProject?.title}</DialogTitle>
              <button
                className="absolute right-4 top-4 rounded-full p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                onClick={() => setSelectedProject(null)}
              >
                <X className="h-5 w-5" />
              </button>
            </DialogHeader>

            {selectedProject && (
              <div className="mt-4">
                <div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <DialogDescription className="mb-4 text-zinc-300">{selectedProject.longDescription}</DialogDescription>

                <div className="mb-6">
                  <h4 className="mb-2 text-lg font-medium text-white">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} className="bg-[#9ccc3d]/20 text-[#9ccc3d]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    className="border-zinc-600 text-zinc-300 hover:border-[#9ccc3d] hover:bg-[#9ccc3d]/10 hover:text-[#9ccc3d]"
                    onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </Button>
                  <Button
                    className="bg-[#9ccc3d] text-black hover:bg-[#8bbb2c]"
                    onClick={() => window.open(selectedProject.demoUrl, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

