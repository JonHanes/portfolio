import React from 'react'
import Image from 'react-bootstrap/Image';

//#region Internal Dependencies
import JS_Interpolation from '../../Assets/Images/Snippets/JS_Interpolation.PNG';
import JS_Prototype from '../../Assets/Images/Snippets/JS_Prototype1.PNG';
import JS_Express_BP from '../../Assets/Images/Snippets/JS_Express_BP.PNG';
import JSX_Escape from '../../Assets/Images/Snippets/JS_Escape.PNG';
//#endregion

function CS_JS(props) {
    return (
    <div className="fragment" id="javascriptNotes"> 
        <h4 className="primaryTopic">JavaScript</h4>
        <h5 className="tertiaryTopic">JavaScript - String interpolation</h5>
        <ul>
            <li>This can be achieved by wrapping the string in ` quotations [Template literals].</li>
            <li>Example usage:</li>
            <Image src={JS_Interpolation} thumbnail/>
            <li>More information can be found <a href="https://dmitripavlutin.com/string-interpolation-in-javascript/">here</a></li>
        </ul>

        <h5 className="tertiaryTopic">JavaScript - Prototypes</h5>
        <ul>
            <li>Prototypes in JavaScript are meant to add additional functionality/values to an existing function, which is meant as a blueprint for creating objects.</li>
            <li>You can add additional values to instances, but to ensure that all objects deriving from this blueprint have the same information, editing the prototype is necessary.</li>
            <li>Example usage:<br/>
            <i>flight.prototype.isActive = true</i></li>
            <Image src={JS_Prototype} thumbnail/>
            <li>Functions can also be passed to the prototype!</li>
        </ul>

        <h5 className="tertiaryTopic">JSX - Ignore special characters</h5>
        <ul>
            <li>The special character can be escaped using the curly braces.</li>
            <li>Example usage:</li>
            <Image src={JSX_Escape} thumbnail/>
        </ul>
        <h5 className="tertiaryTopic">JavaScript - package.json file</h5>
        <ul>
            <li>Extremely convenient file containing metadata related to the application.</li>
            <li>Easy way to track dependencies between libraries.</li>
        </ul>
        <h5 className="secondaryTopic">Node.js</h5>
        <h6 className="tertiaryTopic">Express.js</h6>
        <ul>
            <li>Express is a very handy framework for Node.js</li>
            <li>It simplifies API calls and error handling.</li>
            <li>Used together with <a href="https://www.npmjs.com/package/body-parser">body-parser</a> you can directly input a JSON body for your API calls.</li>
            <li>Usage example: </li>
            <li><i>const app = express();</i></li>
        </ul>
        <h6 className="tertiaryTopic">Body-Parser - Setup</h6>
        <ul>
            <li>To use body parser, you first have to use something like this.</li>
            <li><i>const bodyParser = require('body-parser');</i></li>
            <li>After this, ensure that your express connection is using the body-parser to handle the requests.</li>
            <Image src={JS_Express_BP} thumbnail/>
        </ul>

        <h6 className="tertiaryTopic">Dotenv</h6>
        <ul>
            <li>Dotenv allows you to set up your own environment values without having to pass them into the package.json file.</li>
            <li>Make sure you have included this into your project <i>require('dotenv').config();</i></li>
            <li>Once you have it set up, all you have to do is add an .env file into your solution and input the data like this, for example.<br/>
            <i>PORT=3000<br/>TEST=test</i></li>
            <li>The best practice with Dotenv is to keep only environment values that are not sensitive here.<br/>
            If sensitive data needs to be input here, it is best to send your clients a sample .env file that they need to fill in with their own information.</li>
        </ul>
    </div>
    )
}

export default CS_JS;

