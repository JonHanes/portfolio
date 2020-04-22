import React, {Component} from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//#region Bootstrap Dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//#endregion

//#region Internal Dependencies
import Footer from "./Components/Footer";

import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";

import CertificatesPage from "./Pages/CertificatesPage";
//#endregion

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Portfolio - Teppo Almgren",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Home', path: '/portfolio' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
        { title: 'Certificates', path: '/certificates' }
      ],

      home: {
        title: 'Portfolio - Home',
        subTitle: 'Who I am',
        text: 'Short summary'
      },

      about: {
        title: 'Portfolio - About Me',
      },

      contact: {
        title: 'Portfolio - Contact Me',
      },

      certificates: {
        title: 'Portfolio - Certificates',
        subTitle: 'Certificates I have earned'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand> Teppo Almgren </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/portfolio"> Home </Link>
                <Link className="nav-link" to="/about"> About </Link>
                <Link className="nav-link" to="/contact"> Contact </Link>
                <Link className="nav-link" to="/certificates"> Certificates </Link>          
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/*#region Routing Logic*/}
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
          <Route path="/portfolio" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />}/>
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title}/>}/>
          <Route path="/certificates" render={() => <CertificatesPage title={this.state.certificates.title} subTitle={this.state.certificates.subTitle}/>}/>
          {/*//#endregion */}

        <Footer />
        </Container>

      </Router>
    );
  }
}

export default App;
