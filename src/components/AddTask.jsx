import { useState } from 'react';
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
    fetch('https://to-do-list-cgl.web.app/tasks', {
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
// import { Button, Form, Input, Select } from 'antd';



// const { Option } = Select;
// const layout = { labelCol: { span: 8, }, wrapperCol: { span: 16, }, };
// const tailLayout = { wrapperCol: { offset: 8, span: 16, }, };
// const App = () => {
//   const [form] = Form.useForm();
//   const onCategoryChange = (value) => {
//     switch (value) { }
//   };
//   const onFinish = (values) => {
//     console.log(values);
//   };
//   const onReset = () => {
//     form.resetFields();
//   };
//   return (
//     <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
//       <Form.Item
//         name="category"
//         label="Category"
//         rules={[
//           {
//             required: true,
//           },
//         ]}
//       >
//         <Select
//           placeholder="Select a option and change input text above"
//           onChange={onCategoryChange}
//           allowClear
//         >
//           <Option value="my list">My List</Option>
//           <Option value="my monsters">My Monsters</Option>
//           <Option value="my home">My Home</Option>
//         </Select>
//       </Form.Item>
//       <Form.Item
//         name="to-do-task"
//         label="To Do Task"
//         rules={[
//           {
//             required: true,
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item {...tailLayout}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//         <Button htmlType="button" onClick={onReset}>
//           Reset
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };
// export default App;



