import React from 'react'
import { NavLink } from 'react-router-dom'

export default function RankBar(props) {
    
    const mystyle={
        "color" : "#fff"
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top " style={{ backgroundColor : "#00390c", borderColor : "fff"}}>
  < div className="container-fluid">
        <img src="https://www.freepnglogos.com/uploads/pok-mon-go-logo-png-30.png	" alt ="logo" height="auto" width="5%"/>
    
        
        <a className="navbar-brand mx-4" href="https://www.pokemon.com/us/" style={mystyle} >Pokemon</a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"> 
        
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link active" aria-current="page" style={mystyle}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to= "/types" className="nav-link active" aria-current="page" style={mystyle}>Types</NavLink>
        </li>
        {/* <Outlet/> */}
        
      </ul>
      <form className="d-flex" role="search">
        <input onChange={props.handleSearch} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick ={ props.clickSearch} className="btn btn-outline-danger" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
