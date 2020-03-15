import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CharactersGallery from "../components/page-galleries/characters-gallery"

const CharactersPage = () => (
  <Layout>
    <SEO title="Characters" />
    <Link to="/">Home</Link>
      <CharactersGallery />

    
  </Layout>
)

export default CharactersPage
