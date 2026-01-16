import React from "react"
import Header from "./Header"
import Sidebars from "./Sidebars"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen pt-10 bg-navy text-light-slate">
      <Header />
      <Sidebars />
      <main className="main-container">{children}</main>
    </div>
  )
}
export default Layout
