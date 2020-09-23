export const getProjects = async () => {
    const url = 'json/projects.json'

    const resp = await fetch(url)
        .then(resp => resp.json())

    const projects = resp.map(e => {
        return {
            id: e.id,
            project: e.project,
            img: e.img,
            technologies: e.technologies,
            url: e.url,
            demo: e.demo
        }
    })

    return projects;
    
}

