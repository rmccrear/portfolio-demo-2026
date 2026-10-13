import { useState } from "react"

function NikasButton ({ course }) {

    const [coming, setComing] = useState(true)

    let greeting 
    if(coming === true){
        greeting = "Hello!"
    } else {
        greeting = "Goodbye"
    }
    const toggleGreeting = () => {
        console.log("Hello friends from Nika")
        setComing(!coming)
    }

    return (
        <button onClick={toggleGreeting}>
        {greeting} Nika was here | {course}
        </button>
    )
}
{/* Away from keyboard */}

export default NikasButton