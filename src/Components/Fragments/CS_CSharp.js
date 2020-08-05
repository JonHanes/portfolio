import React from 'react'
import Image from 'react-bootstrap/Image';

//#region Internal Dependencies
import VSProjectFilesImg from '../../Assets/Images/Snippets/VSProjectFiles.jpg';
import PackageManagerImg from '../../Assets/Images/Snippets/PackageManager.jpg';
import PowershellPromptImg from '../../Assets/Images/Snippets/PowershellPrompt.jpg';
import VS_CS_Version from '../../Assets/Images/Snippets/VS_Version_CS.PNG';
import VS_CS_Version2 from '../../Assets/Images/Snippets/VS_Version_CS2.PNG';

import XML_DTO from '../../Assets/Images/Snippets/XML_DTO.PNG';
import XML_HelperEX1 from '../../Assets/Images/Snippets/XML_HelperEX1.PNG';
import XML_HelperEX2 from '../../Assets/Images/Snippets/XML_HelperEX2.PNG';
import XML_HelperEX3 from '../../Assets/Images/Snippets/XML_HelperEX3.PNG';
import EF_Relations1 from '../../Assets/Images/Snippets/EF_Relations1.PNG';
//#endregion

function CS_CSharp(props) {
    return (
        <div className="fragment">
            <h4 className="primaryTopic">C#/.NET</h4>
        <h4 className="secondaryTopic">General</h4>
        <div>
            <h5 className="tertiaryTopic">Visual Studio - Update C# Version</h5><br/>
            <ul>
                <li> Find the main project file, .csproj.
                </li>
                <Image src={VS_CS_Version} thumbnail/>
                <li>Add the following changes, it should look something like this...</li>
                <Image src={VS_CS_Version2} thumbnail/>
                <li>Change the version according to the needs of your project.</li>
            </ul>

        <h4 className="secondaryTopic">XML</h4>
            <h5 className="tertiaryTopic">XML Conversions using a DTO.</h5>
            <ul>
                <li>You can use [XmlType("<i>product</i>")] before the class declaration so that the class <i>Product</i> can be mapped to the XML element, <i>product</i>.</li>
                <li>As for properties, you can use [XmlElement("<i>name</i>")] to tie the <i>Name</i> property inside the class.</li>
                <Image src={XML_DTO} thumbnail/>
                <li><i>Example provided</i></li>         
            </ul>
            <h5 className="tertiaryTopic">XML Helper</h5>
                <ul>
                    <li>XML helper can be downloaded from <a href="https://github.com/StoyanShopov/XmlFacade/blob/master/XmlFacade/XmlFacade/XmlConverter.cs">here</a></li>
                </ul>
                <h6 className="quaternaryTopic">[XML Helper] - <b>Importing</b> data using a DTO</h6>
                <ul>
                    <li>Usage example:</li>
                    <Image src={XML_HelperEX1} thumbnail/>
                    <li>It takes in the two parameters, the string which was read from a file, and then the root element's name.</li>
                    <li>For example a library would be the root element of a collection of books.</li>
                    <li>This is the first element in the XML file, the one which the other components are children of.</li>
                </ul>
                <h6 className="quaternaryTopic">[XML Helper] - <b>Exporting</b> data using a DTO</h6>
                <ul>
                    <li>Usage example:</li>
                    <Image src={XML_HelperEX2} thumbnail/>
                    <li>Using LINQ you can limit the amount of data to be passed.</li>
                    <li>After this, much like before, you use the Serialize function and pass on the root element name ["Products" here].</li>
                </ul>
                <h6 className="quaternaryTopic">[XML Helper] - Handling XML arrays</h6>
                <ul>
                    <Image src={XML_HelperEX3} thumbnail/>
                    <li>Pictured here.</li>
                </ul>
        </div>

        <div>
        <h4 className="secondaryTopic">EF Core</h4>
        <h5 className="tertiaryTopic">Database Creation</h5>

        <b className="quaternaryTopic">Code-First</b>
        <ul>
            <li>Note: You will need to install some Microsoft packages to initialize the migrations. <br/>[For example Microsoft.EntityFrameworkCore.SqlServer & Microsoft.EntityFrameworkCore.Design]</li>
            <li>Create the appropriate classes in your IDE.</li>
            <Image src={VSProjectFilesImg} thumbnail/>
            <li>When creating the DBContext for the DB, derive from the DbContext class and ensure you are overriding the OnConfiguring and OnModelCreating methods.<br/>
            This will let you add more constraints to your columns, as data annotations cannot do everything.</li>
            <li>You will also need to list the DBSets in the DBContext, following this convention. <br/>
            <i>{"public DbSet<District> Districts {{ get; set; }}"}</i></li>
            <li>The OnConfiguring method should contain something like the following.<br/>
            <i>if (!optionsBuilder.IsConfigured) {"{optionsBuilder.UseSqlServer('Server=[SERVERNAME];Database=[DBNAME];[AUTH METHOD - FOR EXAMPLE Integrated Security=True]');}"}</i>
            </li>
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

        <b className="quaternaryTopic">Database-First</b><br/>
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
        <h5 className="tertiaryTopic">Database Modeling</h5>
        <ul>
            <li>The connection can be made between one model and another by either tying this to a foreign key and a navigational property, or by creating a collection of these models.<br/></li>
            <li>An example of a one to many relationship provided here, in the <i>Author</i> model.<br/>
            <i>{"public virtual ICollection<AuthorBook> AuthorsBooks{ get; set; }"}</i><br/>
            You will have to ensure that the constructor in the Author model initializes this first however, like this.<br/>
            <Image src={EF_Relations1} thumbnail/>
            </li>
        </ul>

        </div>
        </div>
        )
    }

export default CS_CSharp;

