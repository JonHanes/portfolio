(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/CSharpLogo.e7b8fcd4.png"},44:function(e,t,a){e.exports=a.p+"static/media/ApartmentImg.9385b3cf.png"},45:function(e,t,a){e.exports=a.p+"static/media/UnityLogo.153762cf.png"},46:function(e,t,a){e.exports=a.p+"static/media/SelfImage2.77a85821.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/CPP-PB-JUN2019.de32bece.png"},48:function(e,t,a){e.exports=a.p+"static/media/CS-FUND-SEP2019.e21974f1.png"},49:function(e,t,a){e.exports=a.p+"static/media/CS-ADV-JAN2020.7babf186.png"},50:function(e,t,a){e.exports=a.p+"static/media/CS-OOP-FEB2020.f555f424.png"},51:function(e,t,a){e.exports=a.p+"static/media/Zenva_BuildMicro-VRGame.8f8b79fb.PNG"},52:function(e,t,a){e.exports=a.p+"static/media/Zenva_IntroToAR.eccb9d6b.PNG"},53:function(e,t,a){e.exports=a.p+"static/media/Udemy_Unity_2D_Course.d6600f38.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/CS-DB-MSSQL-MAY2020.afd8c431.png"},58:function(e,t,a){e.exports=a(73)},63:function(e,t,a){},64:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(27),i=a.n(r),c=(a(63),a(6)),m=a(10),s=a(9),o=a(8),u=(a(64),a(23)),E=a(18),d=(a(65),a(12)),h=a(25),p=a(57),b=a(16),f=a(21);var g=function(){return n.a.createElement("footer",{className:"mt-5"},n.a.createElement(d.a,{fluid:!0},n.a.createElement(b.a,{className:"border-top justify-content-between p-3"},n.a.createElement(f.a,{className:"p-0",md:3,sm:12},"Updated April 2020"),n.a.createElement(f.a,{className:"p-0 d-flex justify-content-end",md:3},"This site was made using React and React-Bootstrap"))))},y=a(42),v=a(39);var w=function(e){return n.a.createElement(y.a,{className:"bg-transparent jumbotron-fluid p-0"},n.a.createElement(v.a,null,n.a.createElement("title",null,e.title)),n.a.createElement(d.a,{fluid:!0},n.a.createElement(b.a,{className:"justify-content-center py-5"},n.a.createElement(f.a,{md:8,sm:12},e.title&&n.a.createElement("h2",{className:"display-2 font-weight-bolder"},e.title),e.subTitle&&n.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&n.a.createElement("h4",{className:"lead font-weight-light"},e.text)))))},I=a(22),C=a(35);var k=function(e){var t=Object(C.b)({opacity:1,from:{opacity:0}});return n.a.createElement(C.a.div,{className:"g-card-info",style:t},n.a.createElement("p",{className:"g-card-title"},e.title),n.a.createElement("p",{className:"g-card-subTitle"},e.subTitle),n.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var N=function(e){return n.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},n.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&n.a.createElement(k,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},T=a(43),x=a.n(T),S=a(44),O=a.n(S),j=a(45),A=a.n(j),M=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).handleCardClick=function(e,t){var a=Object(I.a)(l.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),l.setState({items:a})},l.makeItems=function(e){return e.map((function(e){return n.a.createElement(N,{item:e,click:function(t){return l.handleCardClick(e.id,t)},key:e.id})}))},l.state={items:[{id:0,title:"C#",subTitle:"Certified background in C#",imgSrc:x.a,link:"https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",selected:!1},{id:1,title:"3D Design",subTitle:"Experience with building low-poly models in Blender",imgSrc:O.a,link:"https://www.blender.org/",selected:!1},{id:2,title:"Game Development",subTitle:"This is my passion, both Unity and Unreal are something I wish to spend more time with.",imgSrc:A.a,link:"https://unity.com/",selected:!1}]},l}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(d.a,{fluid:!0},n.a.createElement(b.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(l.Component);var P=function(e){return n.a.createElement("div",null,n.a.createElement(w,{title:e.title,subTitle:e.subTitle}),n.a.createElement("div",{className:"descriptionText"},n.a.createElement("h3",{className:"centeredText"},"I am primarily a C#/.NET developer, studying C# at SoftUni in Bulgaria.",n.a.createElement("br",null),"My main interests are game development and creating user interfaces, but I also have an interest in web design.",n.a.createElement("br",null),"I find working with backend development quite fun too.")),n.a.createElement(M,null))};var B=function(e){return n.a.createElement(d.a,{fluid:!0},n.a.createElement(b.a,{className:"justify-content-center"},n.a.createElement(f.a,{md:8},e.children)))};var U=function(e){return n.a.createElement("div",null,n.a.createElement(w,{title:e.title}),n.a.createElement(B,null,n.a.createElement("h3",null,"Who I am"),"I am primarily a C#/.NET developer who had a late start.",n.a.createElement("br",null),"Around 4 years back I took up studies with Java as part of my IT course in Finland.",n.a.createElement("br",null),"I found myself having a lot of fun with learning how to program, and I began practicing outside of my studies.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h3",null," My experience"),"I have most experience with ",n.a.createElement("b",null,"C#")," as this is the language I have most recently studied and am currently still studying.",n.a.createElement("br",null),"My experience in C# is currently limited to console applications, but I have experience with the ",n.a.createElement("b",null,"C# OOP "),"principles.",n.a.createElement("br",null),"As I have an interest in game development, I find the concept of QA quite interesting and will look into signing up for these courses when possible",n.a.createElement("br",null),n.a.createElement("br",null),"My previous experience in school was with Java, but this has been a while back already.",n.a.createElement("br",null),"I have also studied C++, and hope to continue these studies when I am done with all modules linked to C#.",n.a.createElement("br",null),n.a.createElement("br",null),"I have not yet gotten into web development with C#, but I have previous experience with HTML, CSS, PHP, MySQL, JavaScript, Bootstrap and React.",n.a.createElement("br",null),"As part of my previous studies, I have once made a database and an interface for accessing/editing this information.",n.a.createElement("br",null),"This was put into production use inside the company, and this was my first attempt at making this sort of interface.",n.a.createElement("br",null),"Before this, my knowledge of MySQL was quite limited. ",n.a.createElement("br",null),n.a.createElement("br",null),"As practice, I had also made a phone app for accessing the database, but this was never put into use, as there was no need for this.",n.a.createElement("br",null),"It was a good experience to learn about fetching and displaying data on a C# interface.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("b",null,"Programming and Web Development experience"),n.a.createElement("ul",null,n.a.createElement("li",null,"C#"),n.a.createElement("ul",null,n.a.createElement("li",null,"C# OOP"),n.a.createElement("li",null,"C# QA - TDD & NUnit Testing"),n.a.createElement("li",null,"ADO.NET"),n.a.createElement("li",null,"Entity Framework")),n.a.createElement("li",null,"C++"),n.a.createElement("li",null,"Java"),n.a.createElement("li",null,"HTML"),n.a.createElement("li",null,"CSS"),n.a.createElement("li",null,"PHP"),n.a.createElement("li",null,"MySQL DB"),n.a.createElement("li",null,"MS SQL DB"),n.a.createElement("li",null,"JavaScript"),n.a.createElement("li",null,"JSON"),n.a.createElement("li",null,"jQuery"),n.a.createElement("li",null,"React"),n.a.createElement("li",null,"Bootstrap"),n.a.createElement("li",null,"Wordpress "),n.a.createElement("li",null,"Visual Studio 2019/VS Code")),n.a.createElement("b",null,"Design / Game Design experience"),n.a.createElement("ul",null,n.a.createElement("li",null,"Blender / Animations in Blender"),n.a.createElement("li",null,"Photoshop"),n.a.createElement("li",null,"Unity"),n.a.createElement("li",null,"Unreal")),n.a.createElement("br",null),n.a.createElement("h3",null,"Studies outside of classes"),"I enrolled in ",n.a.createElement("b",null,"MOOC"),", which is a free course offered by the ",n.a.createElement("b",null,"University of Helsinki's Department of Computer Science."),n.a.createElement("br",null),"This was an amazing experience as the exercises were very clear and the environment was perfect for learning new concepts.",n.a.createElement("br",null),"They used the Test My Code environment, which not only gave you feedback on the input and output, but also gave you pointers on what to look out for.",n.a.createElement("br",null),"Syntax errors were also pointed out, which made a strong base for someone learning proper programming principles. ",n.a.createElement("br",null),n.a.createElement("br",null),"I have worked with Unity in a purely hobbyist capacity, watching tutorials and recreating projects by following along.",n.a.createElement("br",null),"I have a relative amount of familiarity with Unity and how to work with C# scripting and the Unity interface.",n.a.createElement("br",null),"In the near future, I want to make a VR-project in Unity, as I find there's a lot of potential in this.",n.a.createElement("br",null),"Once my C++ studies start up again, I hope to find the time for Unreal Engine as well.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h3",null,"Customer Service Experience"),"Throughout the years, I have amassed a great deal of experience in customer service.",n.a.createElement("br",null),"With the various tasks I have performed, I have learned skills that I can certainly use in many different careers.",n.a.createElement("br",null),"I have worked as a clerk at the supermarket, as a waiter at restaurants and bars, and I have been in charge of security",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h3",null,"Personality"),"My personality is relatively calm and collected, I'm not aggressive.",n.a.createElement("br",null),"I follow orders without complaint, but I'm also not afraid to say my own suggestions and thoughts.",n.a.createElement("br",null),"There are always things you can improve on after all.",n.a.createElement("br",null),"What I may currently lack in years of experience in the programming industry, I more than make up for with an invested interest in learning more.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h3",null,"Future goals"),"I wish to eventually find work in the game development industry.",n.a.createElement("br",null),"However, for now, the most important thing for me to do is work in the IT-industry so that I may learn more along the way.",n.a.createElement("br",null),"I will always take the time to learn more, as there are a lot of things that interest me.",n.a.createElement("br",null),n.a.createElement("br",null),"Recently I have started taking additional courses on online sites, as I wish to learn more about Blender, Unity, Unreal Engine and C#/C++.",n.a.createElement("br",null),"Not to mention it would be beneficial to have certificates that show that I have the relevant experience.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h3",null,"Current Situation"),"I am currently studying C# at Software University, Sofia.",n.a.createElement("br",null),"At the moment, my studies are centered around the Entity Framework.",n.a.createElement("br",null),"You can view my current certificates on the ",n.a.createElement("b",null,"Certificates")," page.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h3",null,"Known languages"),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("li",null,"Finnish - Native"),n.a.createElement("li",null,"English - Near native"),n.a.createElement("li",null,"Bulgarian - Good"),n.a.createElement("li",null,"Swedish - A2 Level [",n.a.createElement("i",{style:{fontSize:"0.85em"}},"This used to be better but I have not practiced in a long time."),"]")),n.a.createElement("br",null)))};var D=function(){return n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement("h2",null,"My contact details: "),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("span",{className:"greyText"},"Email: ")," ",n.a.createElement("i",null,"Tepia94@gmail.com")),n.a.createElement("li",null,n.a.createElement("span",{className:"greyText"},"Phone: "),n.a.createElement("i",null,"+359 87 744 2260")),n.a.createElement("span",{className:"noticeText"}," [Bulgarian number!]")))},W=a(46),J=a.n(W),L=a(14),H=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).state={name:"",email:"",message:"",disabled:!1,emailSent:null},l}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(w,{title:this.props.title}),n.a.createElement(B,null,n.a.createElement("br",null),n.a.createElement("p",null,"Please do not hesitate to reach out to me if you want to learn more!",n.a.createElement("br",null),"If you feel like I would work well with your team/project, please let me know.",n.a.createElement("br",null),"Thank you for your time! "),n.a.createElement(D,null),n.a.createElement("div",{className:"imageWrapper"},n.a.createElement(L.a,{className:"centeredImage",src:J.a,thumbnail:!0}),n.a.createElement("h5",null,"Waiting for your feedback."))))}}]),a}(l.Component),R=a(47),F=a.n(R),Q=a(48),_=a.n(Q),G=a(49),V=a.n(G),Z=a(50),q=a.n(Z),z=a(51),Y=a.n(z),K=a(52),X=a.n(K),$=a(53),ee=a.n($),te=a(54),ae=a.n(te),le=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h5",{className:"centeredText"},"Current Average Score: ",n.a.createElement("b",null,"6.00/6.00"),n.a.createElement("br",null)),n.a.createElement(d.a,{className:"contentCentering",fluid:!0},n.a.createElement("div",{className:"gallery-imageWrapper"},n.a.createElement(L.a,{className:"gallery-smallImg",src:F.a,thumbnail:!0}),n.a.createElement("h6",null,"C++ Programming Basics Certificate (6.00/6.00) ",n.a.createElement("br",null),n.a.createElement("i",null,"June 2019"))),n.a.createElement("div",{className:"gallery-imageWrapper"},n.a.createElement(L.a,{className:"gallery-smallImg",src:_.a,thumbnail:!0}),n.a.createElement("h6",null,"C# Fundamentals Certificate (6.00/6.00) ",n.a.createElement("br",null),n.a.createElement("i",null,"September 2019"))),n.a.createElement("div",{className:"gallery-imageWrapper"},n.a.createElement(L.a,{className:"gallery-smallImg",src:V.a,thumbnail:!0}),n.a.createElement("h6",null,"C# Advanced Certificate (6.00/6.00) ",n.a.createElement("br",null),n.a.createElement("i",null,"January 2020"))),n.a.createElement("div",{className:"gallery-imageWrapper"},n.a.createElement(L.a,{className:"gallery-smallImg",src:q.a,thumbnail:!0}),n.a.createElement("h6",null,"C# OOP Certificate (6.00/6.00) ",n.a.createElement("br",null),n.a.createElement("i",null,"February 2020"))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"gallery-imageWrapper"},n.a.createElement(L.a,{className:"gallery-smallImg",src:ae.a,thumbnail:!0}),n.a.createElement("h6",null,"Databases Basics - Microsoft SQL Server (6.00/6.00)",n.a.createElement("br",null),n.a.createElement("i",null,"May 2020"))),n.a.createElement("div",{className:"gallery-imageWrapper"},n.a.createElement(L.a,{className:"gallery-smallImg",src:Y.a,thumbnail:!0}),n.a.createElement("h6",null,"Zenva - Build a Micro-VR Game",n.a.createElement("br",null),n.a.createElement("i",null,"April 2020"))),n.a.createElement("div",{className:"gallery-imageWrapper"},n.a.createElement(L.a,{className:"gallery-smallImg",src:X.a,thumbnail:!0}),n.a.createElement("h6",null,"Zenva - Intro to Augmented Reality",n.a.createElement("br",null),n.a.createElement("i",null,"April 2020"))),n.a.createElement("div",{className:"gallery-imageWrapper"},n.a.createElement(L.a,{className:"gallery-smallImg",src:ee.a,thumbnail:!0}),n.a.createElement("h6",null,"Complete C# Unity Developer 2D",n.a.createElement("br",null),n.a.createElement("i",null,"May 2020"))),n.a.createElement("br",null),n.a.createElement("p",{className:"boldTextWithTopMargin"},"...and more to come as I'm still studying...")))}}]),a}(l.Component);var ne=function(e){return n.a.createElement("div",null,n.a.createElement(w,{title:e.title,subTitle:e.subTitle}),n.a.createElement(le,null))},re=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).state={title:"Portfolio - Teppo Almgren",headerLinks:[{title:"Home",path:"/"},{title:"Home",path:"/portfolio"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"},{title:"Certificates",path:"/certificates"}],home:{title:"Portfolio - Home",subTitle:"Who I am",text:"Short summary"},about:{title:"Portfolio - About Me"},contact:{title:"Portfolio - Contact Me"},certificates:{title:"Portfolio - Certificates",subTitle:"Certificates I have earned"}},l}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(u.a,null,n.a.createElement(d.a,{className:"p-0",fluid:!0},n.a.createElement(h.a,{className:"border-bottom",bg:"transparent",expand:"lg"},n.a.createElement(h.a.Brand,null," Teppo Almgren "),n.a.createElement(h.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),n.a.createElement(h.a.Collapse,{id:"navbar-toggle"},n.a.createElement(p.a,{className:"ml-auto"},n.a.createElement(u.b,{className:"nav-link",to:"/portfolio"}," Home "),n.a.createElement(u.b,{className:"nav-link",to:"/about"}," About "),n.a.createElement(u.b,{className:"nav-link",to:"/contact"}," Contact "),n.a.createElement(u.b,{className:"nav-link",to:"/certificates"}," Certificates ")))),n.a.createElement(E.a,{path:"/",exact:!0,render:function(){return n.a.createElement(P,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),n.a.createElement(E.a,{path:"/portfolio",exact:!0,render:function(){return n.a.createElement(P,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),n.a.createElement(E.a,{path:"/about",render:function(){return n.a.createElement(U,{title:e.state.about.title})}}),n.a.createElement(E.a,{path:"/contact",render:function(){return n.a.createElement(H,{title:e.state.contact.title})}}),n.a.createElement(E.a,{path:"/certificates",render:function(){return n.a.createElement(ne,{title:e.state.certificates.title,subTitle:e.state.certificates.subTitle})}}),n.a.createElement(g,null)))}}]),a}(l.Component);a(72);i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(re,null)),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.bbed48eb.chunk.js.map