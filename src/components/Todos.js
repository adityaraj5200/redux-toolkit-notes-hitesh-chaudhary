import React from 'react'
import { useSelector } from 'react-redux'

function Todos() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  return (
    <>
      {todos.map((todos) => (
        <div key={todos.id}>{todos.text}</div>
      ))}
    </>
  )
}

export default Todos