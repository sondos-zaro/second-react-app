import { useState } from 'react'
import './App.css';

let ifTrue = true;
function App() {

    const clickMe = () => {
        console.log(ifTrue)
        if (ifTrue) {
            ifTrue = false
            setText("Hello Palestine")

        } else {
            ifTrue = true;
            setText("Hello World!")

        }
    }
    const [text, setText] = useState("Hello World!")
    return (< div className="App" >
        <button onClick={clickMe}>{text}</button>

    </div>
    );
}
const WhenInputChange = () => {
    const [userName, setUserName] = useState("user name");
    const [email, setEmail] = useState("example@hotmail.com");
    return (
        <div className="App">
            <p>{`Email : ${email}`}</p>
            <p>{`User Name : ${userName}`}</p>
            <input onChange={(event) => setUserName(event.target.value)} placeholder="username" />
            <input onChange={(event) => setEmail(event.target.value)} placeholder="Email" />


        </div>
    )
}
const RandomSentence = () => {
    const [sentence, setArr] = useState("Change Sentence")
    const onClickButton = () => {
        const sentenceArr = ["My name is Sondos",
            "Hi everyone",
            "How are you",
            "are you Ok ?"
            , "have a nice day",
            "Hello World!",
            "What's Your name",
            "Leave a kind message ,Please ",
            "this is a third assignment",
            "last sentence"];
        setArr(sentenceArr[Math.floor(Math.random() * sentenceArr.length)])
    }
    return (
        <div className="App">
            <button onClick={onClickButton} >{sentence}</button>
        </div>
    )
}
export { App, WhenInputChange, RandomSentence };