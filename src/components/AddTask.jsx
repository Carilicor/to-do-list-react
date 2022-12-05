import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function AddTask() {
  const navigate = useNavigate()
  const [category, setCategory] = useState()
  const [dueDate, setDueDate] = useState()
  const [task, setTask] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!task || !dueDate || !category) {
      alert('Please enter all fields!')
      return
    }
    const newTask = { category, dueDate, task }
    // fetch('https://to-do-list-cgl.web.app/tasks', {
    fetch('http://127.0.0.1:5002/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask)
    })
      .then(() => {
      navigate('/')
      })
      .catch(alert)
  }

  return (
    <section className= 'add-task'>
      <h3>Add New Task</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ToDoList"> Category
        <input type="test" name="category" required
          onChange={e => setCategory(e.target.value)}
          value={category} />
        </label><br />
        <label htmlFor="ToDoList"> Due Date:
        <input type="date" name="dueDate" required
        onChange={e => setDueDate(e.target.value)}
        value={dueDate} />
        </label><br />
        <label htmlFor="ToDoList">Task:
        <input type="text" name="task"
        onChange={e => setTask(e.target.value)}
          value={task} />
        </label><br />
        <input type="submit" value="Add Task" />
      </form>
    </section>
  )

}
