import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export class NavBar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/Quickit">Quick It</a>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
       
        <li className="nav-item"><Link className="nav-link" to="/business"> business</Link> </li>
        <li className="nav-item"><Link className="nav-link" to="/entertainment"> entertainment</Link> </li>
        
        <li className="nav-item"><Link className="nav-link" to="/health">health</Link> </li>
        <li className="nav-item"><Link className="nav-link" to="/science">science</Link> </li>
        <li className="nav-item"><Link className="nav-link" to="/sports">  sports</Link> </li>
        <li className="nav-item"><Link className="nav-link" to="/technology"> technology</Link> </li>
      </ul>
   
    </div>
  </div>
</nav>  
        
      </div>
    )
  }
}

export default NavBar

