import React from 'react';
import './Task.css';

const Task = ({ task, onToggle, onDelete }) => {
    return (
        <div className={`task ${task.completed ? 'completed' : ''}`}>
            <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
            <span>{task.title}</span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
};

export default Task;
