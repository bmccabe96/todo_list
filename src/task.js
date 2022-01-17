const task = (title, description, dueDate, project) => {
    let isChecked = false;
    return {
        title, 
        description, 
        dueDate,
        project,
        isChecked
    };
};

export {task};

