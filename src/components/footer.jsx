import React from 'react'
import { FaLinkedinIn, FaTwitter, FaFacebook } from 'react-icons/fa';
import './footer.css'
import { IconContext } from "react-icons";
export default function Footer(props){
    return(
        <footer id={props.id.contact} className='footer-section row'>
            <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
               <p className='footer-paragraph'>Thanks for checking my portfolio. I'm currently open to work.</p>
            </div>
            <div  className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                <h4>Contact Me</h4>
                <IconContext.Provider value={{ className: "global-class-name" }}>
                <div className='socials d-flex'>
                   <FaLinkedinIn />
                   <FaTwitter />
                   <FaFacebook/>
                </div>
                </IconContext.Provider>
                <a href="mailto:Umeadiobinna2@gmail.com" className='gmail'>Umeadiobinna2@gamil.com</a>
            </div>
        </footer>
    )
}