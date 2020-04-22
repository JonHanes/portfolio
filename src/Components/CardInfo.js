import React from 'react'

//#region External Dependencies
import {useSpring, animated} from 'react-spring';

//#endregion
function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}})

    return (
        <animated.div className="g-card-info" style={style}>
            <p className="g-card-title">{props.title}</p>
            <p className="g-card-subTitle">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
        </animated.div>
    )
}

export default CardInfo;