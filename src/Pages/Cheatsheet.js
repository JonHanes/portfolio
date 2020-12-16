import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';

//#region Internal Dependencies
import Hero from "../Components/Hero";
import Content from '../Components/Content';
//#endregion

//#region Fragment Components
import CSharpCheatsheet from '../Components/Fragments/CS_CSharp';
import JSCheatsheet from '../Components/Fragments/CS_JS';
import PHPCheatsheet from '../Components/Fragments/CS_PHP';
import MiscCheatsheet from '../Components/Fragments/CS_Misc';
import GitHubCheatsheet from '../Components/Fragments/CS_GitHub';
import ReactCheetsheet from '../Components/Fragments/CS_React';
import BlazorCheatsheet from '../Components/Fragments/CS_Blazor';
//#endregion

class Cheatsheet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cs_visible: true,
            js_visible: true,
            react_visible: true,
            php_visible: true,
            misc_visible: true,
            gh_visible: true,
            bz_visible: true,
            all_visible: true
        };
    }

    handleToggle(filter) {

        //To handle this more optimized, it would be best to use setState and set the value directly according to the filter without the switch statement.
        switch(filter) {
            case "*":
                let toChange = true;
                //TODO: Change logic
                if (this.state.cs_visible) {
                    toChange = false;
                }

                this.setState({
                    cs_visible: toChange,
                    js_visible: toChange,
                    react_visible: toChange,
                    php_visible: toChange,
                    misc_visible: toChange,
                    gh_visible: toChange,
                    bz_visible: toChange,
                    all_visible: toChange
                });

                break;
            case "C#":
                this.setState({cs_visible: !this.state.cs_visible});
                break;
            case "JS":
                this.setState({js_visible: !this.state.js_visible});
                break;
            case "React":
                this.setState({react_visible: !this.state.react_visible});
                break;
            case "PHP":
                this.setState({php_visible: !this.state.php_visible});
                break;
            case "Misc":
                this.setState({misc_visible: !this.state.misc_visible});
                break;
            case "GitHub":
                this.setState({gh_visible: !this.state.gh_visible});
                break;
            case "Blazor":
                this.setState({bz_visible: !this.state.bz_visible});
                break;
            default:
                break;
        }

        
    }    


    
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">Filter</Navbar.Brand>
                            <Nav className="mr-auto">
                                <Button variant="primary" size="lg" className={this.state.all_visible ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("*")}>All</Button>
                                <Button variant="primary" size="lg" className={this.state.cs_visible ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("C#")}>C#</Button>
                                <Button variant="primary" size="lg" className={this.state.js_visible ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("JS")}>JS</Button>
                                <Button variant="primary" size="lg" className={this.state.react_visible ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("React")}>React</Button>
                                <Button variant="primary" size="lg" className={this.state.php_visible ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("PHP")}>PHP</Button>
                                <Button variant="primary" size="lg" className={this.state.misc_visible ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("Misc")}>Misc</Button>
                                <Button variant="primary" size="lg" className={this.state.gh_visible ? "navBarItem" : "navBarItemDeselected"}  onClick={() => this.handleToggle("GitHub")}>GitHub</Button>
                                <Button variant="primary" size="lg" className={this.state.bz_visible ? "navBarItem" : "navBarItemDeselected"}  onClick={() => this.handleToggle("Blazor")}>Blazor</Button>
                        </Nav>   
                </Navbar>
                <Hero title={this.props.title}/>
            
                <Content>
                    <h4 className="explanationText">Very much a work in progress.<br/>Functions to add:<br/>
                    <ul>
                        <li>Collapsible elements [Useful when this grows in scale]</li>
                        <li>Add styling to the divs I am currently using.</li>
                    </ul>
                    </h4>
                    
                    
                    
                    {this.state.cs_visible ? <CSharpCheatsheet/> : ''}
                    {this.state.js_visible ? <JSCheatsheet/> : ''}
                    {this.state.react_visible ? <ReactCheetsheet/> : ''}
                    {this.state.php_visible ? <PHPCheatsheet/> : ''}
                    {this.state.misc_visible ? <MiscCheatsheet/> : ''}
                    {this.state.gh_visible ? <GitHubCheatsheet/> : ''}
                    {this.state.bz_visible ? <BlazorCheatsheet/> : ''}

                </Content>
            </div>
        
        )
    }   
    
}

export default Cheatsheet;