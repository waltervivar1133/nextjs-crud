import React from 'react'

const Layout = ({children}) => {
  return (
    <div className="h-screen bg-gray-900 text-white">
     <header className="flex bg-gray-800 px-28 py-5">
      <h1 className="text-white uppercase font-semibold text-xl">Task App</h1>
        <div className="flex-grow text-right">
          <button className="bg-green-500 hover:bg-green-600 px-3 py-2 rounded-lg">Add Task</button>
        </div>
     </header>
    <main className="px-28">
     {children}
    </main>
    </div>
  )
}

export default Layout;
