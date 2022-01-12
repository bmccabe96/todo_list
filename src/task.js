const task = (title, description, dueDate, priority="medium", project="default") => {
    return {
        title, 
        description, 
        dueDate,
        priority,
        project
    };
};



export {task};

