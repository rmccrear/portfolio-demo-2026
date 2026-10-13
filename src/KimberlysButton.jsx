import { useState } from "react"

function KimberlysButton(){
  const [coming, setComing] = useState(true)
  let greeting
  if(coming === true){
    greeting = "Good Morning"
  } else{
    greeting = "Good Evening"
  }
 
  const toggleGreeting = () => {
    console.log("I did it")
    setComing(!coming)
  }
  return(
    <button onClick={toggleGreeting}>{greeting} from Kimberly</button>
  )
}
export default KimberlysButton