import React, {Component} from 'react';

//#region Bootstrap Dependencies
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
//#endregion

//#region Internal Dependencies
import CPPPBJune2019 from "../Assets/Images/Certificates/CPP-PB-JUN2019.png"
import CSFUNDSEP2019 from "../Assets/Images/Certificates/CS-FUND-SEP2019.png"
import CSADVJAN2020 from "../Assets/Images/Certificates/CS-ADV-JAN2020.png"
import CSOOPFEB2020 from "../Assets/Images/Certificates/CS-OOP-FEB2020.png"
import ZENVA_MICROVR from "../Assets/Images/Certificates/Zenva_BuildMicro-VRGame.PNG"
//#endregion

class ImageGallery extends Component {

    render () {
        return (
            <div>
    
                <h5 className="centeredText">
                    Current Average Score: <b>6.00/6.00</b><br/>
                </h5>
    
                <Container className="contentCentering" fluid>
                        <div className="gallery-imageWrapper">
                            <Image className="gallery-smallImg" src={CPPPBJune2019} thumbnail/>
                            <h6>C++ Programming Basics Certificate (6.00/6.00) <br/>
                            <i>June 2019</i></h6>
                        </div>
    
                        <div className="gallery-imageWrapper">
                            <Image className="gallery-smallImg" src={CSFUNDSEP2019} thumbnail />
                            <h6>C# Fundamentals Certificate (6.00/6.00) <br/>
                            <i>September 2019</i></h6>
                        </div>
    
                        <div className="gallery-imageWrapper">
                            <Image className="gallery-smallImg" src={CSADVJAN2020} thumbnail />
                            <h6>C# Advanced Certificate (6.00/6.00) <br/>
                            <i>January 2020</i></h6>
                        </div>
    
                        <div className="gallery-imageWrapper">
                            <Image className="gallery-smallImg" src={CSOOPFEB2020} thumbnail />
                            <h6>C# OOP Certificate (6.00/6.00) <br/>
                            <i>February 2020</i></h6>
                        </div>

                        <div className="gallery-imageWrapper">
                            <Image className="gallery-smallImg" src={ZENVA_MICROVR} thumbnail />
                            <h6>Zenva - Build a Micro-VR Game<br/>
                            <i>April 2020</i></h6>
                        </div>
                        <br/>
                        <p className="boldTextWithTopMargin">...and more to come as I'm still studying...</p>
                </Container>
            </div>
        )
    }
    
}

export default ImageGallery;