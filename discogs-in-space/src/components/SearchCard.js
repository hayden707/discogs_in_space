import React from 'react'
import { NavLink } from 'react-router-dom'
import './SearchCard.css'

function SearchCard(props) {
  return (
    <div className="search-card-component">
      {props.searchResults.map((album) => (
        <div key={album.id} className="album-card">
          <NavLink to={`/artist/${album.id}`}>
            {album.cover_image ==
            'https://s.discogs.com/2c270601cf555cac2c46f9f4db73a03e0d2a0b3e/images/spacer.gif' ? (
              <img
                className="h-12 object-contain content-center m-auto hover:opacity-50 "
                src="https://i.imgur.com/6RUdaU8.png"
              />
            ) : (
              <img
                className="object-contain h-32 hover:opacity-50 mx-auto"
                src={album.cover_image}
                alt={`${album.title} cover`}
              />
            )}
            {/* <img
              className="object-contain h-32 hover:opacity-50 mx-auto"
              src={album.cover_image}
              alt={`${album.title} cover`}
            /> */}
            {/* <p>Type: {album.type}</p> */}
            <p className="font-bold">{album.title}</p>
          </NavLink>
        </div>
      ))}
    </div>
  )
}

export default SearchCard
