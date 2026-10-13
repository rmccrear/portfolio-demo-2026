import { useState }  from "react"

function GandalfsButton({ course }) {
   const [coming, setComing] = useState(true)

    let greeting
    if(coming === true) {
        greeting = "Bonjour"
    } else {
        greeting = "Au revoir"
        }

    const toggleGreeting = () => {
        console.log(" C'est bon from Gandalf ")
        setComing(!coming)
    }

    return (
        <button onClick ={toggleGreeting}>
            {greeting} from Gandalf-YOU ALL SHALL PASS! {course}
        </button>
    )
}

export default GandalfsButton