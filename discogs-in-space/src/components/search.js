import axios from 'axios'
import { key, secret } from '../globals'
import React, { useState } from 'react'

function Search() {
  const [search, setSearch] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.get(
      `https://api.discogs.com/database/search?q=${search}&key=${process.env.REACT_APP_KEY}&secret=${process.env.REACT_APP_SECRET}`
    )
    console.log(res.data.results)
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
      </div>
    </div>
  )
}

export default Search
