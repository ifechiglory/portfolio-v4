import React from "react"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  const aboutPoints = [
    "Hello! I'm Ife, a frontend developer who loves turning ideas into clean, usable interfaces that actually make sense to humans. My journey into web development started with curiosity and a lot of breaking things on the browser; which, funny enough, taught me more than any tutorial ever could.",
    "Fast - forward to today, I work primarily as a frontend developer, building responsive, user - focused web applications using modern tools like React and Tailwind. I've worked on everything from landing pages and admin dashboards to full conference systems with authentication, attendance tracking, and real-world constraints (the fun kind)." ,
    "Beyond building, I also teach frontend development, breaking down complex concepts into practical, beginner friendly lessons. Helping students go from “HTML looks scary” to confidently shipping projects has become one of the most rewarding parts of my career. Right now, my focus is on crafting accessible, scalable, and visually polished web experiences, while staying grounded in the fundamentals, because flashy tools are great, but solid foundations never go out of style.",
    "Here are a few technologies I've been working with recently:",
  ]

  const technologies = [
    "JavaScript (ES6+)",
    "React",
    "TypeScript",
    "Node.js",
    "Gatsby",
    "Tailwind CSS",
    "Framer Motion",
    "GraphQL",
    "SupaBase",
    "Firebase",
  ]

  return (
    <section
      id="about"
      className="px-4 py-16 md:py-24 lg:py-32 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32"
    >
      <div className="max-w-6xl mx-auto">
        {}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center mb-4"
        >
          <h2 className="numbered-heading">About Me</h2>
          <div className="flex-grow h-px ml-8 bg-lightest-navy"></div>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          {}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            {}
            <div className="mb-10 space-y-8">
              {aboutPoints.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-lg leading-relaxed text-slate"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="mb-6 text-xl font-semibold text-lightest-slate">
                Technologies I work with:
              </h3>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    whileHover={{ x: 5, color: "#64ffda" }}
                    className="flex items-center"
                  >
                    <span className="mr-3 text-green">▹</span>
                    <span className="font-mono text-sm text-slate">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="justify-center hidden lg:w-5/12 lg:order-2 md:flex"
          >
            <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-[calc(100%+2rem)] h-[calc(100%+2rem)] border rounded-full border-green/40 animate-pulse"></div>
                <div className="absolute w-[calc(100%+3rem)] h-[calc(100%+3rem)] border rounded-full border-green/30 animate-pulse animation-delay-200"></div>
                <div className="absolute w-[calc(100%+4rem)] h-[calc(100%+4rem)] border rounded-full border-green/20 animate-pulse animation-delay-400"></div>
                <div className="absolute w-[calc(100%+5rem)] h-[calc(100%+5rem)] border rounded-full border-green/10 animate-pulse animation-delay-600"></div>
              </div>

              {}
              <div className="absolute inset-0 z-10 overflow-hidden border-2 rounded-full border-green/30">
                <div className="flex items-center justify-center w-full h-full bg-light-navy">
                  <StaticImage
                    src="../../images/me.jpeg"
                    alt="Ifechukwu Edet"
                    className="object-cover w-full h-full"
                    placeholder="blurred"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
