import React from "react"
import { Helmet } from "react-helmet"
import Header from "./Header"
import Sidebars from "./Sidebars"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <title>Ifechukwu Edet - Portfolio</title>
        <meta
          name="description"
          content="Frontend Developer specializing in React & Gatsby"
        />
      </Helmet>

      <div className="min-h-screen pt-10 bg-navy text-light-slate">
        <Header />
        <Sidebars />
        <main className="main-container">{children}</main>
      </div>
    </>
  )
}

export default Layout
