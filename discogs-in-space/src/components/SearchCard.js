import React from 'react'
import './SearchCard.css'

function SearchCard(props) {
  return (
    <div className="results">
      {props.searchResults.map((album) => (
        <div key={album.id} className="album-card">
          <img src={album.cover_image} alt={`${album.title} cover`} />
          <p>Type: {album.type}</p>
          <p>{album.title}</p>
        </div>
      ))}
    </div>
  )
}

export default SearchCard
