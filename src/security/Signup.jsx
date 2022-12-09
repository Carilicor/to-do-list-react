import { Button, Form, Input, Layout } from 'antd'
import { useNavigate } from 'react-router-dom'

export default function Signup({ setUser }) {
    const navigate = useNavigate()
    const handleFormSubmit = (values) => {
        fetch('https://to-do-list-cgl.web.app/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        })
            .then(response => response.json())
            .then(setUser)
            .catch(alert)
    }
    return (
        <Layout.Content style={{ padding: '50px' }}>
            <h1>Signup</h1>
            <Form onFinish={handleFormSubmit} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                <Form.Item label="Email" name="email" rules={[{
                    required: true,
                    message: 'Please enter a valid email address'
                }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Password" name="password" rules={[{
                    required: true,
                    message: 'Please enter password'
                }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
                    <Button type="primary" htmlType='submit' onClick={() => navigate('/')}>Signup</Button>
                </Form.Item>


            </Form>
            <br /><br />
            Already have an account?
            <button onClick={() => navigate('/')}>Login</button>
        </Layout.Content>
    )
}
