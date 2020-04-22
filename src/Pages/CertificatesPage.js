import React from 'react';

//#region Internal Dependencies
import Hero from "../Components/Hero";
import ImageGallery from "../Components/ImageGallery";
//#endregion

function CertificatesPage(props) {
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle}/>
            <ImageGallery/>
        </div>
    )
}

export default CertificatesPage;