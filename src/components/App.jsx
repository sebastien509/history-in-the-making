import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
    <header className='header'>
    <Home/>
    <img src='https://i.imgur.com/Z3xEo4y.jpeg'/>

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