
import React from 'react'

export const ProjectItem = ({ demo, id, img, project, technologies, url }) => {

    const result = technologies.map((e) => <h4 key={e}>{e}</h4>)
    
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card_front">
                        <img src={img} alt={project} />
                        <h4> {project} </h4>
                    </div>
                    <div className="card_back">
                        <div className="place">
                            <h3>Tecnologías:</h3>
                            <div className="tech">{result}</div>
                        </div>
                        <div className="card_info">
                            <a href={url} target="_blank" rel="noopener noreferrer" >Repo</a>
                            {demo && <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
