import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { List, Button, Space } from 'antd'
import ListCard from './ListCard.jsx'




export default function TodoList() {
    const [tasks, setTasks] = useState()
    useEffect(() => {
        fetch('https://to-do-list-cgl.web.app/tasks')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTasks(data)
            })
            .catch(alert)
    }, [])

    if (!tasks) {
        return <h1>Loading...</h1>
    }

    const meList = tasks.filter(item => item.category?.toLowerCase() === "me")
    const monsterList = tasks.filter(item => item.category?.toLowerCase() === "my monsters")
    const homeList = tasks.filter(item => item.category?.toLowerCase() === "home")


    return (
        <main className='todo-list'>
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

            <Link className="new-task-button" to='/add'> 
                <Space wrap>
                    <Button type="primary">New Task</Button>
                </Space>
            </Link>
        </main>
    )
}


