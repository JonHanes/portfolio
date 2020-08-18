import React from 'react';

//#region Internal Dependencies
import Hero from '../Components/Hero';
import Content from '../Components/Content';
//#endregion

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title}/>

            <Content>
            <h3>Who I am</h3>
            I am primarily a C#/.NET developer who had a late start.<br/>
            Around 4 years back I took up studies with Java as part of my IT course in Finland.<br/>
            I found myself having a lot of fun with learning how to program, and I began practicing outside of my studies.<br/><br/>

            <h3> My experience</h3>
            I have most experience with <b>C#</b> as this is the language I have most recently studied and am currently still studying.<br/>
            My experience in C# is currently limited to console applications, but I have experience with the <b>C# OOP </b>principles.<br/>
            As I have an interest in game development, I find the concept of QA quite interesting and will look into signing up for these courses when possible<br/><br/>

            My previous experience in school was with Java, but this has been a while back already.<br/>
            I have also studied C++, and hope to continue these studies when I am done with all modules linked to C#.<br/>

            <br/>
            I have not yet gotten into web development with C#, but I have previous experience with HTML, CSS, PHP, MySQL, JavaScript, Bootstrap and React.<br/>
            As part of my previous studies, I have once made a database and an interface for accessing/editing this information.<br/>
            This was put into production use inside the company, and this was my first attempt at making this sort of interface.<br/>
            Before this, my knowledge of MySQL was quite limited. <br/><br/>

            As practice, I had also made a phone app for accessing the database, but this was never put into use, as there was no need for this.<br/>
            It was a good experience to learn about fetching and displaying data on a C# interface.<br/>
            <br/>

            <b>Programming and Web Development experience</b>
            <ul>
                <li>C#</li>
                    <ul>
                        <li>C# OOP</li>
                        <li>C# QA - TDD & NUnit Testing</li>
                        <li>ADO.NET</li>
                        <li>Entity Framework</li>
                    </ul>
                <li>C++</li>
                <li>Java</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>PHP</li>
                <li>Laravel</li>
                <li>MySQL DB</li>
                <li>MS SQL DB</li>
                <li>JavaScript</li>
                <li>JSON</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Bootstrap</li>
                <li>Wordpress </li>
                <li>Visual Studio 2019/VS Code</li>
            </ul>

            <b>Design / Game Design experience</b>
            <ul>
               <li>Blender / Animations in Blender</li>
               <li>Photoshop</li>
               <li>Unity</li>
               <li>Unreal</li>
            </ul>

            <br/>
            <h3>Studies outside of classes</h3>
            I enrolled in <b>MOOC</b>, which is a free course offered by the <b>University of Helsinki's Department of Computer Science.</b><br/>
            This was an amazing experience as the exercises were very clear and the environment was perfect for learning new concepts.<br/>
            They used the Test My Code environment, which not only gave you feedback on the input and output, but also gave you pointers on what to look out for.<br/>
            Syntax errors were also pointed out, which made a strong base for someone learning proper programming principles. <br/><br/>

            I have worked with Unity in a purely hobbyist capacity, watching tutorials and recreating projects by following along.<br/>
            I have a relative amount of familiarity with Unity and how to work with C# scripting and the Unity interface.<br/>
            In the near future, I want to make a VR-project in Unity, as I find there's a lot of potential in this.<br/>
            Once my C++ studies start up again, I hope to find the time for Unreal Engine as well.<br/><br/>

            I briefly checked out Ruby, the syntax seems reasonable and I'm all for the idea of creating modules for better organization.<br/>
            Currently trying to orient myself to learn Laravel, as well as learn more about Node.js and Express.js.
            <br/><br/>

            <h3>Customer Service Experience</h3>
            Throughout the years, I have amassed a great deal of experience in customer service.<br/>
            With the various tasks I have performed, I have learned skills that I can certainly use in many different careers.<br/>
            I have worked as a clerk at the supermarket, as a waiter at restaurants and bars, and I have been in charge of security<br/><br/>
            
            <h3>Personality</h3>
            My personality is relatively calm and collected, I'm not aggressive.<br/>
            I follow orders without complaint, but I'm also not afraid to say my own suggestions and thoughts.<br/>
            There are always things you can improve on after all.<br/>
            What I may currently lack in years of experience in the programming industry, I more than make up for with an invested interest in learning more.<br/>

            <br/>

            <h3>Future goals</h3>
            I wish to eventually find work in the game development industry.<br/>
            However, for now, the most important thing for me to do is work in the IT-industry so that I may learn more along the way.<br/>
            I will always take the time to learn more, as there are a lot of things that interest me.<br/><br/>

            Recently I have started taking additional courses on online sites, as I wish to learn more about Blender, Unity, Unreal Engine and C#/C++.<br/>
            Not to mention it would be beneficial to have certificates that show that I have the relevant experience.<br/>
            <br/>

            <h3>Current Situation</h3>
            I am currently studying C# at Software University, Sofia.<br/>
            At the moment, my studies are centered around JS Advanced, as this is a necessary part of the C# Web Developer studies.<br/>
            You can view my current certificates on the <b>Certificates</b> page.
            
            <br/><br/>
            <h3>Known languages</h3><br/>

            <ul>
               <li>Finnish - Native</li>
               <li>English - Near native</li>
               <li>Bulgarian - Good</li>
               <li>Swedish - A2 Level [<i style={{fontSize: "0.85em"}}>This used to be better but I have not practiced in a long time.</i>]</li>
               
            </ul>

            <br/>
            
            </Content>
        </div>
    )
}

export default AboutPage;