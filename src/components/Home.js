import React, { useState, useEffect } from "react";

import Todo from "./Todo";
import Input from "./Input";

const Home = ({todos, setTodos, addTodo, deleteTodo, toggleDoneTodo}) => {
  
  return (
    <div>
      <Input
        todos={todos} 
        setTodos={setTodos}
        addTodo={addTodo}
        inputPlaceholder="Hier neue Aufgabe eingeben" 
        inputButtonCaption="Hinzufügen" 
      />
    
      { 
        todos?.map(e => 
          <Todo
            key={e.id}
            todo={e}
            todos={todos} 
            setTodos={setTodos}
            deleteTodo={deleteTodo}
            toggleDoneTodo={toggleDoneTodo}
          />
        ) 
      }

    </div>
  )
}

export default Home;