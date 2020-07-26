import React from 'react';
import Image from 'react-bootstrap/Image';

//#region Internal Dependencies
import React_HandleClick from '../../Assets/Images/Snippets/React_HandleClick.PNG';
//#endregion

function CS_React(props) {
    return (
    <div id="reactNotes"> 
        <h4 className="subTitle">React</h4>
        <h5>React - Handle change</h5>
        <ul>
            <li>The handle change function is called in React whenever a change is detected in the input field.</li>
            <li>Example usage:<br/>
            <i>{"<input onChange={this.handleChange.bind(this)} name='nameOfGuest' />"}</i></li>
                <ul>
                    <li>The way this works is that it binds the value passed on into <b>this</b> and then calls the function with the given value.</li>
                    <li>The handleChange function then calls the <b>setState</b> function, and once a submit button is pressed, it can proceed with transferring the value to an array.</li>
                    <li>This is how the setState function handles the change.<br/>
                    <i>{"this.setState({nameOfGuest: e.target.value})"}</i>
                    </li>
                    <li>Example usage of the click handling event: <br/>
                    <Image src={React_HandleClick} thumbnail/>
                    </li>
                </ul>
        </ul>
        
        <br/><br/>
    </div>
    )
}

export default CS_React;

