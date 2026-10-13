import { useState } from "react"

function RobertsButton( {course} ) {
    // const course = props.course
    // const { course } = props

    const [coming, setComing] = useState(true)

    let greeting
    if(coming === true) {
        greeting = "Hi"
    } else {
        greeting = "Sayonara"
    }

    const toggleGreeting = () => {
        console.log("hello world from Roberts button")
        setComing(!coming)
    }

    return (
        <button onClick={toggleGreeting}>
            {greeting} From Robert -- {course}
        </button>
    )
}

export default RobertsButton



