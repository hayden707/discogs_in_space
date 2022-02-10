import './App.css'
import axios from 'axios'
import { BASE_URL, key, secret } from './globals'
import React, { useEffect } from 'react'
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
      </header>
    </div>
  )
}

export default App
