import React from 'react'
import { NavLink } from 'react-router-dom'
import './ReleaseCard.css'

function ReleaseCard(props) {
  return (
    <div className="release-card">
      {props.releases.map((album) => (
        <div key={album.id} className="album-card">
          {/* <img src={album.cover_image} alt={`${album.title} cover`} /> */}
          {/* <p>Type: {album.type}</p> */}
          <NavLink to={`/release/${album.id}`}>
            <img src={album.thumb} />
            <h3>{album.title}</h3>
            <h4>{album.label}</h4>
            <p>{album.format}</p>
            <p>{album.year}</p>
          </NavLink>
        </div>
      ))}
    </div>
  )
}

export default ReleaseCard
