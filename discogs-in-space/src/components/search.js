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
    <div
      className="search-component"
      className="min-h-screen bg-lime-100 flex justify-center items-center"
    >
      {emptySearch ? (
        <div className="">
          <img
            className="h-60 mb-14 animate-bounce"
            src="https://i.imgur.com/asZcoDR.png"
          />
          <form
            className="search-form"
            onSubmit={(e) => {
              handleSubmit(e)
            }}
          >
            <input
              className="search-input"
              className="bg-white rounded-2xl px-2 py-1 border-2 border-black"
              placeholder="Search By Artist Name"
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <button className="rounded-2xl border-2  px-3 bg-black ml-2 text-white font-bold">
              Search
            </button>
            {/* <p className="font-bold mt-3">Search by ARTIST NAME</p> */}
          </form>
        </div>
      ) : (
        <div className="grid grid-cols-2">
          <div className="grid-left">
            <h1 className="fixed flex justify-center items-center ml-32 mt-24 text-6xl font-extrabold animate-bounce">
              RESULTS
            </h1>
          </div>
          <div className="grid-right" className="mt-4">
            <SearchCard searchResults={searchResults} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
