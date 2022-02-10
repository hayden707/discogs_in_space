import './App.css'
import axios from 'axios'
import { BASE_URL, key, secret } from './globals'
import React, { useEffect } from 'react'

function App() {
  useEffect(() => {
    async function getNirvana() {
      const res = await axios.get(
        `https://api.discogs.com/database/search?q=Nirvana&key=${process.env.REACT_APP_KEY}&secret=${process.env.REACT_APP_SECRET}`
      )
      console.log(res.data.results)
    }
    getNirvana()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <p>this is the discogs in space app</p>
      </header>
    </div>
  )
}

export default App
