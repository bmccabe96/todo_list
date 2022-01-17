
const leftNav = () => {
    let projects = [];

    const getProject = (project) => {
        for (let i=0; i<projects.length; i++) {
            if (projects[i] === project) {
                return projects[i];
            }
        }
    };

    const getProjectByString = (projectString) => {
        for (let i=0; i<projects.length; i++) {
            if (projects[i].projectName === projectString) {
                return projects[i];
            }
        }
    };

    const getProjects = () => {
        return projects;
    };

    const addProject = (project) => {
        projects.push(project);
    };

    const removeProject = (project) => {
        projects = projects.filter(function(obj) {
            return obj !== project;
        });
    };

    return {
        getProject, getProjects, addProject, 
        getProjectByString, removeProject
    };
};

export {leftNav};