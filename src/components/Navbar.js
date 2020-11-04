import React from 'react';
import { Component } from 'react';
import Contact from './Contact.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './Index.js';
import About from './About.js';
import Project from './Project.js';

const BASE_URL = '/'

class Navbar extends Component {

  render() {
    return (



<Router basename={BASE_URL} >
<nav className="navbar navbar-expand-lg  navbar-light bg-light fixed-top">

       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon" />
       </button>
        <Link  to='/'> <p className="font-weight-bolder d-block d-md-none  my-auto"><span className="text-dark">Jules</span><span className="text-primary">Clear</span></p></Link>
       <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
         <ul className="navbar-nav  mt-2 mt-lg-0 ">
           <li className="nav-item active d-none d-md-block">
             <Link  to='/' className="nav-link ml-md-5" style={{fontWeight: 'bold'}} >Jules<span className="text-primary">Clear</span></Link>
           </li>
         </ul>
         <div className="mx-auto">
           <ul className="navbar-nav  mt-2 mt-lg-0 ">
             <li className="nav-item">
               <Link to='/about' className="nav-link">À propos</Link>
             </li>
             <li className="nav-item  ml-md-5 mr-md-5">
               <Link to='/project' className="nav-link">Projets</Link>
             </li>
           </ul>
         </div>
         <Link to='/contact'><button type="button" className="btn btn-primary mr-md-5">Contact</button></Link>

       </div>

     </nav>

      <Route path="/" exact component={Index} />
     <Route path="/contact" component={Contact} />
     <Route path="/about" component={About} />
     <Route path="/project" component={Project} />

</Router>

   );
 }
};

export default Navbar;
