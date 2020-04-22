import React from 'react';

//#region Internal Dependencies
import Hero from "../Components/Hero";
import Carousel from "../Components/Carousel";
//#endregion

function HomePage(props) {
    return (

        <div>
            <Hero title={props.title} subTitle={props.subTitle}/>
            <div className="descriptionText">
                <h3 className="centeredText">
                    I am primarily a C# developer, studying C# at SoftUni in Bulgaria.<br/>
                    My main interests are game development and creating user interfaces, but I also have an interest in web design.<br/>
                </h3>
            </div>
            <Carousel/>
        </div>
    )
}

export default HomePage;