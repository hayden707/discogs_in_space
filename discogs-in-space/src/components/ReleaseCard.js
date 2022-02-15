import React from 'react'
import { NavLink } from 'react-router-dom'
import './SearchCard.css'

function ReleaseCard(props) {
  return (
    <div className="search-card-component">
      {props.releases.map((album) => (
        <div key={album.id} className="album-card">
          {/* <img src={album.cover_image} alt={`${album.title} cover`} /> */}
          {/* <p>Type: {album.type}</p> */}
          <h3>{album.title}</h3>
          <h4>{album.label}</h4>
          <p>{album.format}</p>
          <p>{album.year}</p>
        </div>
      ))}
    </div>
  )
}

export default ReleaseCard
