import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
    <header className='header'>
    <Home/>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/World_Map_1689.JPG/450px-World_Map_1689.JPG'/>

    </header>
        <div className='button-container'>
            <Link to="/home/search">
                <button>Search</button>
            </Link>
            <Link to="/home/create">
                <button>Create</button>
            </Link> 
            <Link to="/home/event">
                <button>All events</button>
             </Link>      
    </div>
    </>
  )
}

export default App