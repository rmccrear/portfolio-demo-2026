import imageUrl from "./image-url"
import "./Hero.css"

function Hero() {
  const iceCreamImageUrl = imageUrl(200, 400, 0)
  return (
    <div className="hero">
      <img src={iceCreamImageUrl} alt="ice cream" />
    </div>
  )
}

export default Hero