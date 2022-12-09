import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { List, Button } from 'antd'
import ListCard from './ListCard.jsx'
import "../App.css"
import { useNavigate } from 'react-router-dom'




export default function TodoList() {
    const [tasks, setTasks] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://to-do-list-cgl.web.app/tasks')

            .then(res => res.json())
            .then(data => {
                setTasks(data)
            })
            .catch(alert)
    }, [])

    if (!tasks) {
        return <h1>Loading...</h1>
    }

    const meList = tasks?.filter(item => item.category?.toLowerCase() === "me")
    const monsterList = tasks?.filter(item => item.category?.toLowerCase() === "my monsters")
    const homeList = tasks?.filter(item => item.category?.toLowerCase() === "home")


    return (
        <main className='todo-list'>
            <div className="listItemsContainer">
                <List
                    header={<h2>Me</h2>}
                    bordered
                    dataSource={meList}
                    renderItem={(item) => (
                        <ListCard task={item} />
                    )} />
                <List
                    header={<h2>My Monsters</h2>}
                    bordered
                    dataSource={monsterList}
                    renderItem={(item) => (
                        <ListCard task={item} />
                    )} />
                <List
                    header={<h2>Home</h2>}
                    bordered
                    dataSource={homeList}
                    renderItem={(item) => (
                        <ListCard task={item} />
                    )} />
            </div>
            <div className='Div'>

                <Link className="new-task-button" to='/add' style={{ width: 500, }}>
                    <div className="buttonContainer">
                        <Button type="primary">New Task</Button>
                    </div>
                </Link>
                <button type="primary" htmlType='submit' onClick={() => navigate('/')}>Logout</button>
            </div>
        </main>
    )
}


