import './App.css'
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Search from './components/Search'
import ArtistPage from './pages/ArtistPage'
import ReleasePage from './pages/ReleasePage'
import Header from './components/Header'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route exact path="/artist/:artist_id" element={<ArtistPage />} />
          <Route exact path="/release/:release_id" element={<ReleasePage />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
