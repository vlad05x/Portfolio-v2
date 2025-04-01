"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MessageSquare, Instagram, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-4xl font-bold text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full bg-zinc-800/50 border-zinc-700">
            <CardContent className="flex h-full flex-col justify-between p-6">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  Contact Information
                </h3>
                <p className="mb-8 text-zinc-300">
                  Feel free to reach out to me for collaboration, job
                  opportunities, or just to say hello! I'm always open to
                  discussing new projects and ideas.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-[#9ccc3d]" />
                    <a
                      href="mailto:organizm777alf@gmail.com"
                      className="text-zinc-300 hover:text-[#9ccc3d]"
                    >
                      organizm777alf@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="mr-3 h-5 w-5 text-[#9ccc3d]" />
                    <span className="text-zinc-300">
                      Available for remote work worldwide
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="mb-4 text-lg font-medium text-white">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/vlad05x"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-700 text-white transition-all hover:bg-[#9ccc3d] hover:text-black"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vlad-honcharenko-4a003228b/"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-700 text-white transition-all hover:bg-[#9ccc3d] hover:text-black"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://t.me/vlad05x"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-700 text-white transition-all hover:bg-[#9ccc3d] hover:text-black"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Send className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/vlad05x/"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-700 text-white transition-all hover:bg-[#9ccc3d] hover:text-black"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
