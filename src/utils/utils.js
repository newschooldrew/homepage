export const addItem = (selectedProjects, projectToAdd) =>{

        return selectedProjects.map(project => project == projectToAdd ? {...project, projectToAdd} : project)
}

export const deleteItem = (selectedProjects, projectToDelete) => {
        if(selectedProjects.length == 1) return []
        return selectedProjects.filter(project =>  project !== projectToDelete)
    }