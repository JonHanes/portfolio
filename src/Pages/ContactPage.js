import React, {Component} from 'react';

//#region Internal Dependencies
import Hero from '../Components/Hero';
import Content from '../Components/Content';
import ContactDetails from "../Components/ContactDetails";

import MyImage from '../Assets/Images/SelfImage2.jpg';
//#endregion

//#region Bootstrap Dependencies
import Image from 'react-bootstrap/Image';
//#endregion

//#region External Dependencies

//#endregion


class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    render() {
        return (

            <div>
                <Hero title={this.props.title}/>
                <Content>
                
                <br/>

                <p>Please do not hesitate to reach out to me if you want to learn more!<br/>If you feel like I would work well with your team/project, please let me know and I will let you know whether I am interested.<br/>Thank you for your time! </p>
                <ContactDetails/>
                
                <div className="imageWrapper">
                <Image className="centeredImage" src={MyImage} thumbnail/>
                <h3>Waiting for your feedback.</h3>
                </div>
                </Content>
            </div>
            
        )
    }
}

export default ContactPage;