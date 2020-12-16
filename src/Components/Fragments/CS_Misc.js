import React from 'react'

function CS_Misc(props) {
    return (
        <div className="fragment" id="miscNotes">
            <h4 className="primaryTopic">Misc</h4>
            <br/>
            <div className="commands">
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

            <div className="other">
                <h5 className="secondaryTopic">Other notes</h5>
                <ul>
                    <li>Due to updates in browser security, <b>Cross-Origin Resource Sharing (CORS)</b> will likely not allow you to load local files using the <b>fetch</b> command.<br/>
                    To remedy this on Firefox, go through the following steps:</li>
                    <ul>
                        <li>Type <i>about:config</i> in the address bar</li>
                        <li>Accept the risk and continue</li>
                        <li>Set the <i>privacy.file_unique_origin</i> to <i>false</i></li>
                    </ul>
                </ul>
            </div>
            
        </div> 
    )
}

export default CS_Misc;

