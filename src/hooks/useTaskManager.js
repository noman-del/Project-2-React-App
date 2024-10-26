import { useState } from 'react';

const useTaskManager = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (title) => {
        const newTask = { id: Date.now(), title, completed: false };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return { tasks, addTask, deleteTask, toggleTask };
};

export default useTaskManager;
