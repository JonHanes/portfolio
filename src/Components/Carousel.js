import React, {Component} from 'react'

//#region Bootstrap Dependencies
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//#endregion

//#region Internal Dependencies
import Card from "./Card";

import CSharpLogo from "../Assets/Images/CSharpLogo.png";
import ApartmentImg from "../Assets/Images/ApartmentImg.png";
import UnityLogo from "../Assets/Images/UnityLogo.png";
//#endregion


class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
            {
                id: 0,
                title: 'C#',
                subTitle: 'Certified background in C#',
                imgSrc: CSharpLogo,
                link: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)',
                selected: false
            },
            {
                id: 1,
                title: '3D Design',
                subTitle: 'Experience with building low-poly models in Blender',
                imgSrc: ApartmentImg,
                link: 'https://www.blender.org/',
                selected: false
            }, 
            {
                id: 2,
                title: 'Game Development',
                subTitle: 'This is my passion, both Unity and Unreal are something I wish to spend more time with.',
                imgSrc: UnityLogo,
                link: 'https://unity.com/',
                selected: false
            }
            ]
        }
    }

    handleCardClick = (id, card) => {
        //console.log("Clicked ID: " + id);

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e)) } key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
    
}

export default Carousel;
