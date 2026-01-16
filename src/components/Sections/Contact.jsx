import React from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'

const Contact = () => {
  const email = 'ifechiglory@gmail.com' // Change to your email
  const subject = 'Hello from your portfolio!'
  const body = 'Hi there, I just saw your portfolio and wanted to reach out...'

  const emailLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  return (
    <section
      id="contact"
      className="px-4 py-16 md:py-24 lg:py-32 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32"
    >
      <div className="max-w-6xl mx-auto">

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {}
          <p className="mb-4 font-mono text-lg text-green">04. What's Next?</p>

          {}
          <h3 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-lightest-slate">
            Get In Touch
          </h3>
          {}
          <motion.a
            href={emailLink}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 font-mono text-lg transition-all duration-300 border rounded border-green text-green hover:bg-green-tint"
          >
            <Mail size={20} />
            Say Hello
            <ArrowUpRight size={20} />
          </motion.a>

          {}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="pt-8 mt-20 border-t border-light-navy/20"
          >
            <p className="font-mono text-sm text-slate">
              Designed & Built by{" "}
              <span className="text-green">Ifechukwu Edet</span>
            </p>
            <p className="mt-2 font-mono text-xs text-slate">
              Inspired by Brittany Chiang
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
