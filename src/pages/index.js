import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"
import navGalleryStyles from "../styles/navgallery.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className={navGalleryStyles.navGrid}>
        <Link to="/illustrations">
            <div className={navGalleryStyles.gridItem1}>
                    Illustrations
            </div>
        </Link>

        <Link to="/backgrounds">
            <div className={navGalleryStyles.gridItem2}>   
                Backgrounds
            </div>    
        </Link>
        
        <Link to="/comics">
            <div className={navGalleryStyles.gridItem3}>
                Comics
                
            </div>
        </Link>   

        <Link to="/animations">    
            <div className={navGalleryStyles.gridItem4}>
                Animations
            </div>
        </Link>

        <Link to="/characters">
            <div className={navGalleryStyles.gridItem5}>
                Characters
            </div>
        </Link>   
        
    </div>

  </Layout>
)

export default IndexPage
