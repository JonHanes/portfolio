import React from 'react'
import Image from 'react-bootstrap/Image';

//#region Internal Dependencies
import JS_Interpolation from '../../Assets/Images/Snippets/JS_Interpolation.PNG';
import JS_Express_BP from '../../Assets/Images/Snippets/JS_Express_BP.PNG';
import JSX_Escape from '../../Assets/Images/Snippets/JS_Escape.PNG';
//#endregion

function CS_JS(props) {
    return (
    <div id="javascriptNotes"> 
        <h4 className="subTitle">JavaScript</h4>
        <h5>JavaScript - String interpolation</h5>
        <ul>
            <li>This can be achieved by wrapping the string in ` quotations [Template literals].</li>
            <li>Example usage:</li>
            <Image src={JS_Interpolation} thumbnail/>
            <li>More information can be found <a href="https://dmitripavlutin.com/string-interpolation-in-javascript/">here</a></li>
        </ul>
        <br/>
        <h5>JSX - Ignore special characters</h5>
        <ul>
            <li>The special character can be escaped using the curly braces.</li>
            <li>Example usage:</li>
            <Image src={JSX_Escape} thumbnail/>
        </ul>

        <br/>
        <h5>JavaScript - package.json file</h5>
        <ul>
            <li>Extremely convenient file containing metadata related to the application.</li>
            <li>Easy way to track dependencies between libraries.</li>
        </ul>
        <br/>

        <h5>Node.js</h5>
        <h6>Express.js</h6>
        <ul>
            <li>Express is a very handy framework for Node.js</li>
            <li>It simplifies API calls and error handling.</li>
            <li>Used together with <a href="https://www.npmjs.com/package/body-parser">body-parser</a> you can directly input a JSON body for your API calls.</li>
            <li>Usage example: </li>
            <li><i>const app = express();</i></li>
        </ul>
        <h6>Body-Parser - Setup</h6>
        <ul>
            <li>To use body parser, you first have to use something like this.</li>
            <li><i>const bodyParser = require('body-parser');</i></li>
            <li>After this, ensure that your express connection is using the body-parser to handle the requests.</li>
            <Image src={JS_Express_BP} thumbnail/>
        </ul>

        <h6>Dotenv</h6>
        <ul>
            <li>Dotenv allows you to set up your own environment values without having to pass them into the package.json file.</li>
            <li>Make sure you have included this into your project <i>require('dotenv').config();</i></li>
            <li>Once you have it set up, all you have to do is add an .env file into your solution and input the data like this, for example.<br/>
            <i>PORT=3000<br/>TEST=test</i></li>
            <li>The best practice with Dotenv is to keep only environment values that are not sensitive here.<br/>
            If sensitive data needs to be input here, it is best to send your clients a sample .env file that they need to fill in with their own information.</li>
        </ul>
        <br/><br/>
    </div>
    )
}

export default CS_JS;

