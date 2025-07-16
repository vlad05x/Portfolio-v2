"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Github,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { v4 as uuidv4 } from "uuid";
import DonutImg from "../public/images/Donut.jpeg";
import PortfolioImg from "../public/images/portfolio-beauty-logo.png";
import MovieFinderIcon from "../public/images/movie-finderIcon.png";
import TrellotionImg from "../public/images/trellotionImg.png";
import FoodDxImg from "../public/images/FoodDX.png";
import BasketBallImg from "../public/images/BasketballMania.png";
import LanguageLearnImg from "../public/images/LanguageLearning.png";
import MovieAppIcon from "../public/images/movie-appLogo.png";
import DiGiImg from "../public/images/Di-Gi_img.png";
import RGymImg from "../public/images/RGym.png";
import LymaImg from "../public/images/Site_lyma.png";

type Project = {
  id: string | number;
  title: string;
  description: string;
  image: string | StaticImageData;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  longDescription: string;
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const projects: Project[] = [
    {
      id: uuidv4(),
      title: "DoughDelights",
      description:
        "A modern and convenient donut shop website where you can order delicious donuts online.",
      image: DonutImg,
      technologies: ["Next.js", "TypeScrtipt", "TailwindCSS", "Radix-UI", "Canvas"],
      githubUrl: "https://github.com/vlad05x/donut-shop",
      demoUrl: "https://donut-shop-henna.vercel.app/",
      longDescription:
        "Welcome to the stylish and intuitive donut shop website, designed specifically for convenient and fast online ordering of delicious donuts. The project was made using modern technologies: Next.js for fast work and SEO optimization, TypeScript for reliability and code quality, and TailwindCSS for adaptive and aesthetic design. Interactive components are implemented using Radix-UI, and beautiful animation on HTML Canvas creates an atmosphere of celebration and appetite. Make your order quickly, easily and with pleasure! This site was also made using AI.",
    },
    {
      id: uuidv4(),
      title: "Portfolio-beauty",
      description:
        "Here you will find works that reflect a unique approach and style.",
      image: PortfolioImg,
      technologies: ["React", "JavaScript", "SCSS / CSS"],
      githubUrl: "https://github.com/vlad05x/portfolio-beauty",
      demoUrl: "https://vlad05x.github.io/portfolio-beauty/",
      longDescription:
        "This project was developed as a freelance task to create a portfolio website for a beauty salon. Built using React and JavaScript, the website features a responsive design that ensures smooth functionality across all devices. It offers a modern, user-friendly interface, allowing clients to easily explore the salon's services and make appointments. The design focuses on enhancing the user experience while maintaining the salon's brand identity.",
    },
    {
      id: uuidv4(),
      title: "Movie-finder",
      description:
        "An app that helps you choose a movie to watch by generating random recommendations based on your preferences.",
      image: MovieFinderIcon,
      technologies: [
        "React",
        "TypeScript",
        "MUI (Material UI)",
        "Tailwind CSS",
        "REST API",
      ],
      githubUrl: "https://github.com/vlad05x/movie-finder",
      demoUrl: "https://vlad05x.github.io/movie-finder/",
      longDescription:
        "This app helps users discover new movies by providing random recommendations based on their preferences, such as genre or rating. Built with React, it offers a smooth, interactive experience. The app leverages an external API to fetch movie data, ensuring up-to-date and diverse suggestions. It’s perfect for those who want quick, personalized recommendations and enjoy exploring new films.",
    },
    {
      id: uuidv4(),
      title: "Trellotion",
      description:
        "An application that will help you with saving tasks you need to do.",
      image: TrellotionImg,
      technologies: [
        "React",
        "JavaScript",
        "Redux",
        "Electron.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "SCSS / CSS",
        "Responsive",
      ],
      githubUrl: "https://github.com/vlad05x/Trellotion-v2",
      demoUrl: "https://trellotion-v2.vercel.app/",
      longDescription:
        "This project integrates both a backend and a database to efficiently manage and store user data, tables, and task cards. The application is inspired by Trello, offering a similar board and card interface for task management. Users can create, organize, and track their tasks seamlessly. The backend is designed to handle user authentication and store data persistently, ensuring that your tasks are always available and up-to-date.",
    },
    {
      id: uuidv4(),
      title: "FoodDX",
      description:
        "Discover a unique combination of excellent cuisine and attentive service. Come and enjoy a unique gastronomic experience with us.",
      image: FoodDxImg,
      technologies: ["JavaScript", "HTML5", "CSS3", "Figma", "Responsive"],
      githubUrl: "https://github.com/vlad05x/FoodDX",
      demoUrl: "https://vlad05x.github.io/FoodDX/",
      longDescription:
        "Welcome to FoodDX, where culinary excellence meets unforgettable dining experiences. Our menu features a fusion of flavors crafted with the finest ingredients, designed to delight every palate. Whether you're here for a casual meal or a special celebration, our welcoming atmosphere and exceptional service will ensure your visit is memorable. Discover the taste of quality, only at FoodDX — where food is art",
    },
    {
      id: uuidv4(),
      title: "BasketballMania",
      description:
        "An online store entirely dedicated to basketball, where you'll find everything you need from professional gear to accessories for the game.",
      image: BasketBallImg,
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "PHP",
        "MySQL",
        "Responsive",
      ],
      githubUrl: "https://github.com/vlad05x/basketball-shop",
      demoUrl: "https://vlad05x.github.io/basketball-shop/",
      longDescription:
        "BasketballGear is an online store dedicated to basketball enthusiasts, offering a wide range of products from professional gear to essential accessories for the game. Whether you're a player, coach, or fan, you'll find everything you need to enhance your basketball experience. This platform is built using HTML5, CSS3, JavaScript, Bootstrap, PHP, and MySQL, ensuring a smooth and responsive shopping experience for all users.",
    },
    {
      id: uuidv4(),
      title: "Language-learning",
      description:
        "An app for learning new words that turns the memorization process into a fun and effective activity.",
      image: LanguageLearnImg,
      technologies: [
        "React",
        "TypeScript",
        "MUI (Material UI)",
        "Tailwind CSS",
        "Responsive",
      ],
      githubUrl: "https://github.com/vlad05x/Language-learning",
      demoUrl: "http://vlad05x.github.io/Language-learning/",
      longDescription:
        "This application helps users learn new words by transforming the memorization process into an engaging and effective experience. Through interactive exercises and a user-friendly interface, it enhances vocabulary retention while making learning enjoyable. Built with React, TypeScript, MUI (Material UI), and Tailwind CSS, the app ensures a smooth, responsive, and visually appealing experience. Whether you're expanding your vocabulary for personal growth or language learning, this tool makes the process seamless and fun.",
    },
    {
      id: uuidv4(),
      title: "Movie-app",
      description: "An app that helps you find movies",
      image: MovieAppIcon,
      technologies: ["Next.js", "TypeScript", "CSS3", "Rest API", "Responsive"],
      githubUrl: "https://github.com/vlad05x/movie-app",
      demoUrl: "https://movie-app-chi-swart.vercel.app/",
      longDescription:
        "An application that helps you find movies by searching for titles and displaying all matching results. It provides a fast and efficient way to explore films, making it easy to discover the right one. Built with Next.js, TypeScript, CSS3, and REST API, the app delivers a seamless and responsive user experience. Whether you're looking for a specific movie or exploring different options, this tool makes searching effortless.",
    },
    {
      id: uuidv4(),
      title: "Di-Gi",
      description:
        "A full-cycle digital agency focused on the best results for our clients in marketing, sales and management.",
      image: DiGiImg,
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive"],
      githubUrl: "https://github.com/vlad05x/movie-app",
      demoUrl: "https://movie-app-chi-swart.vercel.app/",
      longDescription:
        "A full-cycle digital agency dedicated to delivering top results in marketing, sales, and business management. Our goal is to create impactful digital solutions that drive growth and enhance brand presence. This project was developed after completing a section of a professional course, applying industry best practices. Built with HTML5, CSS3, JavaScript, and Responsive design, the website ensures seamless performance across all devices while maintaining a sleek and modern look.",
    },
    {
      id: uuidv4(),
      title: "RGym",
      description:
        "Do you want to train? Join our community and start your journey to health and great shape today!",
      image: RGymImg,
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive"],
      githubUrl: "https://github.com/vlad05x/RGym",
      demoUrl: "https://vlad05x.github.io/RGym/",
      longDescription:
        "A modern and dynamic landing page designed for a gym, showcasing its facilities, services, and membership options. The website provides an engaging user experience, helping potential clients explore training programs, schedules, and pricing with ease. Built with HTML5, CSS3, JavaScript, and Responsive design, it ensures smooth navigation and optimal performance on all devices. Whether you're a fitness enthusiast or a beginner, this site delivers all the essential information to get started on your fitness journey.",
    },
    {
      id: uuidv4(),
      title: "Lyma",
      description:
        "We offer everything you need to create a unique look and care for your skin. Trust us and enjoy confidence and beauty every day!",
      image: LymaImg,
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive"],
      githubUrl: "https://github.com/vlad05x/Lymo",
      demoUrl: "https://vlad05x.github.io/Lymo/",
      longDescription:
        "We provide everything you need to craft a unique style and take care of your skin with high-quality products. Our selection ensures that you can enhance your beauty routine with confidence and ease. Trust us to deliver the best in skincare and personal care, helping you feel radiant and empowered every day.",
    },
  ];

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-zinc-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-[#9ccc3d]/20 text-[#9ccc3d] hover:bg-[#9ccc3d]/30"
                      >
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
                    className="border-zinc-600 text-zinc-800 hover:border-[#9ccc3d] hover:bg-[#9ccc3d]/10 hover:text-[#9ccc3d]"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubUrl, "_blank");
                    }}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-[#9ccc3d] text-black hover:bg-[#8bbb2c]"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.demoUrl, "_blank");
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

        <Dialog
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          <DialogContent className="max-w-3xl bg-zinc-900 text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-[#9ccc3d]">
                {selectedProject?.title}
              </DialogTitle>
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

                <DialogDescription className="mb-4 text-zinc-300">
                  {selectedProject.longDescription}
                </DialogDescription>

                <div className="mb-6">
                  <h4 className="mb-2 text-lg font-medium text-white">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-[#9ccc3d]/20 text-[#9ccc3d]"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    className="border-zinc-600 text-zinc-800 hover:border-[#9ccc3d] hover:bg-[#9ccc3d]/10 hover:text-[#9ccc3d]"
                    onClick={() =>
                      window.open(selectedProject.githubUrl, "_blank")
                    }
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </Button>
                  <Button
                    className="bg-[#9ccc3d] text-black hover:bg-[#8bbb2c]"
                    onClick={() =>
                      window.open(selectedProject.demoUrl, "_blank")
                    }
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
  );
}
