import React from 'react'
import { NavLink } from 'react-router-dom'
import './SearchCard.css'

function SearchCard(props) {
  return (
    <div className="search-card-component">
      {props.searchResults.map((album) => (
        <div key={album.id} className="album-card">
          <NavLink to={`/artist/${album.id}`}>
            <img
              className="object-contain h-32 hover:opacity-50 mx-auto"
              src={album.cover_image}
              alt={`${album.title} cover`}
            />
            {/* <p>Type: {album.type}</p> */}
            <p className="font-bold">{album.title}</p>
          </NavLink>
        </div>
      ))}
    </div>
  )
}

export default SearchCard
