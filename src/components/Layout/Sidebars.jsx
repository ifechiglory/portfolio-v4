import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const Sidebars = () => {
  const socialLinks = [
    { icon: Github, url: 'https://github.com/ifechiglory', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/ifechukwuedet', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com/just_efay', label: 'Twitter' },
    { icon: Mail, url: 'mailto:ifechiglory@gmail.com', label: 'Email' },
  ]

  return (
    <>
      {}
      <motion.aside
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-0 z-40 flex-col items-center hidden space-y-6 left-8 md:flex"
      >
        {}
        <div className="flex-col items-center hidden mb-6 space-y-6 md:flex">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{
                y: -5,
                color: "#64ffda",
              }}
              className="transition-all duration-300 text-slate hover:text-green"
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>
        {}
        <div className="w-px h-24 bg-slate"></div>
      </motion.aside>

      {}
      <motion.aside
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-0 z-40 flex-col items-center hidden space-y-6 right-8 md:flex"
      >
        {}
        <motion.a
          href="mailto:ifechiglory@gmail.com"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          whileHover={{ color: "#64ffda" }}
          className="mb-6 font-mono text-sm tracking-widest transition-colors duration-300 text-slate hover:text-green writing-mode-vertical-rl"
          style={{ writingMode: "vertical-rl" }}
        >
          ifechiglory@gmail.com
        </motion.a>
        {}
        <div className="w-px h-24 bg-slate"></div>
      </motion.aside>
    </>
  )
}

export default Sidebars
