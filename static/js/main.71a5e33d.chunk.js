(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/CSharpLogo.e7b8fcd4.png"},44:function(e,t,a){e.exports=a.p+"static/media/ApartmentImg.71247c15.png"},45:function(e,t,a){e.exports=a.p+"static/media/UnityLogo.153762cf.png"},46:function(e,t,a){e.exports=a.p+"static/media/SelfImage2.77a85821.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/CPP-PB-JUN2019.de32bece.png"},48:function(e,t,a){e.exports=a.p+"static/media/CS-FUND-SEP2019.e21974f1.png"},49:function(e,t,a){e.exports=a.p+"static/media/CS-ADV-JAN2020.7babf186.png"},50:function(e,t,a){e.exports=a.p+"static/media/CS-OOP-FEB2020.f555f424.png"},54:function(e,t,a){e.exports=a(69)},59:function(e,t,a){},60:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),i=a.n(r),c=(a(59),a(7)),m=a(10),s=a(9),o=a(8),u=(a(60),a(23)),E=a(17),d=(a(61),a(12)),h=a(25),p=a(53),b=a(15),f=a(20);var g=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(d.a,{fluid:!0},l.a.createElement(b.a,{className:"border-top justify-content-between p-3"},l.a.createElement(f.a,{className:"p-0",md:3,sm:12},"Updated April 2020"),l.a.createElement(f.a,{className:"p-0 d-flex justify-content-end",md:3},"This site was made using React and React-Bootstrap"))))},y=a(42),v=a(39);var w=function(e){return l.a.createElement(y.a,{className:"bg-transparent jumbotron-fluid p-0"},l.a.createElement(v.a,null,l.a.createElement("title",null,e.title)),l.a.createElement(d.a,{fluid:!0},l.a.createElement(b.a,{className:"justify-content-center py-5"},l.a.createElement(f.a,{md:8,sm:12},e.title&&l.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h2",{className:"display-4 font-weight-light"},e.subTitle),e.text&&l.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))},I=a(22),C=a(35);var k=function(e){var t=Object(C.b)({opacity:1,from:{opacity:0}});return l.a.createElement(C.a.div,{className:"g-card-info",style:t},l.a.createElement("p",{className:"g-card-title"},e.title),l.a.createElement("p",{className:"g-card-subTitle"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var N=function(e){return l.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(k,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},T=a(43),x=a.n(T),S=a(44),O=a.n(S),j=a(45),P=a.n(j),A=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(I.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return l.a.createElement(N,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"C#",subTitle:"Certified background in C#",imgSrc:x.a,link:"https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",selected:!1},{id:1,title:"3D Design",subTitle:"Experience with building low-poly models in Blender",imgSrc:O.a,link:"https://www.blender.org/",selected:!1},{id:2,title:"Game Development",subTitle:"This is my passion, both Unity and Unreal are something I wish to spend more time with.",imgSrc:P.a,link:"https://unity.com/",selected:!1}]},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(d.a,{fluid:!0},l.a.createElement(b.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(n.Component);var B=function(e){return l.a.createElement("div",null,l.a.createElement(w,{title:e.title,subTitle:e.subTitle}),l.a.createElement("div",{className:"descriptionText"},l.a.createElement("h3",{className:"centeredText"},"I am primarily a C# developer, studying C# at SoftUni in Bulgaria.",l.a.createElement("br",null),"My main interests are game development and creating user interfaces, but I also have an interest in web design.",l.a.createElement("br",null))),l.a.createElement(A,null))};var M=function(e){return l.a.createElement(d.a,{fluid:!0},l.a.createElement(b.a,{className:"justify-content-center"},l.a.createElement(f.a,{md:8},e.children)))};var U=function(e){return l.a.createElement("div",null,l.a.createElement(w,{title:e.title}),l.a.createElement(M,null,l.a.createElement("h3",null,"Who I am"),"I am a programmer who had a late start.",l.a.createElement("br",null),"Around 4 years back I took up studies with Java as part of my IT course in Finland.",l.a.createElement("br",null),"I found myself having a lot of fun with learning how to program, and I began practicing outside of my studies.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null," My experience"),"I have most experience with ",l.a.createElement("b",null,"C#")," as this is the language I have most recently studied and am currently still studying.",l.a.createElement("br",null),"My experience in C# is currently limited to console applications, but I have experience with the ",l.a.createElement("b",null,"C# OOP "),"principles.",l.a.createElement("br",null),"As I have an interest in game development, I find the concept of QA quite interesting and will look into signing up for these courses when possible",l.a.createElement("br",null),l.a.createElement("br",null),"My previous experience in school was with Java, but this has been a while back already.",l.a.createElement("br",null),"I have also studied C++, and hope to continue these studies when I am done with all modules linked to C#.",l.a.createElement("br",null),l.a.createElement("br",null),"I have not yet gotten into web development with C#, but I have previous experience with HTML, CSS, PHP, MySQL, JavaScript, Bootstrap and React.",l.a.createElement("br",null),"As part of my previous studies, I have once made a database and an interface for accessing/editing this information.",l.a.createElement("br",null),"This was put into production use inside the company, and this was my first attempt at making this sort of interface.",l.a.createElement("br",null),"Before this, my knowledge of MySQL was quite limited. ",l.a.createElement("br",null),l.a.createElement("br",null),"As practice, I had also made a phone app for accessing the database, but this was never put into use, as there was no need for this.",l.a.createElement("br",null),"It was a good experience to learn about fetching and displaying data on a C# interface.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Programming and Web Development experience"),l.a.createElement("ul",null,l.a.createElement("li",null,"C#"),l.a.createElement("ul",null,l.a.createElement("li",null,"C# OOP"),l.a.createElement("li",null,"C# QA - TDD & NUnit Testing")),l.a.createElement("li",null,"C++"),l.a.createElement("li",null,"Java"),l.a.createElement("li",null,"HTML"),l.a.createElement("li",null,"CSS"),l.a.createElement("li",null,"PHP"),l.a.createElement("li",null,"MySQL DB"),l.a.createElement("li",null,"JavaScript"),l.a.createElement("li",null,"JSON"),l.a.createElement("li",null,"jQuery ",l.a.createElement("i",null,"- Only when essential")),l.a.createElement("li",null,"React"),l.a.createElement("li",null,"Bootstrap"),l.a.createElement("li",null,"Wordpress ",l.a.createElement("i",null,"- Which I'd rather avoid")),l.a.createElement("li",null,"Visual Studio 2019/VS Code")),l.a.createElement("b",null,"Design / Game Design experience"),l.a.createElement("ul",null,l.a.createElement("li",null,"Blender / Animations in Blender"),l.a.createElement("li",null,"Photoshop"),l.a.createElement("li",null,"Unity"),l.a.createElement("li",null,"Unreal")),l.a.createElement("br",null),l.a.createElement("h3",null,"Studies outside of classes"),"I enrolled in ",l.a.createElement("b",null,"MOOC"),", which is a free course offered by the ",l.a.createElement("b",null,"University of Helsinki's Department of Computer Science."),l.a.createElement("br",null),"This was an amazing experience as the exercises were very clear and the environment was perfect for learning new concepts.",l.a.createElement("br",null),"They used the Test My Code environment, which not only gave you feedback on the input and output, but also gave you pointers on what to look out for.",l.a.createElement("br",null),"Syntax errors were also pointed out, which made a strong base for someone learning proper programming principles. ",l.a.createElement("br",null),l.a.createElement("br",null),"I have worked with Unity in a purely hobbyist capacity, watching tutorials and recreating projects by following along.",l.a.createElement("br",null),"I have a relative amount of familiarity with Unity and how to work with C# scripting and the Unity interface.",l.a.createElement("br",null),"In the near future, I want to make a VR-project in Unity, as I find there's a lot of potential in this.",l.a.createElement("br",null),"Once my C++ studies start up again, I hope to find the time for Unreal Engine as well.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Customer Service Experience"),"Throughout the years, I have amassed a great deal of experience in customer service.",l.a.createElement("br",null),"With the various tasks I have performed, I have learned skills that I can certainly use in many different careers.",l.a.createElement("br",null),"I have worked as a clerk at the supermarket, as a waiter at restaurants and bars, and I have been in charge of security",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Personality"),"My personality is relatively calm and collected, I'm not aggressive.",l.a.createElement("br",null),"I follow orders without complaint, but I'm also not afraid to say my own suggestions and thoughts.",l.a.createElement("br",null),"There are always things you can improve on after all.",l.a.createElement("br",null),"What I may currently lack in years of experience in the programming industry, I more than make up for with an invested interest in learning more.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Future goals"),"I wish to eventually find work in the game development industry.",l.a.createElement("br",null),"However, for now, the most important thing for me to do is work in the IT-industry so that I may learn more along the way.",l.a.createElement("br",null),"I will always take the time to learn more, as there are a lot of things that interest me.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Current Situation"),"I am currently studying C# at Software University, Sofia.",l.a.createElement("br",null),"You can view my current certificates on the ",l.a.createElement("b",null,"Certificates")," page.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Known languages"),l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",null,"Finnish - Native"),l.a.createElement("li",null,"English - Near native"),l.a.createElement("li",null,"Bulgarian - Great"),l.a.createElement("li",null,"Swedish - Good")),l.a.createElement("br",null)))};var W=function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h2",null,"My contact details: "),l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",{className:"greyText"},"Email: ")," ",l.a.createElement("i",null,"Tepia94@gmail.com")),l.a.createElement("li",null,l.a.createElement("span",{className:"greyText"},"Phone: "),l.a.createElement("i",null,"+359 87 744 2260")),l.a.createElement("span",{className:"noticeText"}," [Bulgarian number!]")))},D=a(46),J=a.n(D),H=a(21),L=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",message:"",disabled:!1,emailSent:null},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w,{title:this.props.title}),l.a.createElement(M,null,l.a.createElement("br",null),l.a.createElement("p",null,"Please do not hesitate to reach out to me if you want to learn more!",l.a.createElement("br",null),"If you feel like I would work well with your team/project, please let me know and I will let you know whether I am interested.",l.a.createElement("br",null),"Thank you for your time! "),l.a.createElement(W,null),l.a.createElement("div",{className:"imageWrapper"},l.a.createElement(H.a,{className:"centeredImage",src:J.a,thumbnail:!0}),l.a.createElement("h3",null,"Waiting for your feedback."))))}}]),a}(n.Component),F=a(47),Q=a.n(F),R=a(48),V=a.n(R),G=a(49),_=a.n(G),q=a(50),z=a.n(q);var K=function(){return l.a.createElement("div",null,l.a.createElement("h5",{className:"centeredText"},"Current Average Score: ",l.a.createElement("b",null,"6.00/6.00"),l.a.createElement("br",null),"Best score: ",l.a.createElement("b",null,"6.00"),l.a.createElement("br",null),"Worst score: ",l.a.createElement("b",null,"6.00")),l.a.createElement(d.a,{className:"contentCentering",fluid:!0},l.a.createElement("div",{className:"gallery-imageWrapper"},l.a.createElement(H.a,{className:"gallery-smallImg",src:Q.a,thumbnail:!0}),l.a.createElement("h6",null,"C++ Programming Basics Certificate (6.00/6.00) ",l.a.createElement("br",null),l.a.createElement("i",null,"June 2019"))),l.a.createElement("div",{className:"gallery-imageWrapper"},l.a.createElement(H.a,{className:"gallery-smallImg",src:V.a,thumbnail:!0}),l.a.createElement("h6",null,"C# Fundamentals Certificate (6.00/6.00) ",l.a.createElement("br",null),l.a.createElement("i",null,"September 2019"))),l.a.createElement("div",{className:"gallery-imageWrapper"},l.a.createElement(H.a,{className:"gallery-smallImg",src:_.a,thumbnail:!0}),l.a.createElement("h6",null,"C# Advanced Certificate (6.00/6.00) ",l.a.createElement("br",null),l.a.createElement("i",null,"January 2020"))),l.a.createElement("div",{className:"gallery-imageWrapper"},l.a.createElement(H.a,{className:"gallery-smallImg",src:z.a,thumbnail:!0}),l.a.createElement("h6",null,"C# OOP Certificate (6.00/6.00) ",l.a.createElement("br",null),l.a.createElement("i",null,"February 2020"))),l.a.createElement("br",null),l.a.createElement("p",{className:"boldTextWithTopMargin"},"...and more to come as I'm still studying...")))};var Y=function(e){return l.a.createElement("div",null,l.a.createElement(w,{title:e.title,subTitle:e.subTitle}),l.a.createElement(K,null))},X=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={title:"Portfolio - Teppo Almgren",headerLinks:[{title:"Home",path:"/"},{title:"Home",path:"/portfolio"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"},{title:"Certificates",path:"/certificates"}],home:{title:"Portfolio - Home",subTitle:"Who I am",text:"Short summary"},about:{title:"Portfolio - About Me"},contact:{title:"Portfolio - Contact Me"},certificates:{title:"Portfolio - Certificates",subTitle:"Certificates I have earned"}},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"p-0",fluid:!0},l.a.createElement(h.a,{className:"border-bottom",bg:"transparent",expand:"lg"},l.a.createElement(h.a.Brand,null," Teppo Almgren "),l.a.createElement(h.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(h.a.Collapse,{id:"navbar-toggle"},l.a.createElement(p.a,{className:"ml-auto"},l.a.createElement(u.b,{className:"nav-link",to:"/"}," Home "),l.a.createElement(u.b,{className:"nav-link",to:"/about"}," About "),l.a.createElement(u.b,{className:"nav-link",to:"/contact"}," Contact "),l.a.createElement(u.b,{className:"nav-link",to:"/certificates"}," Certificates ")))),l.a.createElement(E.a,{path:"/",exact:!0,render:function(){return l.a.createElement(B,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(E.a,{path:"/portfolio",exact:!0,render:function(){return l.a.createElement(B,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(E.a,{path:"/about",render:function(){return l.a.createElement(U,{title:e.state.about.title})}}),l.a.createElement(E.a,{path:"/contact",render:function(){return l.a.createElement(L,{title:e.state.contact.title})}}),l.a.createElement(E.a,{path:"/certificates",render:function(){return l.a.createElement(Y,{title:e.state.certificates.title,subTitle:e.state.certificates.subTitle})}}),l.a.createElement(g,null)))}}]),a}(n.Component);a(68);i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(X,null)),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.71a5e33d.chunk.js.map