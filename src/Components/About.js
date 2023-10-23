import React, {useState} from 'react'

export default function About(props) {
    const [myStyle, setmyStyle] =   useState(
        {
            color : "black",
            backgroundColor : "rgba(152, 152, 152, 0.237)",
          }
    )

    const [myStyle2, setmyStyle2] =   useState(
        {
            color : "black",
            backgroundColor : "white",
            border : "2px solid white",
          }
    )

    const [btnText, setbtntText] =   useState("Enable Dark Mode");

    const toggleStyle = ()=>
    {
        if(myStyle.color === "black")
        {
            setmyStyle
            ({
            color : "white",
            backgroundColor : "#212529",
            border : "2px solid white",
        })
        document.body.style.backgroundColor = "#212529"
        document.getElementById("to-big").style.backgroundColor = "white"
        setmyStyle2({
            color : "white",
            backgroundColor : "#212529",
        })
            setbtntText("Disable Dark Mode");
        }

        else
        {
            setmyStyle
            ({
                color : "black",
                backgroundColor : "rgba(152, 152, 152, 0.237)",
                border : "2px solid black",
            })
            document.body.style.backgroundColor = "white"
            document.getElementById("to-big").style.backgroundColor = "#212529"
            setmyStyle2
            ({
                color : "black",
                backgroundColor : "white",
            })
            setbtntText("Enable Dark Mode");
        }
    }
    return (
        <>
            <div className="container" id='Container' style = {myStyle2}>
            <button onClick={toggleStyle} className='btn btn-info mx-3' id='dmbtn'>{btnText}</button>
            <h2 id='to_center'>About Us</h2>
                <p className='p-change' style={myStyle}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur similique obcaecati dolorum porro a dele
                    ctus velit tempora quam atque eos rerum molestiae sit eum aliquid tenetur odio ad, earum vel. Consectetur libero doloremque optio 
                    voluptas vero dolorem sed natus delectus est veniam distinctio laboriosam sunt illo doloribus rerum praesentium atque provident cum 
                    mollitia repudiandae, debitis quo deleniti id alias. Dolorem,
                     eius. Ut, odit. Quod molestias, saepe reiciendis corrupti minus dicta deleniti eaque distinct
                    io illum accusamus culpa, natus quaerat? Necessitatibus natus, culpa quia iusto fuga delectus ipsam similique? Ea do
                    lor consequatur impedit provident quam! Excepturi ab ex, odit minus voluptates veniam! consectetur adipisicing elit. Perferendis quis 
                    ut iusto possimus iste unde eaque, nobis consectetur. Optio vel beatae et impedit quis tempore quae ad molestias aut dolores, tempori
                    bus obcaecati illum. Asperiores!</p>
                    <div className="container" id='cont'>
                    <button className='btn btn-primary' id='butt'>Read More</button>
                    </div>
                <p className='p-change' style={myStyle}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur similique obcaecati dolorum porro a dele
                    ctus velit tempora quam atque eos rerum molestiae sit eum aliquid tenetur odio ad, earum vel. Consectetur libero doloremque optio 
                    voluptas vero dolorem sed natus delectus est veniam distinctio laboriosam sunt illo doloribus rerum praesentium atque provident cum 
                    mollitia repudiandae, debitis quo deleniti id alias. Dolorem,
                     eius. Ut, odit. Quod molestias, saepe reiciendis corrupti minus dicta deleniti eaque distinct
                    io illum accusamus culpa, natus quaerat? Necessitatibus natus, culpa quia iusto fuga delectus ipsam similique? Ea do
                    lor consequatur impedit provident quam! Excepturi ab ex, odit minus voluptates veniam! consectetur adipisicing elit. Perferendis quis 
                    ut iusto possimus iste unde eaque, nobis consectetur. Optio vel beatae et impedit quis tempore quae ad molestias aut dolores, tempori
                    bus obcaecati illum. Asperiores!</p>
                    <div className="container" id='cont'>
                    <button className='btn btn-primary' id='butt'>Read More</button>
                    </div>
                <p className='p-change' style={myStyle}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur similique obcaecati dolorum porro a dele
                    ctus velit tempora quam atque eos rerum molestiae sit eum aliquid tenetur odio ad, earum vel. Consectetur libero doloremque optio 
                    voluptas vero dolorem sed natus delectus est veniam distinctio laboriosam sunt illo doloribus rerum praesentium atque provident cum 
                    mollitia repudiandae, debitis quo deleniti id alias. Dolorem,
                     eius. Ut, odit. Quod molestias, saepe reiciendis corrupti minus dicta deleniti eaque distinct
                    io illum accusamus culpa, natus quaerat? Necessitatibus natus, culpa quia iusto fuga delectus ipsam similique? Ea do
                    lor consequatur impedit provident quam! Excepturi ab ex, odit minus voluptates veniam! consectetur adipisicing elit. Perferendis quis 
                    ut iusto possimus iste unde eaque, nobis consectetur. Optio vel beatae et impedit quis tempore quae ad molestias aut dolores, tempori
                    bus obcaecati illum. Asperiores!</p>
                    <div className="container" id='cont'>
                    <button className='btn btn-primary' id='butt'>Read More</button>
                    </div>
            </div>
        </>
    )
}
