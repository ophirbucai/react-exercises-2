import React, { useState, useCallback } from 'react';
import './Todo.css';
import Task from './Task/Task'

function Todo() {
	const [task, setTask] = useState("");
	const [tasks, setTasks] = useState([]);

	const removeTask = useCallback(id => {
		setTasks(tasks.filter((task, i) => i !== id))
	});

	const onSubmit = e => {
		e.preventDefault();
		if (!task.trim().length) {
			return;
		}
		setTasks([...tasks, task]);
		setTask("")
		e.target.children[0].focus();
	}
	return (
		<div className="Todo">
			<h3>Todo List:</h3>
			<p>Make a Todo list (add & delete options):</p>
			<form onSubmit={onSubmit}>
				<input placeholder="Your task..." onChange={e => setTask(e.target.value)} value={task} /> <button>Add task</button>
			</form>
			<ul>
				{tasks.map((task, i) => <Task key={i} id={i} value={task} removeTask={removeTask} />)}
			</ul>
		</div>
	)
}

export default Todo;
