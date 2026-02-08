import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

import { client } from "@/sanity/lib/client";

export default async function Home() {
  const aboutMe = await client.fetch(`*[_type == "aboutMe"][0]`)
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900">
      <HeroSection />
      <AboutSection data={aboutMe}/>
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

          