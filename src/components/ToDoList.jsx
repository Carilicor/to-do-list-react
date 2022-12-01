import { Link } from "react-router-dom";

export default function ToDoList() {
    return (
      <>
        <h1> List </h1>
        <Link to='/add'> New Task </Link>
      </>
    )
  }