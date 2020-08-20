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
//Zenva
import ZENVA_MICROVR from "../Assets/Images/Certificates/Zenva_BuildMicro-VRGame.PNG"
import ZENVA_AR_INTRO from "../Assets/Images/Certificates/Zenva_IntroToAR.PNG"
import ZENVA_NodeJS_Express_BGN from "../Assets/Images/Certificates/Zenva_Node.js&Express_BGN.PNG"
import ZENVA_React_Webforms from "../Assets/Images/Certificates/Zenva_React_Webforms.PNG"
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
        };
    }

    handleToggle(filter) {

        switch(filter) {
            case "SoftUni":
                this.state.softuni_visible ? this.setState({softuni_visible: false}) : this.setState({softuni_visible: true});
                break;
            case "Zenva":
                this.state.zenva_visible ? this.setState({zenva_visible: false}) : this.setState({zenva_visible: true});
                break;
            case "Udemy":
                this.state.udemy_visible ? this.setState({udemy_visible: false}) : this.setState({udemy_visible: true});
                break;
            default:
                break;
        }

        
    } 

    render () {
        return (
            <div>
                <h5 className="centeredText">
                    Current Average Score: <b>5.96/6.00</b><br/>
                </h5>

                {/* 
                    Implementing this once the issues with spacing are cleared up
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">Filter</Navbar.Brand>
                            <Nav className="mr-auto">
                                <Button variant="primary" size="lg" className={this.state.softuni_visible ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("SoftUni")}>SoftUni</Button>
                                <Button variant="primary" size="lg" className={this.state.zenva_visible ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("Zenva")}>Zenva</Button>
                                <Button variant="primary" size="lg" className={this.state.udemy_visible ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("Udemy")}>Udemy</Button>
                        </Nav>   
                    </Navbar>
                */}
                
                
                <Container className="contentCentering" fluid >
                    {this.state.softuni_visible ? 
                        <div className="gallery-imageWrapper">
                        <Image className="gallery-smallImg" src={CPPPBJune2019} thumbnail/>
                        <h6>C++ Programming Basics Certificate (6.00/6.00) <br/>
                        <i>July 2019</i></h6>
                        </div>
                        : ''
                     }
                        
                    { this.state.softuni_visible ? 
                        <div className="gallery-imageWrapper">
                        <Image className="gallery-smallImg" src={CSFUNDSEP2019} thumbnail />
                        <h6>C# Fundamentals Certificate (6.00/6.00) <br/>
                        <i>December 2019</i></h6>
                        </div>
                        : ''
                    }
                    
                    { this.state.softuni_visible ? 
                        <div className="gallery-imageWrapper">
                        <Image className="gallery-smallImg" src={CSADVJAN2020} thumbnail />
                        <h6>C# Advanced Certificate (6.00/6.00) <br/>
                        <i>March 2020</i></h6>
                        </div>
                        : ''
                    }

                    { this.state.softuni_visible ? 
                        <div className="gallery-imageWrapper">
                        <Image className="gallery-smallImg" src={CSOOPFEB2020} thumbnail />
                        <h6>C# OOP Certificate (6.00/6.00) <br/>
                        <i>April 2020</i></h6>
                        </div>
                        : ''
                    }
                    
                    {/*Need to come up with another solution for spacing in the near future, maybe an array of all the components*/}
                        <br/>
                        <br/>

                    { this.state.softuni_visible ? 
                        <div className="gallery-imageWrapper">
                        <Image className="gallery-smallImg" src={MSSQL_Basics} thumbnail />
                        <h6>Databases Basics - Microsoft SQL Server (6.00/6.00)<br/>
                        <i>June 2020</i></h6>
                        </div>
                        : ''
                    }

                    
                    { this.state.softuni_visible ? 
                        <div className="gallery-imageWrapper">
                        <Image className="gallery-smallImg" src={CS_EF} thumbnail />
                        <h6>Entity Framework Core (5.82/6.00)<br/>
                        <i>July 2020</i></h6>
                        </div>
                        : ''
                    }
                        
                    { this.state.softuni_visible ? 
                        <div className="gallery-imageWrapper">
                        <Image className="gallery-smallImg" src={Unity3DEssentials2020} thumbnail />
                        <h6>Unity 3D Essentials (6.00/6.00 - First place)<br/>
                        <i>July 2020</i></h6>
                        </div>
                        : ''
                    }
                        
                    { this.state.zenva_visible ? 
                        <div className="gallery-imageWrapper">
                        <Image className="gallery-smallImg" src={ZENVA_MICROVR} thumbnail />
                        <h6>Zenva - Build a Micro-VR Game<br/>
                        <i>April 2020</i></h6>
                        </div>
                        : ''
                    }

                        <br/>
                        <br/>

                    { this.state.zenva_visible ? 
                        <div className="gallery-imageWrapper">
                        <Image className="gallery-smallImg" src={ZENVA_AR_INTRO} thumbnail />
                        <h6>Zenva - Intro to Augmented Reality<br/>
                        <i>April 2020</i></h6>
                        </div>
                        : ''
                    }

                    { this.state.zenva_visible ? 
                        <div className="gallery-imageWrapper">
                        <Image className="gallery-smallImg" src={ZENVA_NodeJS_Express_BGN} thumbnail />
                        <h6>Zenva - Node.js and Express for Beginners<br/>
                        <i>July 2020</i></h6>
                        </div>
                        : ''
                    }

                    { this.state.zenva_visible ? 
                        <div className="gallery-imageWrapper">
                        <Image className="gallery-smallImg" src={ZENVA_React_Webforms} thumbnail />
                        <h6>Zenva - Craft Web Forms with React<br/>
                        <i>August 2020</i></h6>
                        </div>
                        : ''
                    }

                    { this.state.udemy_visible ? 
                        <div className="gallery-imageWrapper">
                        <Image className="gallery-smallImg" src={UDEMY_2D_Course} thumbnail />
                        <h6>Complete C# Unity Developer 2D<br/>
                        <i>May 2020</i></h6>
                        </div>
                        : ''
                    }                    
                        
                        <br/>
                        <p className="boldTextWithTopMargin">...and more to come as I'm still studying...</p>
                </Container>
            </div>
        )
    }
    
}

export default ImageGallery;