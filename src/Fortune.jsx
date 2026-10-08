import { useState } from "react";

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const fortunes = [
    "You will have luck today",
    "Ask again later",
    "Don't leave the house, today is unlucky"
]

function Fortune() {
    const [index, setIndex] = useState(randomNumber(0, 2))

    let text;
    text = fortunes[index]

    const newFortune = () => {
        // index = randomNumber(0, 2)
        setIndex(randomNumber(0, 2))
    }
    return (
        <article>
            <p>{text}</p>
            <button onClick={newFortune}>Try again</button>
        </article>
    )
}

export default Fortune