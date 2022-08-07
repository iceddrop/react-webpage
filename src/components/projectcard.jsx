import React from 'react'
import './projects.css'
export default function Projectcard(props){
    return(
        <div className="card" >
            <img className="card-img-top" src={props.projectInfo.img} ></img>
            <div className="card-body">
                <h5 className="card-title">{props.projectInfo.title}</h5>
                <p className="card-text">{props.projectInfo.description}</p>
                <a href={props.projectInfo.links} className="btn project-btn">Show Project</a>
            </div>
       </div>
    )
}