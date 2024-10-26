import React, { useState } from 'react';
import useTaskManager from '../hooks/useTaskManager';
import TaskList from '../components/TaskList';

const Home = () => {
    const { tasks, addTask, deleteTask, toggleTask } = useTaskManager();
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim()) {
            addTask(newTask);
            setNewTask('');
        }
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter a new task"
            />
            <button onClick={handleAddTask}>Add Task</button>
            <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        </div>
    );
};

export default Home;
