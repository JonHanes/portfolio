import React, {Component} from 'react';

//#region Bootstrap Dependencies
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import {Navbar, Nav, Button} from 'react-bootstrap';
//#endregion

//#region Internal Dependencies

//SoftUni
import CPPPBJune2019 from "../Assets/Images/Certificates/CPP-PB-JUN2019.png"
import CSFUNDSEP2019 from "../Assets/Images/Certificates/CS-FUND-SEP2019.png"
import CSADVJAN2020 from "../Assets/Images/Certificates/CS-ADV-JAN2020.png"
import CSOOPFEB2020 from "../Assets/Images/Certificates/CS-OOP-FEB2020.png"
import MSSQL_Basics from "../Assets/Images/Certificates/CS-DB-MSSQL-MAY2020.png"
import CS_EF from "../Assets/Images/Certificates/CS-EF-JUL2020.png"
import Unity3DEssentials2020 from "../Assets/Images/Certificates/Unity3D_Essentials_JUL2020.png"
import JSADVNOV2020 from "../Assets/Images/Certificates/JS-ADV-NOV2020.png"
//Zenva
import ZENVA_MICROVR from "../Assets/Images/Certificates/Zenva_BuildMicro-VRGame.PNG"
import ZENVA_AR_INTRO from "../Assets/Images/Certificates/Zenva_IntroToAR.PNG"
import ZENVA_NodeJS_Express_BGN from "../Assets/Images/Certificates/Zenva_Node.js&Express_BGN.PNG"
import ZENVA_React_Webforms from "../Assets/Images/Certificates/Zenva_React_Webforms.PNG"
import ZENVA_JS_Foundations from "../Assets/Images/Certificates/Zenva_JS_Foundations.PNG"
import ZENVA_JS_Beginner from "../Assets/Images/Certificates/Zenva_JS_Beginner1.PNG"
import ZENVA_Responsive_Web_Design from "../Assets/Images/Certificates/Zenva_BS_Responsive_Web_Design.PNG"
import ZENVA_JavaScript_DOM_API from "../Assets/Images/Certificates/Zenva_JavaScript_DOM_API.PNG"
import ZENVA_Modern_JS from "../Assets/Images/Certificates/Zenva_Modern_JS_ES6-9.PNG"
import ZENVA_NodeJS_BGN from "../Assets/Images/Certificates/Zenva_Node.js_BGN.PNG"
import ZENVA_React_WebApps from "../Assets/Images/Certificates/Zenva_React_For_WebApps.PNG" 
import ZENVA_Complete_Blender from "../Assets/Images/Certificates/Zenva_Complete_Blender.PNG" 
//Udemy
import UDEMY_2D_Course from "../Assets/Images/Certificates/Udemy_Unity_2D_Course.jpg"

//#endregion

class ImageGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            softuni_visible: true,
            zenva_visible: true,
            udemy_visible: true,
            certificates: [],
            filtered_certificates: [],
        };
    }

    componentDidMount() {

        class Certificate {
            constructor(title, date, img, from, score, maxScore, notes) {
                this.title = title;
                this.date = date;
                this.img = img;
                this.from = from;

                //Optional
                this.score = score != undefined ? score.toFixed(2) : undefined;
                this.maxScore = score != undefined ? maxScore.toFixed(2) : undefined;
                this.notes = notes;
            }
        }

        let certificates = [];
        
        //SoftUni
        const CPPPBJune2019_Cert = new Certificate('C++ Programming Basics Certificate', 'July 2019', CPPPBJune2019, 'SoftUni', 6, 6);
        const CSFUNDSEP2019_Cert = new Certificate('C# Fundamentals Certificate', 'December 2019', CSFUNDSEP2019, 'SoftUni', 6, 6);
        const CSADVJAN2020_Cert = new Certificate('C# Advanced Certificate', 'March 2020', CSADVJAN2020, 'SoftUni', 6, 6);
        const CSOOPFEB2020_Cert = new Certificate('C# OOP Certificate', 'April 2020', CSOOPFEB2020, 'SoftUni', 6, 6);
        const MSSQL_Basics_Cert = new Certificate('Databases Basics - Microsoft SQL Server', 'June 2020', MSSQL_Basics, 'SoftUni', 6, 6);
        const CS_EF_Cert = new Certificate('Entity Framework Core', 'July 2020', CS_EF, 'SoftUni', 5.82, 6);
        const Unity3DEssentials2020_Cert = new Certificate('Unity 3D Essentials', 'July 2020', Unity3DEssentials2020, 'SoftUni', 6, 6, 'First place');
        const JSADVNOV2020_Cert = new Certificate('JS Advanced', 'November 2020', JSADVNOV2020, 'SoftUni', 6, 6);
        //Zenva
        const ZENVA_MICROVR_Cert = new Certificate('Zenva - Build a Micro-VR Game', 'April 2020', ZENVA_MICROVR, 'Zenva');
        const ZENVA_AR_INTRO_Cert = new Certificate('Zenva - Intro to Augmented Reality', 'April 2020', ZENVA_AR_INTRO, 'Zenva');
        const ZENVA_NodeJS_Express_BGN_Cert = new Certificate('Zenva - Node.js and Express for Beginners', 'July 2020', ZENVA_NodeJS_Express_BGN, 'Zenva');
        const ZENVA_React_Webforms_Cert = new Certificate('Zenva - Craft Web Forms with React', 'August 2020', ZENVA_React_Webforms, 'Zenva');
        const ZENVA_JS_Foundations_Cert = new Certificate('Zenva - JavaScript Foundations', 'August 2020', ZENVA_JS_Foundations, 'Zenva');
        const ZENVA_JS_Beginner_Cert = new Certificate("Zenva - The Complete Beginner's JavaScript Course", 'August 2020', ZENVA_JS_Beginner, 'Zenva');
        const ZENVA_Responsive_Web_Design_Cert = new Certificate('Zenva - Bite-Sized Responsive Web Design', 'August 2020', ZENVA_Responsive_Web_Design, 'Zenva');
        const ZENVA_JavaScript_DOM_API_Cert = new Certificate('Zenva - Create Interactive Pages with JavaScript and the DOM API', 'August 2020', ZENVA_JavaScript_DOM_API, 'Zenva');
        const ZENVA_Modern_JS_Cert = new Certificate('Zenva - Modern JavaScript - From ES6 to ES9', 'August 2020', ZENVA_Modern_JS, 'Zenva');
        const ZENVA_NodeJS_BGN_Cert = new Certificate('Zenva - Node.js For Beginners - Create Server-Side Apps with JavaScript', 'August 2020', ZENVA_NodeJS_BGN, 'Zenva');
        const ZENVA_React_WebApps_Cert = new Certificate('Zenva - Discover React for Web Applications', 'September 2020', ZENVA_React_WebApps, 'Zenva');
        const ZENVA_Complete_Blender_Cert =  new Certificate('Zenva - The Complete Blender Course', 'November 2020', ZENVA_Complete_Blender, 'Zenva');

        //Udemy
        const UDEMY_2D_Course_Cert = new Certificate('Complete C# Unity Developer 2D', 'May 2020', UDEMY_2D_Course, 'Udemy');

        certificates.push(CPPPBJune2019_Cert, CSFUNDSEP2019_Cert, CSADVJAN2020_Cert, CSOOPFEB2020_Cert, MSSQL_Basics_Cert, CS_EF_Cert, 
            Unity3DEssentials2020_Cert, JSADVNOV2020_Cert);
        certificates.push(ZENVA_MICROVR_Cert, ZENVA_AR_INTRO_Cert, ZENVA_NodeJS_Express_BGN_Cert, ZENVA_React_Webforms_Cert, ZENVA_JS_Foundations_Cert, ZENVA_JS_Beginner_Cert, ZENVA_Responsive_Web_Design_Cert, ZENVA_JavaScript_DOM_API_Cert,
            ZENVA_Modern_JS_Cert, ZENVA_NodeJS_BGN_Cert, ZENVA_React_WebApps_Cert, ZENVA_Complete_Blender_Cert);
        certificates.push(UDEMY_2D_Course_Cert);

        this.setState({
            certificates: certificates, 
            filtered_certificates: certificates,
        });
    }

    handleToggle(filter) {

        switch(filter) {
            case "SoftUni":
                this.state.softuni_visible ? 
                    this.setState({
                        softuni_visible: false,
                        filtered_certificates: this.state.filtered_certificates.filter(c => c.from != 'SoftUni')
                    })
                : 
                    this.setState({
                        softuni_visible: true,
                        filtered_certificates: this.state.filtered_certificates.concat(this.state.certificates.filter(c => c.from == 'SoftUni')),
                    });
                break;
            case "Zenva":
                this.state.zenva_visible ? 
                    this.setState({
                        zenva_visible: false,
                        filtered_certificates: this.state.filtered_certificates.filter(c => c.from != 'Zenva')
                    }) 
                : 
                    this.setState({
                        zenva_visible: true,
                        filtered_certificates: this.state.filtered_certificates.concat(this.state.certificates.filter(c => c.from == 'Zenva')),
                    });
                break;
            case "Udemy":
                this.state.udemy_visible ? 
                    this.setState({
                        udemy_visible: false,
                        filtered_certificates: this.state.filtered_certificates.filter(c => c.from != 'Udemy')
                    }) 
                : 
                    this.setState({
                        udemy_visible: true,
                        filtered_certificates: this.state.filtered_certificates.concat(this.state.certificates.filter(c => c.from == 'Udemy')),
                    });
                break;
            case "All":
                this.state.softuni_visible && this.state.zenva_visible && this.state.udemy_visible ?
                    this.setState({
                        softuni_visible: false,
                        zenva_visible: false,
                        udemy_visible: false,
                        filtered_certificates: [],
                    }) 
                :
                    this.setState({
                        softuni_visible: true,
                        zenva_visible: true,
                        udemy_visible: true,
                        filtered_certificates: this.state.certificates,
                    }) 
                    
            default:
                break;
        }

        
    } 

    render () {
        return (
            <div>
                <h5 className="centeredText">
                    Current Average Score: <b>5.97/6.00</b><br/>
                </h5> <br/>

                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Filter</Navbar.Brand>
                        <Nav className="mr-auto">
                        <Button variant="primary" size="lg" className={this.state.softuni_visible && this.state.zenva_visible && this.state.udemy_visible ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("All")}>All</Button>
                            <Button variant="primary" size="lg" className={this.state.softuni_visible ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("SoftUni")}>SoftUni</Button>
                            <Button variant="primary" size="lg" className={this.state.zenva_visible ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("Zenva")}>Zenva</Button>
                            <Button variant="primary" size="lg" className={this.state.udemy_visible ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("Udemy")}>Udemy</Button>
                    </Nav>   
                </Navbar>
                
                <Container className="contentCentering" fluid >                                
                { 
                    this.state.filtered_certificates.map(c => {
                        return <div className="gallery-imageWrapper">
                        <Image className="gallery-smallImg" src={c.img} thumbnail/>
                        <h6>{c.title} {c.score != undefined ? `(${c.score}/${c.maxScore})` : ''} <br/>
                        <i>{c.date}{c.notes ? ` - ${c.notes}` : ''}</i></h6>
                        </div>
                    })
                }    
                 
                <br/>
                <p className="boldTextWithTopMargin">...and more to come as I'm still studying...</p>
                </Container>
            </div>
        )
    }
    
}

export default ImageGallery;