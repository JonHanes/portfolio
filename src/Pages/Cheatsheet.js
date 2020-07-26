import React from 'react';

//#region Internal Dependencies
import Hero from "../Components/Hero";
import Content from '../Components/Content';
//#endregion

//#region Fragment Components
import CSharpCheatsheet from '../Components/Fragments/CS_CSharp';
import JSCheatsheet from '../Components/Fragments/CS_JS';
import PHPCheatsheet from '../Components/Fragments/CS_PHP';
import MiscCheatsheet from '../Components/Fragments/CS_Misc';
import GitHubCheatsheet from '../Components/Fragments/CS_GitHub';
import ReactCheetsheet from '../Components/Fragments/CS_React';
//#endregion

function Cheatsheet(props) {
    return (
        <div>
            <Hero title={props.title}/>
            
            <Content>
                <h4 className="explanationText">Very much a work in progress.<br/>Functions to add:<br/>
                <ul>
                    <li>Collapsible elements [Useful when this grows in scale]</li>
                    <li>Add styling to the divs I am currently using, at the very least add a bottom margin so that they are further apart from each other.<br/>
                    Currently this effect is achieved using only whitespaces.</li>
                    <li>A navbar that is fixed to either side.</li>
                </ul>
                </h4>
                
                <CSharpCheatsheet/>
                <JSCheatsheet/>
                <ReactCheetsheet/>
                <PHPCheatsheet/>
                <MiscCheatsheet/>
                <GitHubCheatsheet/>
                
            </Content>
        </div>
    )
}

export default Cheatsheet;