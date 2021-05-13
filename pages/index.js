import React, { useEffect, useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [todo, setTodo] = useState([])
  useEffect(() => {
    fetch('https://novd7wtdnh.execute-api.us-east-1.amazonaws.com/')
      .then((res) => res.json())
      .then((res) => setTodo(res))
  }, [])
  return (
    /*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/

    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <div className="flex mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
            />
            <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">
              Add
            </button>
          </div>
        </div>
        <div>
          {todo.map((item, i) => (
            <div className="flex mb-4 items-center">
              <p key={i} className="w-full text-grey-darkest">
                {item[i]}
              </p>
              <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
                Done
              </button>
              <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
                Remove
              </button>
            </div>
          ))}
          <div className="flex mb-4 items-center">
            <p className="w-full line-through text-green">
              Submit Todo App Component to Tailwind Components
            </p>
            <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">
              Not Done
            </button>
            <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
