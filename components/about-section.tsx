"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from '@portabletext/react';

export default function AboutSection({ data }: { data: any }) {
  const timelineItems = data.journey || [];
  // const timelineItems = [
  //   {
  //     year: "9/2023 - Present",
  //     title: "Bachelor - Computer Science",
  //     company:
  //       "Central Ukrainian National Technical University /Kropyvnytskyi, Ukraine",
  //     description:
  //       "During the past two years of my learning journey, I have significantly developed my skills, gaining proficiency in a range of programming languages including C++, C#, and Python, as well as in web development and database management. Additionally, I have focused on enhancing my soft skills to complement my technical expertise.",
  //   },
  //   {
  //     year: "9/2021 - 5/2023",
  //     title: "Computer Science",
  //     company: "Lyceum Maximum / Kropyvnytskyi, Ukraine",
  //     description:
  //       "Studied in an advanced English and computer science class. Studied C++ and Frontend development course.",
  //   },
  //   {
  //     year: "9/2023 - 2/2024",
  //     title: "Student - Frontend React developer",
  //     company: "Shpp IT-school / Kropyvnytskyi, Ukraine",
  //     description:
  //       "Throughout this course, I diligently strengthened my skills in React.js and JavaScript. By the end, I successfully developed the project 'Trellotion', showcasing my proficiency in these technologies.",
  //   },
  //   {
  //     year: "9/2025 - continue",
  //     title: "Freelance Frontend Developer",
  //     company: "Remote / Worldwide",
  //     description:
  //       "As a freelance developer, I deliver modern and scalable web applications using React.js and TypeScript. I work with clients worldwide, focusing on clean architecture, responsive UI/UX, and seamless API integrations, while managing the full development cycle independently.",
  //   },
  // ];

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
          {data.title}
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
                src={urlFor(data.avatar).url()}
                alt="Developer Profile"
                fill
                className="absolute inset-0 object-cover object-[center_10%] filter contrast-125"
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
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {data.headline}
                </h3>
                <div className="mb-6 text-zinc-300 prose prose-invert">
                  <PortableText value={data.description} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-semibold text-white">
            My Journey
          </h3>

          <div className="relative mx-auto max-w-3xl">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-zinc-700"></div>

            {/* Timeline items */}
            {timelineItems.map((item: any, index: number) => (
              <motion.div
                key={index}
                className="relative mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""
                    }`}
                >
                  <div className="w-1/2 px-4"></div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -ml-2.5 h-5 w-5 -translate-x-1/2 rounded-full bg-[#9ccc3d]"></div>

                  <div className="w-1/2 px-4">
                    <Card className="bg-zinc-800/50 border-zinc-700 overflow-hidden">
                      <div className="h-1 w-full bg-[#9ccc3d]"></div>
                      <CardContent className="p-4">
                        <span className="mb-2 block text-sm font-medium text-[#9ccc3d]">
                          {item.period}
                        </span>
                        <h4 className="text-lg font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="text-sm text-zinc-400">{item.company}</p>
                        <p className="mt-2 text-sm text-zinc-300">
                          {item.description}
                        </p>
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
  );
}
