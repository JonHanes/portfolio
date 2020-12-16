import React from 'react'
//import Image from 'react-bootstrap/Image';

//#region Internal Dependencies

//#endregion

function CS_Blazor() {
    return (
        <div className="fragment">
            <h4 className="primaryTopic">Blazor</h4>
        <h4 className="secondaryTopic">General</h4>
        <div>
            <h5 className="tertiaryTopic">Watching for changes on VS2019 web application</h5><br/>
            <ul>
                <li>Go to the package manager console.</li>
                <li>Navigate to the folder with your project (cd and dir to navigate).</li>
                <li>Run the command <i>dotnet watch run</i>.</li>
            </ul>
            <ul>
                
                <li><b>Note!</b> It seems sometimes you will have to terminate the process manually.</li>
                <li>To do this, use the command <i>netstat -ano</i> and find the process.</li>
                <li>Get its process ID and kill the process with <i>taskkill /PID <b>ID_HERE</b> /F</i></li>
                <li>Alternatively, you can use the task manager to kill the dotnet/.NET process. [Seems to display differently based on OS]</li>
            </ul>
        </div>
        </div>)
}

export default CS_Blazor;