import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'; 

function NavBar(){
    return(
        <nav className="navbar-container">
       
        <Link to="/listaProductos"> Lista Productos </Link> 
        <Link to="/registro"> Registro </Link> 
        <Link to="/login"> Login </Link> 



            </nav>
    )
}

export default NavBar;