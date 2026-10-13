import {useState} from "react"

function SuperCoderButton (props) {
    const [coming, setComing] = useState (true)
    const course = props.course

    let greeting = "hi"
      if ( coming === true) {
        greeting = "Hola"
    } else {
        greeting = "Adios"
    }
    
    const toggleGreeting = () => {
        console.log(" Hello world Super Coder")
        setComing(!coming)
    }
    return(
        <button onClick ={toggleGreeting}>
            {greeting} From SuperCoder -- {course}
        </button>           
    )
}

export default SuperCoderButton