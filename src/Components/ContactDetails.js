import React from 'react'

function ContactDetails() {
    return (
        <div>
            <br/>
            <h2>My contact details: </h2><br/>

            <ul>
                <li><span className="greyText">Email: </span> <i>Tepia94@gmail.com</i></li>
                <li><span className="greyText">Phone: </span><i>+359 87 744 2260</i>
                </li> 
                <span className="noticeText"> [Bulgarian number!]</span>
            </ul>
          
        </div>
    )
}

export default ContactDetails;
