import React from 'react'
import { NavLink } from 'react-router-dom'
import './ReleaseCard.css'

function ReleaseCard(props) {
  return (
    <div
      className="release-card"
      className="flex-row justify-center items-center"
    >
      {props.releases.map((album) => (
        <div
          key={album.id}
          className="album-card"
          // className="flex justify-center items-center"
        >
          {/* <img src={album.cover_image} alt={`${album.title} cover`} /> */}
          {/* <p>Type: {album.type}</p> */}
          <NavLink to={`/release/${album.id}`}>
            <img className="mx-auto hover:opacity-50" src={album.thumb} />
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
