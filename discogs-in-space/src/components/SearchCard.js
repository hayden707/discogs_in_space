import React from 'react'
import { NavLink } from 'react-router-dom'
import './SearchCard.css'

function SearchCard(props) {
  return (
    <div className="search-card-component">
      {props.searchResults.map((album) => (
        <div key={album.id} className="album-card">
          <NavLink to={`/artist/${album.id}`}>
            <img src={album.cover_image} alt={`${album.title} cover`} />
            {/* <p>Type: {album.type}</p> */}
            <p>{album.title}</p>
          </NavLink>
        </div>
      ))}
    </div>
  )
}

export default SearchCard
