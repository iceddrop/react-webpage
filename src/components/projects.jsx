import React from 'react'
import ProjectData from './projectdata'
import Projectcard from './projectcard'
import './projects.css'

export default function Projects(props){
    const cardElements = ProjectData.map(projectInfo =>{
        return(
            <Projectcard projectInfo ={projectInfo}/>
        )
    })
    return(
         <section id={props.id.projects} className='project-background'>
            <h2 className='project-title-1 text-center'>Projects</h2>
            <p className='project-title-2 text-center'>These are some of the projects i have worked on.</p>
           <div className='card-list'>
           {cardElements}
           </div>
         </section>
    )
}