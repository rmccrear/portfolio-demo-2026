import {useState} from "react"

function MoonButton (props){
    const [coming, setComing] = useState(true)
    
    let greeting 
    if (coming === true){
      greeting = "Never Give up"
    } else {
      greeting = "Stay Creative"
    }

    const toggleBtn = () => {
      console.log("Great job!")  
      setComing(!coming)
    }

    return(
        <button onClick={toggleBtn}>
          {greeting} from Moon
          Keep Learning {props.course}
        </button>
    )
}

export default MoonButton