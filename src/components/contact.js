import React from 'react';
import "./contact.css"

let status = true;

function Contact(props) {
    return ( <
        figure className = "Contact" >
        <
        img src = { props.avatar }
        alt = { props.character }
        /> <
        div >
        <
        div className = "name" > { props.name } <
        /div> <
        div className = "status" > {
            status ? < div className = "status-online" >
            <
            p > online < /p> <
            /div> : <div className="status-offline"> <
            p > offilne < /p> <
            /div> } <
            /div> <
            /div> <
            /figure>
        )
    }


    export default Contact;