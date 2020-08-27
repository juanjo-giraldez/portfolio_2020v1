import { useEffect, useState } from 'react';

export const useProjects = () => {

    const [project, setProject] = useState([]);
    
    useEffect(() => {
        fetch("json/projects.json")
        .then( resp => resp.json())
        .then( data => {
            setProject(data)
        })
    }, [])

    return project
}
