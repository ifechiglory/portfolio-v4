import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Folder } from 'lucide-react'
import ProjectCard from '../UI/ProjectCard'
import { useStaticQuery, graphql } from 'gatsby'

const Projects = () => {

  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        nodes {
          id
          title
          description
          longDescription
          technologies
          github
          live
          featured
          image
          category
        }
      }
    }
  `)

  const projects = data.allProjectsJson.nodes
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section
      id="work"
      className="px-4 py-8 md:py-8 lg:py-32 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32"
    >
      <div className="max-w-6xl mx-auto">
        {}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center mb-16"
        >
          <h2 className="numbered-heading">Some Things I've Built</h2>
          <div className="flex-grow h-px ml-8 bg-lightest-navy"></div>
        </motion.div>

        {}
        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              layout={index % 2 === 0 ? "image-right" : "image-left"}
            />
          ))}
        </div>

        {}
        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-16 mt-16 border-t border-light-navy/30"
          >
            <h3 className="mb-12 text-2xl font-bold text-center text-lightest-slate">
              Other Noteworthy Projects
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 transition-all duration-300 border rounded-lg bg-light-navy border-light-navy hover:border-green/30 hover:-translate-y-2"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Folder className="text-green" size={32} />
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors text-slate hover:text-green"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors text-slate hover:text-green"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="mb-3 text-lg font-bold transition-colors text-lightest-slate hover:text-green">
                    {project.title}
                  </h4>

                  <p className="mb-6 text-sm text-slate line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="font-mono text-xs text-slate">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="font-mono text-xs text-slate">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h3 className="mb-6 text-2xl font-bold text-lightest-slate">
            Want to see more?
          </h3>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-slate">
            Check out my GitHub profile for more projects.
          </p>
          <a
            href="https://github.com/ifechiglory"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 font-mono text-lg transition-all duration-300 border rounded border-green text-green hover:bg-green-tint hover:scale-105"
          >
            <Github size={20} />
            View My GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
