const task = (title, description, dueDate, project="default") => {
    return {
        title, 
        description, 
        dueDate,
        project
    };
};

export {task};

