import { List } from 'antd'

export default function ({task}) {
    return (
        <List.Item>
            {task.task} {task.dueDate}
        </List.Item>
    )
}