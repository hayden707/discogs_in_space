import axios from 'axios'
import { key, secret } from '../globals'
import React, { useState } from 'react'
import SearchCard from './SearchCard'
import './Search.css'

function Search() {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [emptySearch, setEmptySearch] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEmptySearch(false)
    const res = await axios.get(
      `https://api.discogs.com/database/search?type=artist&q=${search}&?artist&token=${process.env.REACT_APP_TOKEN}`
    )
    setSearchResults(res.data.results)
    console.log(res.data.results)
  }

  return (
    <div className="search-component">
      {emptySearch ? (
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
            <p>Search by ARTIST NAME</p>
          </form>
        </div>
      ) : (
        <SearchCard searchResults={searchResults} />
      )}
    </div>
  )
}

export default Search
