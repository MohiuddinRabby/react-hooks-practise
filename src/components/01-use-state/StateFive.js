import React, { useState } from 'react';

const StateFive = () => {
    const [todo, setTodo] = useState([
        { task: 'go to market' },
        { task: 'clean house' },
        { task: 'walk the dog' }
    ]);
    const [task, setTask] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task) return;//no task to add . no list will b added
        const newTask = [...todo, {
            task: task
        }];
        // console.log(newTask)
        setTodo(newTask);
        setTask('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter task name"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                />
                <br /><br />
                <button>Add Task</button>
                <br />
                <br />
            </form>
            {
                todo.map(item => <li>{item.task}</li>)
            }
        </div>
    );
};

export default StateFive;