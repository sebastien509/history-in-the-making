import React from "react" 
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"

function Home(){
    return(
        <>

        <navbar className="navbar" >
        <>
        <Link to="/"  className="navbar-item">
         <a>Home</a> 
        </Link>
        <Link to="/home/create"  className="navbar-item"> <a>Create</a>  </Link>
        <Link to="/home/search"  className="navbar-item"> <a>Search</a>  </Link>
        <Link to="/home/event"  className="navbar-item"> <a>All Events</a>  </Link>   
        <div className="navbar-logo">H</div>
        </>

      </navbar>
      <Outlet/>

    </>
    )
}

export default Home