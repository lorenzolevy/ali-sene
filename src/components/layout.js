import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 7.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} Ali Sene
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
