import { useState } from "react"
import imageUrl from "./image-url"
import "./Hero.css"

const imageObjects = [
  {id: "photo-1629385701021-fcd568a743e8", description: "5 ice cream cones"},
  {id: "photo-1501443762994-82bd5dace89a", description: "8 cones"},
  {id: "photo-1567206563064-6f60f40a2b57", description: "9 flavors"},
]

function Hero() {
  const width = 200
  const height = 400
  const sepia = 0

  // let index = 0
  const [index, setIndex] = useState(0)
  // let saturation = 100
  const [saturation, setSaturation] = useState(0)

  //const imageObject = imageObjects[index]
  //const imageId = imageObject.id
  //const imageDescription = imageObject.description
  const {id, description} = imageObjects[index]

  const iceCreamImageUrl = imageUrl(id, width, height, sepia, saturation)
  

  const makeBW = () => {
    // saturation = -100 // Level 2 way.
    setSaturation(-100)  // React Way
  }

  const makeColor = () => {
    // saturation = 100 // Level 2 way
    setSaturation(100) // React Way
  }

  const goBack = () => {
    // index = index - 1
    if(index>0){
      setIndex(index-1)
    }
  }

  const goForward = () => {
    // index = index + 1
    if(index<imageObjects.length-1) {
      setIndex(index+1)
    } else {
      setIndex(0)
    }
  }

  return (
    <div>
      <div className="hero">
        <img src={iceCreamImageUrl} alt="ice cream" />
        <p>{description}</p>
      </div>

      <button onClick={goBack}>Prev</button> &nbsp;
      <button onClick={makeBW}>B&W</button> &nbsp;
      <button onClick={makeColor}>Color</button> &nbsp;
      <button onClick={goForward}>Next</button> &nbsp;

    </div>
  )
}

export default Hero