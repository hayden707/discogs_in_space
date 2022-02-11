import axios from 'axios'
import { key, secret } from '../globals'
import React, { useState } from 'react'
import SearchCard from './SearchCard'

function Search() {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.get(
      `https://api.discogs.com/database/search?type=artist&q=${search}&?artist&key=${process.env.REACT_APP_KEY}&secret=${process.env.REACT_APP_SECRET}`
    )
    setSearchResults(res.data.results)
  }

  return (
    <div>
      <div>
        <form
          className="search-form"
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <input
            className="search-input"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button>Search</button>
        </form>
        <SearchCard searchResults={searchResults} />
      </div>
    </div>
  )
}

export default Search
