
import React from 'react'

export const ProjectItem = ({ demo, id, img, project, technologies, url}) => {
    return (
        <div className="card">
            <img src={img} alt={project} />
            <h4> {project} </h4>
            <div className="card_info">
            <a href={url} target="_blank" rel="noopener noreferrer" >Repo</a>
            {demo && <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>}
            </div>
        </div>
    )
}
