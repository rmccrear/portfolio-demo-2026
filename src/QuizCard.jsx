import { useState } from "react";
// This is a card that shows my quiz project

function QuizCard() {
    // const open = false;
    const [open, setOpen] = useState(false)
    let text
    let buttonText
    if(open === true){
        // long version
        text = "My Quiz is made in vanilla JS and HTML. This is a really good example of my work in level 2. It leverages html and addEventListener idea."
        buttonText = "Less..."
    } else if (open === false) {
        // short version
        text = "My Quiz is made in vanilla JS and HTML."
        buttonText = "More..."
    }
    function toggleMore(){
        setOpen(!open)
        // open = !open

        // if(open === true) {
        //     //open = false
        //     setOpen(false)
        // } else if(open === false) {
        //     //open = true
        //     setOpen(true)
        // }
    }
    return (
            <article>
                <h1>
                    My Quiz project
                </h1>
                <p>
                    { text }
                </p>
                <button onClick={ toggleMore }> {buttonText} </button>
            </article>
    )
}

export default QuizCard
