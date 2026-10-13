import { useState } from 'react'

function SuperTrooperButton( props ) {
    //const course = props.course
    const { course } = props

    const [coming, setComing] = useState(true)

  let greeting

  if (coming === true) {
        greeting = "annyeonghaseyo-"
  } else {
        greeting = "annyeong-"
  }  

const toggleGreeting = () => {  
    setComing(!coming)
  }
  
  return (
    <button onClick={toggleGreeting}>      
        {greeting}  I'm sorry, are you saying 'meow'? -- {course}
    </button>
  )
}

export default SuperTrooperButton