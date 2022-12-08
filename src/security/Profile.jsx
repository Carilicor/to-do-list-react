import { Button, Form, Input, Layout } from 'antd'

export default function Profile(user, token) {
    const handleProfileUpdate = (values) => {
        fetch(`https://to-do-list-cgl.web.app/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify(values),
        })
            .then(response => response.json())
            .then(() => alert('Profile Updated'))
            .catch(alert)
    }
    return (
        <Layout.Content style={{ padding: '50px' }}>
            <h1>Profile</h1>
            <Form onFinish={handleProfileUpdate} initialValues={user} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                <Form.Item lable="Name" name="name">
                    <Input />
                </Form.Item>
                <Form.Item lable="Email" name="email">
                    <Input />
                </Form.Item>
            </Form>
            <Form>
                <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
                    <Button type="primary" htmlType='submit'></Button>
                </Form.Item>
            </Form>
        </Layout.Content>

    )

}