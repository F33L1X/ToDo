import { BsCircle } from 'react-icons/bs';
import { BsCheckCircle } from 'react-icons/bs';
import { FaRegTrashAlt } from "react-icons/fa";

import { useParams, Link } from "react-router-dom";

const Todo = ({todo, todos, setTodos, deleteTodo, toggleDoneTodo}) => {

  const { todoId } = useParams();

  const paramTodo = todos.find(e => e.id === todoId);

  const deleteTodoItem = () => {
    if (todo) deleteTodo(todo.id);
    else deleteTodo(paramTodo.id);
  }

  const toggleDoneTodoItem = () => {
    if (todo) toggleDoneTodo(todo.id);
    else toggleDoneTodo(paramTodo.id);
  }

  if (todo) {
    return (
      <div className="todo-item">
        <div onClick={toggleDoneTodoItem}>{todo.done === false ? <BsCircle /> : <BsCheckCircle />}</div>
          <div style={{ width:"10px" }} />
            <Link to={`/todo/${todo.id}`} key={todo.id} >
              {todo.title}
            </Link>
          <div style={{ width:"10px" }} />
        <FaRegTrashAlt onClick={deleteTodoItem} />
      </div>
    );
  } else if (paramTodo) {
    return (
      <div className="todo-item">
        <div onClick={toggleDoneTodoItem}>{paramTodo.done === false ? <BsCircle /> : <BsCheckCircle />}</div>
          <div style={{ width:"10px" }} />
            <Link to={`/todo/${paramTodo.id}`} key={paramTodo.id} >
              {paramTodo.title}
            </Link>
          <div style={{ width:"10px" }} />
        <FaRegTrashAlt onClick={deleteTodoItem} />
      </div>
    );
  }
}

export default Todo;