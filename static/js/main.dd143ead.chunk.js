(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],Array(43).concat([function(e,t,a){e.exports=a.p+"static/media/CSharpLogo.e7b8fcd4.png"},function(e,t,a){e.exports=a.p+"static/media/ApartmentImg.9385b3cf.png"},function(e,t,a){e.exports=a.p+"static/media/UnityLogo.153762cf.png"},function(e,t,a){e.exports=a.p+"static/media/SelfImage2.77a85821.jpg"},function(e,t,a){e.exports=a.p+"static/media/VSProjectFiles.ce8373ed.jpg"},function(e,t,a){e.exports=a.p+"static/media/PackageManager.98aaf6c4.jpg"},function(e,t,a){e.exports=a.p+"static/media/PowershellPrompt.82ae60b6.jpg"},function(e,t,a){e.exports=a.p+"static/media/VS_Version_CS.056983c4.PNG"},function(e,t,a){e.exports=a.p+"static/media/VS_Version_CS2.09a7a31c.PNG"},function(e,t,a){e.exports=a.p+"static/media/XML_DTO.6bd5ef7d.PNG"},function(e,t,a){e.exports=a.p+"static/media/XML_HelperEX1.3b459a2f.PNG"},function(e,t,a){e.exports=a.p+"static/media/XML_HelperEX2.a7e8fe57.PNG"},function(e,t,a){e.exports=a.p+"static/media/XML_HelperEX3.b239eade.PNG"},function(e,t,a){e.exports=a.p+"static/media/JS_Interpolation.b505bd38.PNG"},function(e,t,a){e.exports=a.p+"static/media/JS_Express_BP.d0790fef.PNG"},function(e,t,a){e.exports=a.p+"static/media/CPP-PB-JUN2019.de32bece.png"},function(e,t,a){e.exports=a.p+"static/media/CS-FUND-SEP2019.e21974f1.png"},function(e,t,a){e.exports=a.p+"static/media/CS-ADV-JAN2020.7babf186.png"},function(e,t,a){e.exports=a.p+"static/media/CS-OOP-FEB2020.f555f424.png"},function(e,t,a){e.exports=a.p+"static/media/CS-DB-MSSQL-MAY2020.afd8c431.png"},function(e,t,a){e.exports=a.p+"static/media/Zenva_BuildMicro-VRGame.8f8b79fb.PNG"},function(e,t,a){e.exports=a.p+"static/media/Zenva_IntroToAR.eccb9d6b.PNG"},function(e,t,a){e.exports=a.p+"static/media/Zenva_Node.js&Express_BGN.07b542fa.PNG"},function(e,t,a){e.exports=a.p+"static/media/Udemy_Unity_2D_Course.d6600f38.jpg"},,,,function(e,t,a){e.exports=a(85)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(27),i=a.n(r),c=(a(75),a(7)),m=a(11),o=a(10),s=a(9),u=(a(76),a(23)),E=a(18),h=(a(77),a(13)),d=a(25),p=a(69),b=a(16),f=a(21);var g=function(){return n.a.createElement("footer",{className:"mt-5"},n.a.createElement(h.a,{fluid:!0},n.a.createElement(b.a,{className:"border-top justify-content-between p-3"},n.a.createElement(f.a,{className:"p-0",md:3,sm:12},"Updated April 2020"),n.a.createElement(f.a,{className:"p-0 d-flex justify-content-end",md:3},"This site was made using React and React-Bootstrap"))))},y=a(42),v=a(39);var w=function(e){return n.a.createElement(y.a,{className:"bg-transparent jumbotron-fluid p-0"},n.a.createElement(v.a,null,n.a.createElement("title",null,e.title)),n.a.createElement(h.a,{fluid:!0},n.a.createElement(b.a,{className:"justify-content-center py-5"},n.a.createElement(f.a,{md:8,sm:12},e.title&&n.a.createElement("h2",{className:"display-2 font-weight-bolder"},e.title),e.subTitle&&n.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&n.a.createElement("h4",{className:"lead font-weight-light"},e.text)))))},N=a(22),k=a(35);var C=function(e){var t=Object(k.b)({opacity:1,from:{opacity:0}});return n.a.createElement(k.a.div,{className:"g-card-info",style:t},n.a.createElement("p",{className:"g-card-title"},e.title),n.a.createElement("p",{className:"g-card-subTitle"},e.subTitle),n.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var x=function(e){return n.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},n.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&n.a.createElement(C,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},I=a(43),T=a.n(I),S=a(44),j=a.n(S),P=a(45),M=a.n(P),O=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).handleCardClick=function(e,t){var a=Object(N.a)(l.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),l.setState({items:a})},l.makeItems=function(e){return e.map((function(e){return n.a.createElement(x,{item:e,click:function(t){return l.handleCardClick(e.id,t)},key:e.id})}))},l.state={items:[{id:0,title:"C#",subTitle:"Certified background in C#",imgSrc:T.a,link:"https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",selected:!1},{id:1,title:"3D Design",subTitle:"Experience with building low-poly models in Blender",imgSrc:j.a,link:"https://www.blender.org/",selected:!1},{id:2,title:"Game Development",subTitle:"This is my passion, both Unity and Unreal are something I wish to spend more time with.",imgSrc:M.a,link:"https://unity.com/",selected:!1}]},l}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(h.a,{fluid:!0},n.a.createElement(b.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(l.Component);var A=function(e){return n.a.createElement("div",null,n.a.createElement(w,{title:e.title,subTitle:e.subTitle}),n.a.createElement("div",{className:"descriptionText"},n.a.createElement("h3",{className:"centeredText"},"I am primarily a C#/.NET developer, studying C# at SoftUni in Bulgaria.",n.a.createElement("br",null),"My main interests are game development and creating user interfaces, but I also have an interest in web design.",n.a.createElement("br",null),"I find working with backend development quite fun too.")),n.a.createElement(O,null))};var D=function(e){return n.a.createElement(h.a,{fluid:!0},n.a.createElement(b.a,{className:"justify-content-center"},n.a.createElement(f.a,{md:8},e.children)))};var U=function(e){return n.a.createElement("div",null,n.a.createElement(w,{title:e.title}),n.a.createElement(D,null,n.a.createElement("h3",null,"Who I am"),"I am primarily a C#/.NET developer who had a late start.",n.a.createElement("br",null),"Around 4 years back I took up studies with Java as part of my IT course in Finland.",n.a.createElement("br",null),"I found myself having a lot of fun with learning how to program, and I began practicing outside of my studies.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h3",null," My experience"),"I have most experience with ",n.a.createElement("b",null,"C#")," as this is the language I have most recently studied and am currently still studying.",n.a.createElement("br",null),"My experience in C# is currently limited to console applications, but I have experience with the ",n.a.createElement("b",null,"C# OOP "),"principles.",n.a.createElement("br",null),"As I have an interest in game development, I find the concept of QA quite interesting and will look into signing up for these courses when possible",n.a.createElement("br",null),n.a.createElement("br",null),"My previous experience in school was with Java, but this has been a while back already.",n.a.createElement("br",null),"I have also studied C++, and hope to continue these studies when I am done with all modules linked to C#.",n.a.createElement("br",null),n.a.createElement("br",null),"I have not yet gotten into web development with C#, but I have previous experience with HTML, CSS, PHP, MySQL, JavaScript, Bootstrap and React.",n.a.createElement("br",null),"As part of my previous studies, I have once made a database and an interface for accessing/editing this information.",n.a.createElement("br",null),"This was put into production use inside the company, and this was my first attempt at making this sort of interface.",n.a.createElement("br",null),"Before this, my knowledge of MySQL was quite limited. ",n.a.createElement("br",null),n.a.createElement("br",null),"As practice, I had also made a phone app for accessing the database, but this was never put into use, as there was no need for this.",n.a.createElement("br",null),"It was a good experience to learn about fetching and displaying data on a C# interface.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("b",null,"Programming and Web Development experience"),n.a.createElement("ul",null,n.a.createElement("li",null,"C#"),n.a.createElement("ul",null,n.a.createElement("li",null,"C# OOP"),n.a.createElement("li",null,"C# QA - TDD & NUnit Testing"),n.a.createElement("li",null,"ADO.NET"),n.a.createElement("li",null,"Entity Framework")),n.a.createElement("li",null,"C++"),n.a.createElement("li",null,"Java"),n.a.createElement("li",null,"HTML"),n.a.createElement("li",null,"CSS"),n.a.createElement("li",null,"PHP"),n.a.createElement("li",null,"MySQL DB"),n.a.createElement("li",null,"MS SQL DB"),n.a.createElement("li",null,"JavaScript"),n.a.createElement("li",null,"JSON"),n.a.createElement("li",null,"jQuery"),n.a.createElement("li",null,"React"),n.a.createElement("li",null,"Bootstrap"),n.a.createElement("li",null,"Wordpress "),n.a.createElement("li",null,"Visual Studio 2019/VS Code")),n.a.createElement("b",null,"Design / Game Design experience"),n.a.createElement("ul",null,n.a.createElement("li",null,"Blender / Animations in Blender"),n.a.createElement("li",null,"Photoshop"),n.a.createElement("li",null,"Unity"),n.a.createElement("li",null,"Unreal")),n.a.createElement("br",null),n.a.createElement("h3",null,"Studies outside of classes"),"I enrolled in ",n.a.createElement("b",null,"MOOC"),", which is a free course offered by the ",n.a.createElement("b",null,"University of Helsinki's Department of Computer Science."),n.a.createElement("br",null),"This was an amazing experience as the exercises were very clear and the environment was perfect for learning new concepts.",n.a.createElement("br",null),"They used the Test My Code environment, which not only gave you feedback on the input and output, but also gave you pointers on what to look out for.",n.a.createElement("br",null),"Syntax errors were also pointed out, which made a strong base for someone learning proper programming principles. ",n.a.createElement("br",null),n.a.createElement("br",null),"I have worked with Unity in a purely hobbyist capacity, watching tutorials and recreating projects by following along.",n.a.createElement("br",null),"I have a relative amount of familiarity with Unity and how to work with C# scripting and the Unity interface.",n.a.createElement("br",null),"In the near future, I want to make a VR-project in Unity, as I find there's a lot of potential in this.",n.a.createElement("br",null),"Once my C++ studies start up again, I hope to find the time for Unreal Engine as well.",n.a.createElement("br",null),n.a.createElement("br",null),"I briefly checked out Ruby, the syntax seems reasonable and I'm all for the idea of creating modules for better organization.",n.a.createElement("br",null),"Currently trying to orient myself to learn Laravel, as well as learn more about Node.js and Express.js.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h3",null,"Customer Service Experience"),"Throughout the years, I have amassed a great deal of experience in customer service.",n.a.createElement("br",null),"With the various tasks I have performed, I have learned skills that I can certainly use in many different careers.",n.a.createElement("br",null),"I have worked as a clerk at the supermarket, as a waiter at restaurants and bars, and I have been in charge of security",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h3",null,"Personality"),"My personality is relatively calm and collected, I'm not aggressive.",n.a.createElement("br",null),"I follow orders without complaint, but I'm also not afraid to say my own suggestions and thoughts.",n.a.createElement("br",null),"There are always things you can improve on after all.",n.a.createElement("br",null),"What I may currently lack in years of experience in the programming industry, I more than make up for with an invested interest in learning more.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h3",null,"Future goals"),"I wish to eventually find work in the game development industry.",n.a.createElement("br",null),"However, for now, the most important thing for me to do is work in the IT-industry so that I may learn more along the way.",n.a.createElement("br",null),"I will always take the time to learn more, as there are a lot of things that interest me.",n.a.createElement("br",null),n.a.createElement("br",null),"Recently I have started taking additional courses on online sites, as I wish to learn more about Blender, Unity, Unreal Engine and C#/C++.",n.a.createElement("br",null),"Not to mention it would be beneficial to have certificates that show that I have the relevant experience.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h3",null,"Current Situation"),"I am currently studying C# at Software University, Sofia.",n.a.createElement("br",null),"At the moment, my studies are centered around the Entity Framework.",n.a.createElement("br",null),"You can view my current certificates on the ",n.a.createElement("b",null,"Certificates")," page.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h3",null,"Known languages"),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("li",null,"Finnish - Native"),n.a.createElement("li",null,"English - Near native"),n.a.createElement("li",null,"Bulgarian - Good"),n.a.createElement("li",null,"Swedish - A2 Level [",n.a.createElement("i",{style:{fontSize:"0.85em"}},"This used to be better but I have not practiced in a long time."),"]")),n.a.createElement("br",null)))};var L=function(){return n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement("h2",null,"My contact details: "),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("span",{className:"greyText"},"Email: ")," ",n.a.createElement("i",null,"Tepia94@gmail.com")),n.a.createElement("li",null,n.a.createElement("span",{className:"greyText"},"Phone: "),n.a.createElement("i",null,"+359 87 744 2260")),n.a.createElement("span",{className:"noticeText"}," [Bulgarian number!]")))},B=a(46),F=a.n(B),X=a(6),_=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).state={name:"",email:"",message:"",disabled:!1,emailSent:null},l}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(w,{title:this.props.title}),n.a.createElement(D,null,n.a.createElement("br",null),n.a.createElement("p",null,"Please do not hesitate to reach out to me if you want to learn more!",n.a.createElement("br",null),"If you feel like I would work well with your team/project, please let me know.",n.a.createElement("br",null),"Thank you for your time! "),n.a.createElement(L,null),n.a.createElement("div",{className:"imageWrapper"},n.a.createElement(X.a,{className:"centeredImage",src:F.a,thumbnail:!0}),n.a.createElement("h5",null,"Waiting for your feedback."))))}}]),a}(l.Component),G=a(47),H=a.n(G),J=a(48),W=a.n(J),R=a(49),V=a.n(R),Q=a(50),q=a.n(Q),Y=a(51),Z=a.n(Y),z=a(52),K=a.n(z),$=a(53),ee=a.n($),te=a(54),ae=a.n(te),le=a(55),ne=a.n(le),re=a(56),ie=a.n(re),ce=a(57),me=a.n(ce);var oe=function(e){return n.a.createElement("div",null,n.a.createElement(w,{title:e.title}),n.a.createElement(D,null,n.a.createElement("h4",{className:"explanationText"},"Very much a work in progress.",n.a.createElement("br",null),"Functions to add:",n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("li",null,"Collapsible elements [Useful when this grows in scale]"),n.a.createElement("li",null,"Add styling to the divs I am currently using, at the very least add a bottom margin so that they are further apart from each other.",n.a.createElement("br",null),"Currently this effect is achieved using only whitespaces."),n.a.createElement("li",null,"A navbar that is fixed to either side."))),n.a.createElement("h4",null,"C#/.NET"),n.a.createElement("br",null),n.a.createElement("h4",{className:"subTitle"},"General"),n.a.createElement("div",null,n.a.createElement("h5",null,"Visual Studio - Update C# Version"),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("li",null," Find the main project file, .csproj."),n.a.createElement(X.a,{src:q.a,thumbnail:!0}),n.a.createElement("li",null,"Add the following changes, it should look something like this..."),n.a.createElement(X.a,{src:Z.a,thumbnail:!0}),n.a.createElement("li",null,"Change the version according to the needs of your project.")),n.a.createElement("h5",null,"XML Conversions using a DTO."),n.a.createElement("ul",null,n.a.createElement("li",null,'You can use [XmlType("',n.a.createElement("i",null,"product"),'")] before the class declaration so that the class ',n.a.createElement("i",null,"Product")," can be mapped to the XML element, ",n.a.createElement("i",null,"product"),"."),n.a.createElement("li",null,'As for properties, you can use [XmlElement("',n.a.createElement("i",null,"name"),'")] to tie the ',n.a.createElement("i",null,"Name")," property inside the class."),n.a.createElement(X.a,{src:K.a,thumbnail:!0}),n.a.createElement("li",null,n.a.createElement("i",null,"Example provided"))),n.a.createElement("h5",null,"XML Helper"),n.a.createElement("ul",null,n.a.createElement("li",null,"XML helper can be downloaded from ",n.a.createElement("a",{href:"https://github.com/StoyanShopov/XmlFacade/blob/master/XmlFacade/XmlFacade/XmlConverter.cs"},"here"))),n.a.createElement("h6",null,"[XML Helper] - ",n.a.createElement("b",null,"Importing")," data using a DTO"),n.a.createElement("ul",null,n.a.createElement("li",null,"Usage example:"),n.a.createElement(X.a,{src:ee.a,thumbnail:!0}),n.a.createElement("li",null,"It takes in the two parameters, the string which was read from a file, and then the root element's name."),n.a.createElement("li",null,"For example a library would be the root element of a collection of books."),n.a.createElement("li",null,"This is the first element in the XML file, the one which the other components are children of.")),n.a.createElement("h6",null,"[XML Helper] - ",n.a.createElement("b",null,"Exporting")," data using a DTO"),n.a.createElement("ul",null,n.a.createElement("li",null,"Usage example:"),n.a.createElement(X.a,{src:ae.a,thumbnail:!0}),n.a.createElement("li",null,"Using LINQ you can limit the amount of data to be passed."),n.a.createElement("li",null,'After this, much like before, you use the Serialize function and pass on the root element name ["Products" here].')),n.a.createElement("h6",null,"[XML Helper] - Handling XML arrays"),n.a.createElement("ul",null,n.a.createElement(X.a,{src:ne.a,thumbnail:!0}),n.a.createElement("li",null,"Pictured here."))),n.a.createElement("div",null,n.a.createElement("h4",{className:"subTitle"},"EF Core"),n.a.createElement("br",null),n.a.createElement("h5",null,"Database Creation"),n.a.createElement("br",null),n.a.createElement("b",null,"Code-First"),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("li",null,"Note: You will need to install some Microsoft packages to initialize the migrations. ",n.a.createElement("br",null),"[For example Microsoft.EntityFrameworkCore.SqlServer & Microsoft.EntityFrameworkCore.Design]"),n.a.createElement("li",null,"Create the appropriate classes in your IDE."),n.a.createElement(X.a,{src:H.a,thumbnail:!0}),n.a.createElement("li",null,"Use the package manager console to perform the next operations.",n.a.createElement("br",null),"You can find the package manager with the search function."),n.a.createElement(X.a,{src:W.a,thumbnail:!0}),n.a.createElement("li",null,"Run the following command.",n.a.createElement("br",null),n.a.createElement("i",null,"Add-Migration [MigrationName]")),n.a.createElement("li",null,"To run these changes if they succeeded, run the following.",n.a.createElement("br",null),n.a.createElement("i",null,"Update-Database")),n.a.createElement("li",null,"You might receive errors here, but the console should point out what needs to be changed.",n.a.createElement("br",null),"A typical issue might relate to delete behaviour, as the database might not know how to perform when deleting entities.",n.a.createElement("br",null),"You can use .OnDelete(DeleteBehaviour.Restrict) to deal with this in the model builder.")),n.a.createElement("b",null,"Database-First"),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("li",null,"To begin, use Shift+Right click to get the ",n.a.createElement("b",null,"Open PowerShell window here")," option when in your source folder."),n.a.createElement(X.a,{src:V.a,thumbnail:!0}),n.a.createElement("li",null,"Use the following command",n.a.createElement("br",null),n.a.createElement("i",null,'dotnet ef dbcontext scaffold "Server=[ServerName];Database=[DBName];Integrated Security=true;" Microsoft.EntityFrameworkCore.SqlServer -o Models')),n.a.createElement("li",null,"The previous command works if this is the local server (and using the default credentials), and the provider is as mentioned"),n.a.createElement("li",null,"The other parts of this command specify where the models should be created (a subfolder)"))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h4",{className:"subTitle"},"JavaScript"),n.a.createElement("div",null,n.a.createElement("h5",null,"JavaScript - String interpolation"),n.a.createElement("ul",null,n.a.createElement("li",null,"This can be achieved by wrapping the string in ` quotations [Template literals]."),n.a.createElement("li",null,"Example usage:"),n.a.createElement(X.a,{src:ie.a,thumbnail:!0}),n.a.createElement("li",null,"More information can be found ",n.a.createElement("a",{href:"https://dmitripavlutin.com/string-interpolation-in-javascript/"},"here"))),n.a.createElement("br",null),n.a.createElement("h5",null,"JavaScript - package.json file"),n.a.createElement("ul",null,n.a.createElement("li",null,"Extremely convenient file containing metadata related to the application."),n.a.createElement("li",null,"Easy way to track dependencies between libraries.")),n.a.createElement("br",null),n.a.createElement("h5",null,"Node.js"),n.a.createElement("h6",null,"Express.js"),n.a.createElement("ul",null,n.a.createElement("li",null,"Express is a very handy framework for Node.js"),n.a.createElement("li",null,"It simplifies API calls and error handling."),n.a.createElement("li",null,"Used together with ",n.a.createElement("a",{href:"https://www.npmjs.com/package/body-parser"},"body-parser")," you can directly input a JSON body for your API calls."),n.a.createElement("li",null,"Usage example: "),n.a.createElement("li",null,n.a.createElement("i",null,"const app = express();"))),n.a.createElement("h6",null,"Body-Parser - Setup"),n.a.createElement("ul",null,n.a.createElement("li",null,"To use body parser, you first have to use something like this."),n.a.createElement("li",null,n.a.createElement("i",null,"const bodyParser = require('body-parser');")),n.a.createElement("li",null,"After this, ensure that your express connection is using the body-parser to handle the requests."),n.a.createElement(X.a,{src:me.a,thumbnail:!0})),n.a.createElement("h6",null,"Dotenv"),n.a.createElement("ul",null,n.a.createElement("li",null,"Dotenv allows you to set up your own environment values without having to pass them into the package.json file."),n.a.createElement("li",null,"Make sure you have included this into your project ",n.a.createElement("i",null,"require('dotenv').config();")),n.a.createElement("li",null,"Once you have it set up, all you have to do is add an .env file into your solution and input the data like this, for example.",n.a.createElement("br",null),n.a.createElement("i",null,"PORT=3000",n.a.createElement("br",null),"TEST=test")),n.a.createElement("li",null,"The best practice with Dotenv is to keep only environment values that are not sensitive here.",n.a.createElement("br",null),"If sensitive data needs to be input here, it is best to send your clients a sample .env file that they need to fill in with their own information."))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h4",{className:"subTitle"},"Misc"),n.a.createElement("br",null),n.a.createElement("h4",{className:"subTitle"},"Useful commands"),n.a.createElement("ul",null,n.a.createElement("li",null,"Some of these are likely self-explanatory...")),n.a.createElement("div",null,n.a.createElement("h5",null,"Command Line"),n.a.createElement("h6",null,"Command Line - Check Node.js version ",n.a.createElement("b",null,"[node -v]")),n.a.createElement("br",null)),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("h4",{className:"subTitle"},"GitHub"),n.a.createElement("br",null),n.a.createElement("h5",null,"Git commands"),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("b",null,"git add .")," - Adds all files to be deployed"),n.a.createElement("li",null,n.a.createElement("b",null,'git commit -m "',n.a.createElement("i",null,"Text explaining the changes"),'"')," - Create a commit to the repository"),n.a.createElement("li",null,n.a.createElement("b",null,"npm run deploy")," - Deploy the files you have been working on to the repository"),n.a.createElement("li",null,n.a.createElement("b",null,"git push -u origin master")," - Push the changes to the master repository")))))},se=a(58),ue=a.n(se),Ee=a(59),he=a.n(Ee),de=a(60),pe=a.n(de),be=a(61),fe=a.n(be),ge=a(62),ye=a.n(ge),ve=a(63),we=a.n(ve),Ne=a(64),ke=a.n(Ne),Ce=a(65),xe=a.n(Ce),Ie=a(66),Te=a.n(Ie),Se=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h5",{className:"centeredText"},"Current Average Score: ",n.a.createElement("b",null,"6.00/6.00"),n.a.createElement("br",null)),n.a.createElement(h.a,{className:"contentCentering",fluid:!0},n.a.createElement("div",{className:"gallery-imageWrapper"},n.a.createElement(X.a,{className:"gallery-smallImg",src:ue.a,thumbnail:!0}),n.a.createElement("h6",null,"C++ Programming Basics Certificate (6.00/6.00) ",n.a.createElement("br",null),n.a.createElement("i",null,"June 2019"))),n.a.createElement("div",{className:"gallery-imageWrapper"},n.a.createElement(X.a,{className:"gallery-smallImg",src:he.a,thumbnail:!0}),n.a.createElement("h6",null,"C# Fundamentals Certificate (6.00/6.00) ",n.a.createElement("br",null),n.a.createElement("i",null,"September 2019"))),n.a.createElement("div",{className:"gallery-imageWrapper"},n.a.createElement(X.a,{className:"gallery-smallImg",src:pe.a,thumbnail:!0}),n.a.createElement("h6",null,"C# Advanced Certificate (6.00/6.00) ",n.a.createElement("br",null),n.a.createElement("i",null,"January 2020"))),n.a.createElement("div",{className:"gallery-imageWrapper"},n.a.createElement(X.a,{className:"gallery-smallImg",src:fe.a,thumbnail:!0}),n.a.createElement("h6",null,"C# OOP Certificate (6.00/6.00) ",n.a.createElement("br",null),n.a.createElement("i",null,"February 2020"))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"gallery-imageWrapper"},n.a.createElement(X.a,{className:"gallery-smallImg",src:ye.a,thumbnail:!0}),n.a.createElement("h6",null,"Databases Basics - Microsoft SQL Server (6.00/6.00)",n.a.createElement("br",null),n.a.createElement("i",null,"May 2020"))),n.a.createElement("div",{className:"gallery-imageWrapper"},n.a.createElement(X.a,{className:"gallery-smallImg",src:we.a,thumbnail:!0}),n.a.createElement("h6",null,"Zenva - Build a Micro-VR Game",n.a.createElement("br",null),n.a.createElement("i",null,"April 2020"))),n.a.createElement("div",{className:"gallery-imageWrapper"},n.a.createElement(X.a,{className:"gallery-smallImg",src:ke.a,thumbnail:!0}),n.a.createElement("h6",null,"Zenva - Intro to Augmented Reality",n.a.createElement("br",null),n.a.createElement("i",null,"April 2020"))),n.a.createElement("div",{className:"gallery-imageWrapper"},n.a.createElement(X.a,{className:"gallery-smallImg",src:xe.a,thumbnail:!0}),n.a.createElement("h6",null,"Zenva - Node.js and Express for Beginners",n.a.createElement("br",null),n.a.createElement("i",null,"July 2020"))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"gallery-imageWrapper"},n.a.createElement(X.a,{className:"gallery-smallImg",src:Te.a,thumbnail:!0}),n.a.createElement("h6",null,"Complete C# Unity Developer 2D",n.a.createElement("br",null),n.a.createElement("i",null,"May 2020"))),n.a.createElement("br",null),n.a.createElement("p",{className:"boldTextWithTopMargin"},"...and more to come as I'm still studying...")))}}]),a}(l.Component);var je=function(e){return n.a.createElement("div",null,n.a.createElement(w,{title:e.title,subTitle:e.subTitle}),n.a.createElement(Se,null))},Pe=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).state={title:"Portfolio - Teppo Almgren",headerLinks:[{title:"Home",path:"/"},{title:"Home",path:"/portfolio"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"},{title:"Certificates",path:"/certificates"}],home:{title:"Portfolio - Home",subTitle:"Who I am",text:"Short summary"},about:{title:"Portfolio - About Me"},contact:{title:"Portfolio - Contact Me"},certificates:{title:"Portfolio - Certificates",subTitle:"Certificates I have earned"},cheatsheet:{title:"Portfolio - Cheatsheet"}},l}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(u.a,null,n.a.createElement(h.a,{className:"p-0",fluid:!0},n.a.createElement(d.a,{className:"border-bottom",bg:"transparent",expand:"lg"},n.a.createElement(d.a.Brand,null," Teppo Almgren "),n.a.createElement(d.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),n.a.createElement(d.a.Collapse,{id:"navbar-toggle"},n.a.createElement(p.a,{className:"ml-auto"},n.a.createElement(u.b,{className:"nav-link",to:"/portfolio"}," Home "),n.a.createElement(u.b,{className:"nav-link",to:"/about"}," About "),n.a.createElement(u.b,{className:"nav-link",to:"/contact"}," Contact "),n.a.createElement(u.b,{className:"nav-link",to:"/certificates"}," Certificates "),n.a.createElement(u.b,{className:"nav-link",to:"/cheatsheet"}," Cheatsheet ")))),n.a.createElement(E.a,{path:"/",exact:!0,render:function(){return n.a.createElement(A,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),n.a.createElement(E.a,{path:"/portfolio",exact:!0,render:function(){return n.a.createElement(A,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),n.a.createElement(E.a,{path:"/about",render:function(){return n.a.createElement(U,{title:e.state.about.title})}}),n.a.createElement(E.a,{path:"/contact",render:function(){return n.a.createElement(_,{title:e.state.contact.title})}}),n.a.createElement(E.a,{path:"/certificates",render:function(){return n.a.createElement(je,{title:e.state.certificates.title,subTitle:e.state.certificates.subTitle})}}),n.a.createElement(E.a,{path:"/cheatsheet",render:function(){return n.a.createElement(oe,{title:e.state.cheatsheet.title})}}),n.a.createElement(g,null)))}}]),a}(l.Component);a(84);i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Pe,null)),document.getElementById("root"))}]),[[70,1,2]]]);
//# sourceMappingURL=main.dd143ead.chunk.js.map