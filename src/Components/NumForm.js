import React, { useState } from 'react'

export default function TextForm(props) {
    // const toUpper = () => {
    //     let newText = text.toUpperCase();
    //     // console.log(newText)
    //     setText(newText);
    // }
    // const toLower = () => {
    //     let newText2 = text.toLowerCase();
    //     // console.log(newText)
    //     setText(newText2);
    // }
    // const clear_text = () => {
    //     let newText3 = "";
    //     // console.log(newText)
    //     setText(newText3);
    // }

    // const Remove_Space = () => {
    //     let newText4 = text.split(/[ ]+/);
    //     setText(newText4.join(" "));
    // }

    // const toCopy = () => {
    //     let text = document.getElementById("myBox");
    //     text.select();
    //     navigator.clipboard.writeText(text.value)
    //     alert("Copied to Clipbpard");
    // }

    const checkOE = ()=>
    {
       let newtext = text % 2;
        if(newtext === 1)
        {
            document.getElementById("main-box").innerHTML = "Entered Number is Odd."
        }
        else
        {
            document.getElementById("main-box").innerHTML = "Entered Number is Even."
        }
    }
    const countDigit = ()=>
    {
        let r = 0;
       while(text !== 0)
       {
        text = Math.round(text/10);
        r++;
       }
       document.getElementById("main-box").innerHTML = "Entered Number is " + r + " Digit Number."
    }

    const reverse = ()=>
    {
        let d = parseFloat(text.toString().split('').reverse().join('')) * Math.sign(text)
    //     let d = 0 ;
    //     while(text !== 0)
    //     {
    //     let temp = text;
    //     temp = temp % 10;
    //     d = '' + d + temp;
    //     text = Math.round(text/10);
    //    }
       document.getElementById("main-box").innerHTML = "Reversed Number is " + d + " Digit Number."
    }


const handleonChange = (event) => {
    setText(event.target.value)
}
let [text, setText] = useState("");
return (
    <>
        <div className='container' id='problem'>
            <h1 className='my-3 mx-2'>{props.heading}</h1>
            <div >
                <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="1" ></textarea>
                <button className="btn btn-primary my-3" onClick={checkOE} >Check Odd/Even</button>
                <button className="btn btn-primary my-3 mx-3" onClick={countDigit} >Count Digit</button>
                <button className="btn btn-primary my-3 " onClick={reverse} >Reverse Digit</button>
                <button className="btn btn-primary my-3 mx-3 " onClick={checkOE} >Copy Text</button>
                <button className="btn btn-primary my-3 " onClick={checkOE} >Remove Extra Space</button>
                
            </div>
        </div>
        <div className="container" id='problem2'>
            <h4 id='main-box'>{text.length>0?text:"Enter the Number in Box above to Preview it Here."}</h4>
        </div>
    </>
)
}
