import React from 'react'
import './navbar.css'
import { FaBars } from 'react-icons/fa';

export default function Navbar(props){
    return(
        <nav className="navbar fixed-top navbar-expand-md navbar-bg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">OB</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                   <FaBars className="hamburger"/>
                </button>
                <div className="collapse navbar-collapse nav-list" id="navbarNavDropdown">
                    <ul className="navbar-nav ">
                        <li  className="nav-item">
                          <a className="nav-link active" aria-current="page" href={'#' + props.id.home}>Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href={'#' + props.id.about}>About Me</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href={'#' + props.id.projects}>Projects</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href={'#' + props.id.reviews}>Reviews</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href={'#' + props.id.contact}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
      </nav>
    )
}