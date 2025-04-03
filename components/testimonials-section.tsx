"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

type Testimonial = {
  id: number
  name: string
  position: string
  company: string
  avatar: string
  text: string
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Pasha Shavlenkov",
      position: "Backend Laravel Developer",
      company: "",
      avatar: "https://media.licdn.com/dms/image/v2/D4E35AQGQDkyJ5lasdA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1719447236109?e=1743933600&v=beta&t=5yF2K_rtdDrwc6h71VGxIL4Ii5jpkwopRzhY86F9M-g",
      text: "I had the opportunity to work with Vlad and I can confidently say that he is an expert in React development. Vlad has deep knowledge of JavaScript and React. In addition to his technical skills, Vlad is also known for his communication skills, attention to detail, and ability to adapt quickly to new challenges. He is always result-oriented and works to achieve the best results in the team.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-4xl font-bold text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Testimonials
        </motion.h2>

        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-zinc-800/50 border-zinc-700 overflow-hidden">
                    <div className="h-1 w-full bg-[#9ccc3d]"></div>
                    <CardContent className="p-6">
                      <Quote className="mb-4 h-10 w-10 text-[#9ccc3d] opacity-50" />

                      <p className="mb-6 text-zinc-300">"{testimonial.text}"</p>

                      <div className="flex items-center">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#9ccc3d]">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <h4 className="font-semibold text-white">{testimonial.name}</h4>
                          <p className="text-sm text-zinc-400">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute -left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-zinc-800 text-white shadow-lg transition-all hover:bg-[#9ccc3d] hover:text-black md:-left-5"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="absolute -right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-zinc-800 text-white shadow-lg transition-all hover:bg-[#9ccc3d] hover:text-black md:-right-5"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-8 rounded-full transition-all ${
                  index === activeIndex ? "bg-[#9ccc3d]" : "bg-zinc-700"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

