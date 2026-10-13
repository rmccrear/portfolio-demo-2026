import {useState} from 'react'

function AlanasButton( props ) {
    //const course= props.course
    const {course} = props
    const [coming, setComing] = useState(true)
    let  greeting
    if(coming === true){
        greeting = "🐈‍⬛👻🎃"
    } else { 
        greeting = " 🦇 ݁ ˖ִ ࣪𝐁𝐨𝐨"
    }
    const toggleGreeting = () => {
        console.log("ayooo")
        setComing(!coming)
    }
    return (
        <button onClick={toggleGreeting} >
            {greeting} -- {course}
        </button>
    )
}

export default AlanasButton
