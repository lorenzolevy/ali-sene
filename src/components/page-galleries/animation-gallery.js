import React from "react"
import Video from './video.js'
import videoJSON from '../../content/video-data.json'
import animationGalleryStyles from '../../styles/animation.module.scss'

const AnimationGallery = () => (
  <div className={animationGalleryStyles.galleryContainer}>
    {videoJSON.videos.map((videos,index) => {
      return <Video key={`videos_video_${index}`} videoSrcURL={videos.video} />
    })}
  </div>
    
)

export default AnimationGallery;





