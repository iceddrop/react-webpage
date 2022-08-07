import React from 'react'
import './About.css'
export default function About(props){
    return(
        <section id={props.id.about} className='about-background'>
               <h2 className='about-title'>About Me</h2>
                <div className='about row'>
                    <div className='col-lg-6 col-xl-6'>
                        <div className='div-1'>
                            <h4 className='title-2'>Peep into me</h4>
                            <p className='about-paragraph-1'>I'm an SEO expert with a decade of success creating SEO campaigns for small and medium-sized businesses.</p>
                            <p className='about-paragraph-2'>As an SEO pro, I understand the nuts and bolts of SEO.
                                I'm passionate about my skill, competent and motivated to deliver professionally and i'm energetic to start right away.</p>
                            <a className='contact-btn' href={'#' + props.id.contact}>Contact me</a>
                        </div>
                    </div>
                   <div className='col-lg-6 col-xl-6'>
                   <div className='div-2'>
                         <h4 className='title-2'>My Skillset</h4>
                         <div className='skill-grid'>
                            <span class="badge  p-2">Content SEO</span>
                            <span class="badge  p-2">SEO Competitor Analysis</span>
                            <span class="badge p-2">Technical SEO</span>
                            <span class="badge  p-2">On-Page SEO</span>
                            <span class="badge  p-2">Off-Page SEO</span>
                            <span class="badge  p-2">SEO Backlinking</span>
                            <span class="badge  p-2">SEO Keyword Research</span>
                            <span class="badge  p-2">Ecommerce SEO</span>
                            <span class="badge  p-2">SEO Localization</span>
                            <span class="badge  p-2">SEO setup and configuration</span>
                            <span class="badge p-2">SEO penalty removal</span>
                            <span class="badge  p-2"> Local SEO</span>
                            <span class="badge  p-2">WordPress SEO Plugins</span>
                            <span class="badge  p-2">Shopify SEO</span>
                            <span class="badge p-2">SEO performance</span>
                            <span class="badge  p-2">SEO-based website and SEO strategy</span>
                         </div>
                    </div>
                   </div>

                </div>
        </section>    
    )
}