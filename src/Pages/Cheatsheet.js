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
        };
    }

    handleToggle(filter) {

        switch(filter) {
            case "C#":
                this.state.cs_visible ? this.setState({cs_visible: false}) : this.setState({cs_visible: true});
                break;
            case "JS":
                this.state.js_visible ? this.setState({js_visible: false}) : this.setState({js_visible: true});
                break;
            case "React":
                this.state.react_visible ? this.setState({react_visible: false}) : this.setState({react_visible: true});
                break;
            case "PHP":
                this.state.php_visible ? this.setState({php_visible: false}) : this.setState({php_visible: true});
                break;
            case "Misc":
                this.state.misc_visible ? this.setState({misc_visible: false}) : this.setState({misc_visible: true});
                break;
            case "GitHub":
                this.state.gh_visible ? this.setState({gh_visible: false}) : this.setState({gh_visible: true});
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
                                <Button variant="primary" size="lg" className={this.state.cs_visible ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("C#")}>C#</Button>
                                <Button variant="primary" size="lg" className={this.state.js_visible ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("JS")}>JS</Button>
                                <Button variant="primary" size="lg" className={this.state.react_visible ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("React")}>React</Button>
                                <Button variant="primary" size="lg" className={this.state.php_visible ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("PHP")}>PHP</Button>
                                <Button variant="primary" size="lg" className={this.state.misc_visible ? "navBarItem" : "navBarItemDeselected"} onClick={() => this.handleToggle("Misc")}>Misc</Button>
                                <Button variant="primary" size="lg" className={this.state.gh_visible ? "navBarItem" : "navBarItemDeselected"}  onClick={() => this.handleToggle("GitHub")}>GitHub</Button>
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
    
                </Content>
            </div>
        
        )
    }   
    
}

export default Cheatsheet;