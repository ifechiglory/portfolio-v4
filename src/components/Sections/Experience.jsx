import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import { useStaticQuery, graphql } from "gatsby"

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState(null)

  const toggleCard = id => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  const formatDate = dateString => {
    if (!dateString || dateString === "null" || dateString === "Present")
      return "Present"
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    } catch (error) {
      return dateString // Fallback to original
    }
  }

  const data = useStaticQuery(graphql`
    query {
      allExperienceJson(sort: { fields: startDate, order: DESC }) {
        nodes {
          id
          company
          position
          startDate(formatString: "YYYY-MM-DD")
          endDate(formatString: "YYYY-MM-DD")
          current
          description
          technologies
        }
      }
    }
  `)

  const experiences = data.allExperienceJson.nodes

  return (
    <section
      id="experience"
      className="px-4 py-32 sm:px-6 md:px-8 lg:px-6 xl:px-20 2xl:px-32"
    >
      <div className="max-w-6xl">
        {}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center mb-4 md:mb-6"
        >
          <h2 className="numbered-heading">Where I've Worked</h2>
          <div className="flex-grow h-px ml-4 md:ml-8 bg-lightest-navy"></div>
        </motion.div>

        {}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden transition-all duration-300 border rounded-xl border-light-navy/50 bg-light-navy/30 hover:border-green/30 hover:shadow-lg"
            >
              {}
              <button
                onClick={() => toggleCard(exp.id)}
                className="flex items-start justify-between w-full p-5 text-left transition-colors duration-200 md:p-6 hover:bg-light-navy/10"
                aria-expanded={expandedCard === exp.id}
              >
                <div className="flex-1">
                  <div className="flex flex-col justify-between gap-2 mb-2 md:flex-row md:items-center">
                    <h3 className="text-lg font-bold md:text-xl text-lightest-slate">
                      {exp.position}
                    </h3>
                    <div className="flex items-center font-mono text-sm text-green">
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 hover:underline"
                          onClick={e => e.stopPropagation()}
                        >
                          {exp.company}
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        exp.company
                      )}
                    </div>
                  </div>

                  {}
                  <div className="flex items-center font-mono text-sm text-slate">
                    <Calendar size={14} className="flex-shrink-0 mr-2" />
                    <span>
                      {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
                    </span>

                    {}
                    {exp.current === true && (
                      <span className="px-2 py-1 ml-3 text-xs rounded-full bg-green/10 text-green">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex-shrink-0 ml-4">
                  {expandedCard === exp.id ? (
                    <ChevronUp className="text-green" size={20} />
                  ) : (
                    <ChevronDown className="text-slate" size={20} />
                  )}
                </div>
              </button>

              {}
              <AnimatePresence>
                {expandedCard === exp.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-light-navy/50"
                  >
                    <div className="p-5 pt-4 md:p-6 md:pt-5">
                      <p className="mb-6 leading-relaxed text-slate">
                        {exp.description}
                      </p>

                      <div>
                        <h4 className="mb-3 font-semibold text-lightest-slate">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map(tech => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 bg-navy text-green font-mono text-xs md:text-sm rounded-lg border border-green/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-10 mt-6 border-t md:mt-10 border-light-navy/30"
        >
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            <div className="p-4 text-center rounded-lg">
              <div className="mb-1 text-2xl font-bold md:text-3xl text-green md:mb-2">
                {experiences.length}
              </div>
              <div className="text-xs md:text-sm text-slate">Positions</div>
            </div>

            <div className="p-4 text-center rounded-lg">
              <div className="mb-1 text-2xl font-bold md:text-3xl text-green md:mb-2">
                {new Set(experiences.map(exp => exp.company)).size}
              </div>
              <div className="text-xs md:text-sm text-slate">Companies</div>
            </div>

            <div className="p-4 text-center rounded-lg">
              <div className="mb-1 text-2xl font-bold md:text-3xl text-green md:mb-2">
                {experiences.reduce(
                  (acc, exp) => acc + exp.technologies.length,
                  0
                )}
                +
              </div>
              <div className="text-xs md:text-sm text-slate">Technologies</div>
            </div>

            <div className="p-4 text-center rounded-lg">
              <div className="mb-1 text-2xl font-bold md:text-3xl text-green md:mb-2">
                {experiences.length > 0
                  ? new Date().getFullYear() -
                    new Date(
                      experiences[experiences.length - 1].startDate
                    ).getFullYear()
                  : 0}
                +
              </div>
              <div className="text-xs md:text-sm text-slate">
                Years Experience
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
