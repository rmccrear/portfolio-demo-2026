import { useState } from "react"
import imageUrl from "./image-url"
import "./Hero.css"

function Hero() {
  const width = 200
  const height = 400
  const sepia = 0
  // let saturation = 100
  const [saturation, setSaturation] = useState(0)
  const iceCreamImageUrl = imageUrl(width, height, sepia, saturation)

  const makeBW = () => {
    // saturation = -100 // Level 2 way.
    setSaturation(-100)  // React Way
  }

  const makeColor = () => {
   // saturation = 100 // Level 2 way
   setSaturation(100) // React Way
  }

  return (
    <div>
      <div className="hero">
        <img src={iceCreamImageUrl} alt="ice cream" />
      </div>
      <button onClick={ makeBW }>B&W</button>
      &nbsp;
      <button onClick={makeColor}>Color</button>
    </div>
  )
}

export default Hero