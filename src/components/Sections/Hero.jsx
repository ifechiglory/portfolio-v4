import React from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const Hero = () => {
  const greetings = ["Hi, my name is"]
  const name = "Ifechukwu Edet"
  const title = "I build amazing stuff for the web."
  const description =
    "I'm a frontend developer specializing in building (and occasionally teaching) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products and mentoring young minds in frontend development."

  return (
    <section
      id="home"
      className="px-4 py-16 md:py-24 lg:py-32 md:px-8 lg:px-16 xl:px-24 2xl:px-32"
      style={{ counterReset: "section" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {}
          <div >
            {}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-3 font-mono text-sm text-green sm:text-base"
            >
              {greetings[0]}
            </motion.p>

            {}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-3xl font-bold leading-tight xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-lightest-slate"
            >
              {name}.
            </motion.h1>

            {}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 text-xl font-bold leading-tight xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-slate"
            >
              {title}
            </motion.h2>

            {}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl mb-8 text-base sm:text-lg text-slate"
            >
              {description}
            </motion.p>

            {}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-4 xs:flex-row"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-sm transition-all duration-300 rounded bg-green text-navy hover:bg-green/90 sm:text-base sm:px-8 sm:py-4 hover:scale-105"
              >
                Check out my work
                <ExternalLink size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-sm transition-all duration-300 border rounded border-green text-green hover:bg-green-tint sm:text-base sm:px-8 sm:py-4 hover:scale-105"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
