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
import JSAPPOCT2020 from "../Assets/Images/Certificates/JS-APP-OCT2020.png"
import HTMLCSS2021 from "../Assets/Images/Certificates/HTML-CSS-JAN2021.png"
import ReactJSMAR2021 from "../Assets/Images/Certificates/ReactJS-MAR2021.png"

//Zenva
import ZENVA_MICROVR from "../Assets/Images/Certificates/Zenva_BuildMicro-VRGame.png"
import ZENVA_AR_INTRO from "../Assets/Images/Certificates/Zenva_IntroToAR.png"
import ZENVA_NodeJS_Express_BGN from "../Assets/Images/Certificates/Zenva_Node.js&Express_BGN.png"
import ZENVA_React_Webforms from "../Assets/Images/Certificates/Zenva_React_Webforms.png"
import ZENVA_JS_Foundations from "../Assets/Images/Certificates/Zenva_JS_Foundations.png"
import ZENVA_JS_Beginner from "../Assets/Images/Certificates/Zenva_JS_Beginner1.png"
import ZENVA_Responsive_Web_Design from "../Assets/Images/Certificates/Zenva_BS_Responsive_Web_Design.png"
import ZENVA_JavaScript_DOM_API from "../Assets/Images/Certificates/Zenva_JavaScript_DOM_API.png"
import ZENVA_Modern_JS from "../Assets/Images/Certificates/Zenva_Modern_JS_ES6-9.png"
import ZENVA_NodeJS_BGN from "../Assets/Images/Certificates/Zenva_Node.js_BGN.png"
import ZENVA_React_WebApps from "../Assets/Images/Certificates/Zenva_React_For_WebApps.png" 
import ZENVA_Complete_Blender from "../Assets/Images/Certificates/Zenva_Complete_Blender.png" 
import ZENVA_Unity_Multiplayer from "../Assets/Images/Certificates/Zenva_Intro_to_Multiplayer_Unity.png" 
import ZENVA_Unity_2D_SP from "../Assets/Images/Certificates/Zenva_Unity_2D_Super_Plumbers.png" 
import ZENVA_Unity_World_Management from "../Assets/Images/Certificates/Zenva_Unity_World_Management.png" 


//Udemy
import UDEMY_2D_Course from "../Assets/Images/Certificates/Udemy_Unity_2D_Course.jpg"
import Udemy_ASP_NET_Core from "../Assets/Images/Certificates/Udemy_ASP_NET_Core_Course.jpg"

//GameDev.tv
import GameDev_Motivation_Processes from "../Assets/Images/Certificates/GameDev_Motivation_Processes.png";
import GameDev_RPG_Intermediate_Unity_Dialogue_Quests from "../Assets/Images/Certificates/GameDev_RPG_Intermediate_Unity_Dialogue_Quests.png";
import GameDev_RPG_Intermediate_Unity_Inventory from "../Assets/Images/Certificates/GameDev_RPG_Intermediate_Unity_Inventory.png";
import GameDev_RPG_Intermediate_Unity from "../Assets/Images/Certificates/GameDev_RPG_Intermediate_Unity.png";


//#endregion

class ImageGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            softuni_visible: true,
            zenva_visible: true,
            udemy_visible: true,
            gamedev_visible: true,
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
        certificates.push(new Certificate('C++ Programming Basics Certificate', 'July 2019', CPPPBJune2019, 'SoftUni', 6, 6));
        certificates.push(new Certificate('C# Fundamentals Certificate', 'December 2019', CSFUNDSEP2019, 'SoftUni', 6, 6));
        certificates.push(new Certificate('C# Advanced Certificate', 'March 2020', CSADVJAN2020, 'SoftUni', 6, 6));
        certificates.push(new Certificate('C# OOP Certificate', 'April 2020', CSOOPFEB2020, 'SoftUni', 6, 6));
        certificates.push(new Certificate('Databases Basics - Microsoft SQL Server', 'June 2020', MSSQL_Basics, 'SoftUni', 6, 6));
        certificates.push(new Certificate('Entity Framework Core', 'July 2020', CS_EF, 'SoftUni', 5.82, 6));
        certificates.push(new Certificate('Unity 3D Essentials', 'July 2020', Unity3DEssentials2020, 'SoftUni', 6, 6, 'First place'));
        certificates.push(new Certificate('JS Advanced', 'November 2020', JSADVNOV2020, 'SoftUni', 6, 6));
        certificates.push(new Certificate('JS Applications', 'October 2020', JSAPPOCT2020, 'SoftUni', 6, 6));
        certificates.push(new Certificate('HTML & CSS', 'January 2021', HTMLCSS2021, 'SoftUni', 6, 6));
        certificates.push(new Certificate('ReactJS', 'March 2021', ReactJSMAR2021, 'SoftUni', 5.62, 6));

        //Zenva
        certificates.push(new Certificate('Zenva - Build a Micro-VR Game', 'April 2020', ZENVA_MICROVR, 'Zenva'));
        certificates.push(new Certificate('Zenva - Intro to Augmented Reality', 'April 2020', ZENVA_AR_INTRO, 'Zenva'));
        certificates.push(new Certificate('Zenva - Node.js and Express for Beginners', 'July 2020', ZENVA_NodeJS_Express_BGN, 'Zenva'));
        certificates.push(new Certificate('Zenva - Craft Web Forms with React', 'August 2020', ZENVA_React_Webforms, 'Zenva'));
        certificates.push(new Certificate('Zenva - JavaScript Foundations', 'August 2020', ZENVA_JS_Foundations, 'Zenva'));
        certificates.push(new Certificate("Zenva - The Complete Beginner's JavaScript Course", 'August 2020', ZENVA_JS_Beginner, 'Zenva'));
        certificates.push(new Certificate('Zenva - Bite-Sized Responsive Web Design', 'August 2020', ZENVA_Responsive_Web_Design, 'Zenva'));
        certificates.push(new Certificate('Zenva - Create Interactive Pages with JavaScript and the DOM API', 'August 2020', ZENVA_JavaScript_DOM_API, 'Zenva'));
        certificates.push(new Certificate('Zenva - Modern JavaScript - From ES6 to ES9', 'August 2020', ZENVA_Modern_JS, 'Zenva'));
        certificates.push(new Certificate('Zenva - Node.js For Beginners - Create Server-Side Apps with JavaScript', 'August 2020', ZENVA_NodeJS_BGN, 'Zenva'));
        certificates.push(new Certificate('Zenva - Discover React for Web Applications', 'September 2020', ZENVA_React_WebApps, 'Zenva'));
        certificates.push(new Certificate('Zenva - The Complete Blender Course', 'November 2020', ZENVA_Complete_Blender, 'Zenva'));
        certificates.push(new Certificate('Zenva - Intro to Multiplayer Game Development with Unity', 'January 2021', ZENVA_Unity_Multiplayer, 'Zenva'));
        certificates.push(new Certificate('Zenva - Unity 2D Projects, Super Plumbers', 'May 2021', ZENVA_Unity_2D_SP, 'Zenva'));
        certificates.push(new Certificate('Zenva - Create and Manage Huge Worlds in Unity', 'May 2021', ZENVA_Unity_World_Management, 'Zenva'));

        //Udemy
        certificates.push(new Certificate('Complete C# Unity Developer 2D', 'May 2020', UDEMY_2D_Course, 'Udemy'));
        certificates.push(new Certificate('ASP.NET Core MVC - Up and Running', 'Jan 2021', Udemy_ASP_NET_Core, 'Udemy'));

        //GameDev.tv
        certificates.push(new Certificate('Finish It! Motivation & Processes For Game Developers', 'April 2021', GameDev_Motivation_Processes, 'GameDev'));
        certificates.push(new Certificate('2019 RPG Core Combat Creator: Learn Intermediate Unity C# Coding', 'April 2021', GameDev_RPG_Intermediate_Unity, 'GameDev'));
        certificates.push(new Certificate('Unity Dialogue & Quests: Intermediate C# Game Coding', 'May 2021', GameDev_RPG_Intermediate_Unity_Dialogue_Quests, 'GameDev'));
        certificates.push(new Certificate('RPG Inventory Systems: Intermediate C# Game Coding', 'May 2021', GameDev_RPG_Intermediate_Unity_Inventory, 'GameDev'));

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
            case "GameDev":
                this.state.gamedev_visible ? 
                    this.setState({
                        gamedev_visible: false,
                        filtered_certificates: this.state.filtered_certificates.filter(c => c.from != 'GameDev')
                    }) 
                : 
                    this.setState({
                        gamedev_visible: true,
                        filtered_certificates: this.state.filtered_certificates.concat(this.state.certificates.filter(c => c.from == 'GameDev')),
                    });
                break;
            case "All":
                this.ensureAllChecked() ?
                    this.setState({
                        softuni_visible: false,
                        zenva_visible: false,
                        udemy_visible: false,
                        gamedev_visible: false,
                        filtered_certificates: [],
                    }) 
                :
                    this.setState({
                        softuni_visible: true,
                        zenva_visible: true,
                        udemy_visible: true,
                        gamedev_visible: true,
                        filtered_certificates: this.state.certificates,
                    }) 
                    
            default:
                break;
        }

        
    } 

    ensureAllChecked() { return this.state.softuni_visible && this.state.zenva_visible && this.state.udemy_visible && this.state.gamedev_visible; }

    render () {
        return (
            <div>
                <h5 className="centeredText">
                    Current Average Score: <b>5.93/6.00</b><br/>
                </h5> <br/>

                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Filter</Navbar.Brand>
                        <Nav className="mr-auto">
                        <Button variant="primary" size="lg" className={this.ensureAllChecked() ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("All")}>All</Button>
                            <Button variant="primary" size="lg" className={this.state.softuni_visible ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("SoftUni")}>SoftUni</Button>
                            <Button variant="primary" size="lg" className={this.state.zenva_visible ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("Zenva")}>Zenva</Button>
                            <Button variant="primary" size="lg" className={this.state.udemy_visible ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("Udemy")}>Udemy</Button>
                            <Button variant="primary" size="lg" className={this.state.gamedev_visible ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("GameDev")}>GameDev.tv</Button>
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