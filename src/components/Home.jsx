import React from 'react'
import './Home.css'
import seoexpert from '../assets/Metrics-bro.png'

import { useEffect, useRef } from 'react'


export default function Home(props){

    return(
        <section id={props.id.home} className='home-background'>
           <div className="introduction">
              <h5 className="intro-text-1">Hello Friend! I'm</h5>
              <h1 className='intro-text-2'>Obinna</h1>
              <h1 className='intro-text-2'>Umeadi,</h1>
              <p className="intro-paragraph">a prolific SEO strategist focused on On-page SEO, Off-page SEO, Technical SEO, Local SEO, Content writing and Content strategy.</p>
              <div className='intro-buttons'>
                <a className='btn-1' href={'#' + props.id.projects}>See My Work</a>
                  <a className='btn-2' href='https://resume.io/r/4QdyR4P2M'>View Resume</a>
              </div> 
           </div>
           <img className="image-1 d-none d-lg-block d-xl-block" src={seoexpert} alt="seo-expert-animation"/> 
        </section>    
    )
}