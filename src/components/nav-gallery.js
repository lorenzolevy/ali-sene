import React from "react"
import { Link } from "gatsby"
// import Img from "gatsby-image"
import navGalleryStyles from "../styles/navgallery.module.scss"

const NavGallery = () => ( 

          <div className={navGalleryStyles.navGrid}>

            <div className={navGalleryStyles.gridItem1}>
                <div>
                    <Link to="/illustrations">Illustrations</Link>
                </div>
            </div>
            
            <div className={navGalleryStyles.gridItem2}>
                <div>
                    <Link to="/backgrounds">Backgrounds</Link>
                </div>
            </div>
            
            <div className={navGalleryStyles.gridItem3}>
                <div>
                    <Link to="/comics">Comics</Link>
                </div>
            </div>
            
            <div className={navGalleryStyles.gridItem4}>
                <div>
                    <Link to="/animations">Animations</Link>
                </div>
            </div>
            
            <div className={navGalleryStyles.gridItem5}>
                <div>
                    <Link to="/characters">Characters</Link>
                </div>
            </div>
            
            <div className={navGalleryStyles.gridItem6}>
                <div>
                    <Link to="/logos">Logos</Link>
                </div>
            </div>
            
        
          </div>
)

export default NavGallery