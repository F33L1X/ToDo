import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const todoArr = [
  { 
    id: uuidv4(),
    title: "Einkaufen",
    done: false
  },
  { 
    id: uuidv4(),
    title: "Sport",
    done: false
  },
  { 
    id: uuidv4(),
    title: "Steuererklärung",
    done: false
  }
]

const LOCAL_STORAGE_KEY = "todos";

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [todoCount, setTodoCount] = useState(-1);

  const saveTodosToLocalStorage = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }

  const loadTodosFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  }

  useEffect(() => {
    // wenn initiales Rendern, speichere nicht, ansonsten speichere
    // bei jeder Änderung von todos
    // dies ist eine von mehreren Möglichkeiten. Andere Möglichkeiten: CustomHooks, useRef bspw.
    if (todoCount !== -1) {
      saveTodosToLocalStorage();
      setTodoCount(todos.length)
    }
  }, [todos]);

  useEffect(() => {
    const storage = loadTodosFromLocalStorage();
    // wenn keine todos vorhanden (array leer), dann beispieldaten von oben
    // todoArr
    if (storage && storage?.length > 0) setTodos(storage);
    else setTodos(todoArr)
    setTodoCount(storage ? storage.length : 0);
  }, []);

  const addTodo = newTodoTitle => {
    setTodos([...todos, {id: uuidv4(), title: newTodoTitle, done: false} ]);
  }

  const deleteTodo = id => {
    setTodos(todos.filter((e) => e.id !== id))
  }

  const toggleDoneTodo = id => {
    setTodos(prevTodos => prevTodos.map(e => { if (e.id === id) e.done = !e.done; return e }));
  }

  return [todos, setTodos, addTodo, deleteTodo, toggleDoneTodo, todoCount, setTodoCount]
}

export default useTodos;