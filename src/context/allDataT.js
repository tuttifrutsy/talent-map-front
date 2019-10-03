import React, {useStae, createContext, useState} from 'react';
import todos from '../data.json';

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  
  todos["filteredTodo"] = todos;
  const [allTodo, setTodo] = useState(todos);

  return (
    <TodoContext.Provider value={[allTodo, setTodo]}>
    {props.children}
    </TodoContext.Provider>
  );
};