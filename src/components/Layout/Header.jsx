import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  useEffect(() => {
    const handleClickOutside = event => {
      if (isMobileMenuOpen) {
        const menuPanel = document.querySelector(".mobile-menu-panel")
        const menuButton = document.querySelector('[aria-label="Toggle menu"]')

        if (
          menuPanel &&
          !menuPanel.contains(event.target) &&
          !menuButton.contains(event.target)
        ) {
          setIsMobileMenuOpen(false)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleScrollLock = () => {
      if (isMobileMenuOpen) {

        document.body.style.overflow = "hidden"
        document.body.style.position = "fixed"
        document.body.style.width = "100%"
        document.body.style.top = `-${window.scrollY}px`
      } else {

        const scrollY = document.body.style.top
        document.body.style.overflow = ""
        document.body.style.position = ""
        document.body.style.width = ""
        document.body.style.top = ""

        if (scrollY) {
          window.scrollTo(0, parseInt(scrollY || "0") * -1)
        }
      }
    }

    handleScrollLock()

    return () => {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.top = ""
    }
  }, [isMobileMenuOpen])

  const data = useStaticQuery(graphql`
    query {
      allNavLinksJson(sort: { order: ASC }) {
        nodes {
          name
          url
          order
        }
      }
    }
  `)

  const navLinks = data.allNavLinksJson.nodes

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = url => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(url)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-navy/90 shadow-lg" : "bg-transparent"
      }`}
      style={{ zIndex: 50 }}
    >
      <nav className="px-2 main-container sm:px-8 md:px-7 ">
        <div className="flex items-center justify-between">
          {}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
            style={{ position: "relative", zIndex: 60 }} 
          >
            <StaticImage
              src="../../images/icon.png"
              alt="Logo Icon"
              width={100}
              height={80}
              placeholder="tracedSVG"
              className="rounded-sm "
            />
          </motion.div>
          {}
          <div className="items-center hidden space-x-8 md:flex">
            <ol className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.url)}
                    className="nav-link group"
                  >
                    <span className="mr-1 font-mono text-xs text-green">
                      0{link.order}.
                    </span>
                    {link.name}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-green"></span>
                  </button>
                </motion.li>
              ))}
            </ol>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 font-mono text-sm transition-colors border rounded border-green text-green hover:bg-green-tint"
              >
                Resume
              </a>
            </motion.div>
          </div>
          {}
          <button
            className="p-2 md:hidden text-green"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mobile-menu-overlay"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(10, 25, 47, 0.85)",
                backdropFilter: "blur(10px)",
                zIndex: 40,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              {}
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                className="mobile-close-btn"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                style={{
                  position: "absolute",
                  top: "30px",
                  right: "30px",
                  color: "#64ffda",
                  zIndex: 45,
                }}
              >
                <X size={28} />
              </motion.button>

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25 }}
                className="mobile-menu-panel"
                style={{
                  width: "70%",
                  maxWidth: "400px",
                  height: "100%",
                  backgroundColor: "#112240",
                  padding: "100px 40px 40px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignContent: "center",
                  placeItems: "center",
                  boxShadow: "-10px 0 30px rgba(0, 0, 0, 0.3)",
                }}
              >
                {}
                <ol className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => scrollToSection(link.url)}
                        className="mobile-nav-link group"
                        style={{
                          display: "block",
                          padding: "10px 0",
                          fontSize: "1rem",
                          fontFamily: '"SF Mono", monospace',
                          color: "#ccd6f6",
                          textAlign: "center",
                          transition: "all 0.3s ease",
                          position: "relative",
                        }}
                      >
                        <span
                          className="mobile-nav-number"
                          style={{
                            color: "#64ffda",
                            fontSize: "0.85em",
                            display: "block",
                          }}
                        >
                          0{link.order}.
                        </span>
                        {link.name}
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-green mt-1"></span>
                      </button>
                    </motion.li>
                  ))}
                </ol>

                {}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mobile-resume-btn"
                  style={{ marginTop: "40px", alignSelf: "center" }}
                >
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 font-mono text-sm transition-all duration-300 border rounded border-green text-green hover:bg-green/10 hover:scale-105"
                    style={{ display: "inline-block" }}
                  >
                    Resume
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
