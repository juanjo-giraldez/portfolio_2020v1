import React from 'react';
import { useProjects } from '../hooks/useProjects';
import { ProjectItem } from './ProjectItem';

export const Gallery = () => {

     const project = useProjects()

    return (
        <div>
            <h1>Estos   son mis proyectos</h1>
           <div className="card-grid">
               { project.map( (e) => 
               ( < ProjectItem key={e.id} {...e}/> ))}
           </div>
        </div>
    )
}
