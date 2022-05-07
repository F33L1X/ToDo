import './App.css';

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import useTodos from "./hooks/useTodos";

import Headline from "./components/Headline"
import Todo from "./components/Todo";
import Button from "./components/Button";
import Input from "./components/Input";
import Home from "./components/Home";

function App() {
  const [todos, setTodos, addTodo, deleteTodo, toggleDoneTodo] = useTodos();
  
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">
          <Headline title="Todo App" />
        </Link>
      <Routes>
          <Route 
            path="/"
            element={
              <Home 
                todos={todos}
                setTodos={setTodos}
                addTodo={addTodo}
                deleteTodo={deleteTodo}
                toggleDoneTodo={toggleDoneTodo}
              />
            }
          />
          <Route
            path="todo/:todoId"
            element={
              <Todo 
                todos={todos} 
                setTodos={setTodos} 
                deleteTodo={deleteTodo}
                toggleDoneTodo={toggleDoneTodo}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
