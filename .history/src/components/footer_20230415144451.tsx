import React from 'react'

const footer = () => {
  return (
    <div>


            
            <!-- component -->
      <div className="jusitfy-center flex min-h-screen w-full items-center bg-gray-900">
        <section
          className="absolute top-1/2 left-1/2 h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-3 transform rounded-2xl bg-gray-400"
        ></section>

        <section
          className="absolute top-1/2 left-1/2 h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-3 transform space-y-6 rounded-2xl bg-gray-100 p-6 duration-300 hover:rotate-0"
        >
          <div className="flex justify-end">
            <div className="h-4 w-4 rounded-full bg-gray-900"></div>
          </div>

          <!-- year.month.day -->
          <header className="text-center text-xl font-extrabold text-gray-600">
            2021.09.01
          </header>

          <div>
            <p className="text-center text-5xl font-extrabold text-gray-900">
              Online Test <br />(Physics)
            </p>
            <p className="text-center text-4xl font-extrabold text-[#FE5401]">2 hours</p>
          </div>

          <footer className="mb-10 flex justify-center">
            <button
              className="flex items-center rounded-lg bg-[#FF7308] px-4 py-2.5 text-xl font-bold text-white hover:bg-[#E56707]"
            >
              <p>Start</p>
              <svg
                className="h-9 w-9"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </footer>
        </section>
      </div>









      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {filteredToDoList.map((todo) => (
        <section
          className="h-96 w-80 rotate-3 transform rounded-2xl bg-gray-400"
        ></section>

        <section key={todo.id} className={`border h-96 w-80 rotate-3 transform space-y-6 rounded-2xl bg-gray-100 p-6 duration-300 hover:rotate-0 ${todo.completion ? 'bg-green-400/50' : ''}`}>
          <div className="flex justify-end">
            <div className="h-4 w-4 rounded-full bg-gray-900"></div>
          </div>

          <header className="text-center text-xl font-extrabold text-gray-600">
            Finish until:{" "}
                {new Date(todo.date).toLocaleString(undefined, {
                  dateStyle: "short",
                  timeStyle: "short",
                })}
          </header>

          <div>
            <h1 className="text-lg font-bold mb-2">Title: {todo.title}</h1>
            <p className="mb-2">Description: {todo.description}</p>
          </div>

          <div className='flex justify-between'>
              <button
                onClick={() => deleteTask(todo.id)}
                className="bg-red-500/80 hover:bg-red-700/80 text-white font-bold py-2 px-4 rounded mt-2"
              >
                Delete Task
              </button>
              <button
                className={`bg-green-600/80 hover:bg-green-800/80 text-white font-bold py-2 px-4 rounded mt-2 
                              ${todo.completion ? 'bg-orange-600/80 hover:bg-orange-800/80' : ''}`}
                onClick={() => {
                  if (todo.completion) {
                    uncompleteTask(todo.id)
                  } else {
                    completeTask(todo.id)
                  }}}
                  >
                {todo.completion ? 'Undo Task' : 'Complete Task'}
              </button>
            </div>
          </section>
          











      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {filteredToDoList.map((todo) => (

        ))}
      </div>









      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {filteredToDoList.map((todo) => (
    <div key={todo.id} className={`bg-gray-200/20 border rounded-md p-4 ${todo.completion ? 'bg-green-400/50' : ''}`}>
            <h1 className="text-lg font-bold mb-2">Title: {todo.title}</h1>
            <p className="mb-2">Description: {todo.description}</p>
            <p className="mb-2">
              Finish until:{" "}
              {new Date(todo.date).toLocaleString(undefined, {
                dateStyle: "short",
                timeStyle: "short",
              })}
            </p>
              
            <div className='flex justify-between'>
              <button
                onClick={() => deleteTask(todo.id)}
                className="bg-red-500/80 hover:bg-red-700/80 text-white font-bold py-2 px-4 rounded mt-2"
              >
                Delete Task
              </button>
              <button
                className={`bg-green-600/80 hover:bg-green-800/80 text-white font-bold py-2 px-4 rounded mt-2 
                              ${todo.completion ? 'bg-orange-600/80 hover:bg-orange-800/80' : ''}`}
                onClick={() => {
                  if (todo.completion) {
                    uncompleteTask(todo.id)
                  } else {
                    completeTask(todo.id)
                  }}}
                  >
                {todo.completion ? 'Undo Task' : 'Complete Task'}
              </button>
            </div>

          </div>
        ))}
      </div>





      {/* <div className="justify-center flex min-h-screen w-full items-center bg-gray-900">
  <section
    className="absolute top-1/2 left-1/2 h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-3 transform rounded-2xl bg-gray-400"
  ></section>

  <section
    className="absolute top-1/2 left-1/2 h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-3 transform space-y-6 rounded-2xl bg-gray-100 p-6 duration-300 hover:rotate-0"
  >
    <div className="flex justify-end">
      <div className="h-4 w-4 rounded-full bg-gray-900"></div>
    </div>

    <header className="text-center text-xl font-extrabold text-gray-600">TODO List</header>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {filteredToDoList.map((todo) => (
        <div
          key={todo.id}
          className={`bg-gray-200/20 border rounded-md p-4 ${
            todo.completion ? "bg-green-400/50" : ""
          }`}
        >
          <h1 className="text-lg font-bold mb-2">Title: {todo.title}</h1>
          <p className="mb-2">Description: {todo.description}</p>
          <p className="mb-2">
            Finish until:{" "}
            {new Date(todo.date).toLocaleString(undefined, {
              dateStyle: "short",
              timeStyle: "short",
            })}
          </p>

          <div className="flex justify-between">
            <button
              onClick={() => deleteTask(todo.id)}
              className="bg-red-500/80 hover:bg-red-700/80 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Delete Task
            </button>
            <button
              className={`bg-green-600/80 hover:bg-green-800/80 text-white font-bold py-2 px-4 rounded mt-2 ${
                todo.completion
                  ? "bg-orange-600/80 hover:bg-orange-800/80"
                  : ""
              }`}
              onClick={() => {
                if (todo.completion) {
                  uncompleteTask(todo.id);
                } else {
                  completeTask(todo.id);
                }
              }}
            >
              {todo.completion ? "Undo Task" : "Complete Task"}
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
</div> */}

    </div>
  )
}

export default footer