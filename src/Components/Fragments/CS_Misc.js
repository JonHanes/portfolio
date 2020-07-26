import React from 'react'

function CS_Misc(props) {
    return (
        <div className="fragment" id="miscNotes">
            <h4 className="primaryTopic">Misc</h4>
            <br/>
            <h5 className="secondaryTopic">Useful commands</h5>
            <ul>
                <li>Some of these are likely self-explanatory...</li>
            </ul>

            <div className="indented">
                <h5 className="tertiaryTopic">Command Line</h5>
                <ul>
                    <li>Command Line - Check Node.js version <b>[node -v]</b></li>
                </ul>
            </div>
        </div> 
    )
}

export default CS_Misc;

