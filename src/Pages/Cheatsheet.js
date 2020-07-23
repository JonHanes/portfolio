import React from 'react';
import Image from 'react-bootstrap/Image';

//#region Internal Dependencies
import Hero from "../Components/Hero";
import Content from '../Components/Content';
//#endregion

//#region Images
import VSProjectFilesImg from '../Assets/Images/Snippets/VSProjectFiles.jpg';
import PackageManagerImg from '../Assets/Images/Snippets/PackageManager.jpg';
import PowershellPromptImg from '../Assets/Images/Snippets/PowershellPrompt.jpg';
import VS_CS_Version from '../Assets/Images/Snippets/VS_Version_CS.PNG';
import VS_CS_Version2 from '../Assets/Images/Snippets/VS_Version_CS2.PNG';

import XML_DTO from '../Assets/Images/Snippets/XML_DTO.PNG';

import XML_HelperEX1 from '../Assets/Images/Snippets/XML_HelperEX1.PNG';
import XML_HelperEX2 from '../Assets/Images/Snippets/XML_HelperEX2.PNG';
import XML_HelperEX3 from '../Assets/Images/Snippets/XML_HelperEX3.PNG';

import JS_Interpolation from '../Assets/Images/Snippets/JS_Interpolation.PNG';
import JS_Express_BP from '../Assets/Images/Snippets/JS_Express_BP.PNG';
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
                </ul>
                </h4>

                <h4>C#/.NET</h4>

                <br/>
                <h4 className="subTitle">General</h4>
                <div>
                    <h5>Visual Studio - Update C# Version</h5><br/>
                    <ul>
                        <li> Find the main project file, .csproj.
                        </li>
                        <Image src={VS_CS_Version} thumbnail/>
                        <li>Add the following changes, it should look something like this...</li>
                        <Image src={VS_CS_Version2} thumbnail/>
                        <li>Change the version according to the needs of your project.</li>
                    </ul>

                    <h5>XML Conversions using a DTO.</h5>
                    <ul>
                        <li>You can use [XmlType("<i>product</i>")] before the class declaration so that the class <i>Product</i> can be mapped to the XML element, <i>product</i>.</li>
                        <li>As for properties, you can use [XmlElement("<i>name</i>")] to tie the <i>Name</i> property inside the class.</li>
                        <Image src={XML_DTO} thumbnail/>
                        <li><i>Example provided</i></li>
                        
                    </ul>
                    <h5>XML Helper</h5>
                        <ul>
                            <li>XML helper can be downloaded from <a href="https://github.com/StoyanShopov/XmlFacade/blob/master/XmlFacade/XmlFacade/XmlConverter.cs">here</a></li>
                        </ul>
                        <h6>[XML Helper] - <b>Importing</b> data using a DTO</h6>
                        <ul>
                            <li>Usage example:</li>
                            <Image src={XML_HelperEX1} thumbnail/>
                            <li>It takes in the two parameters, the string which was read from a file, and then the root element's name.</li>
                            <li>For example a library would be the root element of a collection of books.</li>
                            <li>This is the first element in the XML file, the one which the other components are children of.</li>
                        </ul>
                        <h6>[XML Helper] - <b>Exporting</b> data using a DTO</h6>
                        <ul>
                            <li>Usage example:</li>
                            <Image src={XML_HelperEX2} thumbnail/>
                            <li>Using LINQ you can limit the amount of data to be passed.</li>
                            <li>After this, much like before, you use the Serialize function and pass on the root element name ["Products" here].</li>
                        </ul>
                        <h6>[XML Helper] - Handling XML arrays</h6>
                        <ul>
                            <Image src={XML_HelperEX3} thumbnail/>
                            <li>Pictured here.</li>
                        </ul>
                </div>

                <div>
                <h4 className="subTitle">EF Core</h4>
                <br/>
                <h5>Database Creation</h5><br/>
                <b>Code-First</b><br/>
                <ul>
                    <li>Note: You will need to install some Microsoft packages to initialize the migrations. <br/>[For example Microsoft.EntityFrameworkCore.SqlServer & Microsoft.EntityFrameworkCore.Design]</li>
                    <li>Create the appropriate classes in your IDE.</li>
                    <Image src={VSProjectFilesImg} thumbnail/>
                    <li>Use the package manager console to perform the next operations.<br/>
                    You can find the package manager with the search function.</li>
                    <Image src={PackageManagerImg} thumbnail/>
                    <li>Run the following command.<br/>
                    <i>Add-Migration [MigrationName]
                    </i></li>
                    <li>To run these changes if they succeeded, run the following.<br/>
                    <i>Update-Database</i>
                    </li>
                    <li>You might receive errors here, but the console should point out what needs to be changed.<br/>
                    A typical issue might relate to delete behaviour, as the database might not know how to perform when deleting entities.<br/>
                    You can use .OnDelete(DeleteBehaviour.Restrict) to deal with this in the model builder.
                    </li>
                </ul>

                <b>Database-First</b><br/>
                <ul>
                    <li>
                        To begin, use Shift+Right click to get the <b>Open PowerShell window here</b> option when in your source folder.
                    </li>
                    <Image src={PowershellPromptImg} thumbnail/>
                    <li>Use the following command<br/>
                        <i>dotnet ef dbcontext scaffold "Server=[ServerName];Database=[DBName];Integrated Security=true;" Microsoft.EntityFrameworkCore.SqlServer -o Models</i></li>
                        <li>The previous command works if this is the local server (and using the default credentials), and the provider is as mentioned</li>
                        <li>The other parts of this command specify where the models should be created (a subfolder)</li>
                </ul>
                </div>
                
                <div>
                <h4 className="subTitle">GitHub</h4>
                    <br/>
                    <h5>Git commands</h5><br/>
                    <ul>
                        <li><b>git add .</b> - Adds all files to be deployed</li>
                        <li><b>git commit -m "<i>Text explaining the changes</i>"</b> - Create a commit to the repository</li>
                        <li><b>npm run deploy</b> - Deploy the files you have been working on to the repository</li>
                        <li><b>git push -u origin master</b> - Push the changes to the master repository</li>
                    </ul>
                </div>


                <br/><br/>
                <h4 className="subTitle">JavaScript</h4>

                <div>
                    <h5>JavaScript - String interpolation</h5>
                    <ul>
                        <li>This can be achieved by wrapping the string in ` quotations [Template literals].</li>
                        <li>Example usage:</li>
                        <Image src={JS_Interpolation} thumbnail/>
                        <li>More information can be found <a href="https://dmitripavlutin.com/string-interpolation-in-javascript/">here</a></li>
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
                </div>
                
                <br/><br/>
                <h4 className="subTitle">Misc</h4>

                <br/>
                <h4 className="subTitle">Useful commands</h4>
                <ul>
                    <li>Some of these are likely self-explanatory...</li>
                </ul>

                <div>
                    <h5>Command Line</h5>
                    <h6>Command Line - Check Node.js version <b>[node -v]</b></h6><br/>
                </div>
                    
            </Content>
        </div>
    )
}

export default Cheatsheet;