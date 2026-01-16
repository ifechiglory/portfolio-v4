import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Sections/Hero"
import About from "../components/Sections/About"
import Experience from "../components/Sections/Experience"
import Projects from "../components/Sections/Projects"
import Contact from "../components/Sections/Contact"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  )
}
