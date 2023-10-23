import React, { useState } from 'react'

export default function TextForm(props) {
    const toUpper = () => {
        let newText = text.toUpperCase();
        // console.log(newText)
        setText(newText);
    }
    const toLower = () => {
        let newText2 = text.toLowerCase();
        // console.log(newText)
        setText(newText2);
    }
    const clear_text = () => {
        let newText3 = "";
        // console.log(newText)
        setText(newText3);
    }

    const Remove_Space = () => {
        let newText4 = text.split(/[ ]+/);
        setText(newText4.join(" "));
    }

    const toCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        alert("Copied to Clipbpard");
    }
const handleonChange = (event) => {
    setText(event.target.value)
}
const [text, setText] = useState("");
return (
    <>
        <div className='container' id='problem'>
            <h1 className='my-3 mx-2'>{props.heading}</h1>
            <div >
                <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="6" ></textarea>
                <button className="btn btn-primary my-3" onClick={toUpper} >Convert to UpperCase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={toLower} >Convert to LowerCase</button>
                <button className="btn btn-primary my-3 " onClick={clear_text} >Clear Text</button>
                <button className="btn btn-primary my-3 mx-3 " onClick={toCopy} >Copy Text</button>
                <button className="btn btn-primary my-3 " onClick={Remove_Space} >Remove Extra Space</button>
                
            </div>
        </div>
        <div className="container" id='problem2'>
            <h5>No of Characters are {text.length} and No of Words are {text.split(/\s/).filter((element)=>{return element.length!==0}).length}</h5>
            <p> <h5>Average Time taken to read this Text is {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length * 60} Seconds. </h5></p>
            <h2>Preview : </h2>
            <h6>{text.length>0?text:"Enter the Text in TextBox above to Preview it Here."}</h6>
        </div>
    </>
)
}
