import './App.css'
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Search from './components/Search'
import ArtistPage from './pages/ArtistPage'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <main>
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route exact path="/artist/:artist_id" element={<ArtistPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
