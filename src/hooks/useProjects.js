
import { useEffect, useState } from 'react';
import { getProjects } from '../service/getProjects';

export const useProjects = () => {

    const [project, setProject] = useState({ data: []});
    
    useEffect(() => {
        getProjects()
        .then( e => {
            setProject({ data: e })
        })
    }, [])
    
    // useEffect(() => {
        //     fetch("json/projects.json")// http://127.0.0.1:5500/public/json/projects.json
        //     .then( resp => resp.json())
        //     .then( item => {
            //         setProject({ data: item })
            //     })
            // }, [])
            
            return project
        
        }
        
       
