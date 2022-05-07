import React, { useRef } from "react";

import styled from 'styled-components';

const Input = ({todos, setTodos, addTodo, inputPlaceholder, inputButtonCaption}) => {

  const todoNameRef = useRef();

  const newTodoItem = () => {
    if (todoNameRef.current.value !== "") {
      addTodo(todoNameRef.current.value);
      todoNameRef.current.value = "";
    }
  }

  const newTodoItemKeyPress = e => {
    if (e.keyCode === 13) {
      newTodoItem();
    }   
  }

  return (
    <div className="input">

      <input className="input-button" ref={todoNameRef} placeholder={inputPlaceholder} onKeyDown={newTodoItemKeyPress} />

      <InputButton 
        onClick={newTodoItem}>
        {inputButtonCaption}
      </InputButton>

    </div>
  );
}




export default Input;


const InputButton = styled.div`
  border: 2px solid yellow;
  cursor: pointer;
  justify-content: center;
`

const InputButton2 = styled(InputButton)`

`