import "./ImageSlider.css"
import image1 from "../images/cover1.jpg"
import image2 from "../images/cover2.JPG"
import image3 from "../images/cover3.JPG"
import image4 from "../images/cover4.jpg"

import React, { useEffect, useState } from "react"

const backgroundImages = [{
    id: 1,
    image:image1

},{
    id: 2,
    image:image2
},{
    id: 3,
    image:image3
},{
    id: 4,
    image:image4
}]



const ImageSlider = () => {
  return (
    <div>
        <img className="background-image" src={image1} alt="" />
    </div>
  )
}

export default ImageSlider