import React from 'react'

function SingleReleaseCard(props) {
  return (
    <div className="single-release-card">
      {props.release.map((release) => (
        <div key={release.id} className="album-card">
          {/* <img src={album.cover_image} alt={`${album.title} cover`} /> */}
          {/* <p>Type: {album.type}</p> */}
          <h3>{release.title}</h3>
          <h4>{release.label}</h4>
          <p>{release.format}</p>
          <p>{release.year}</p>
          <iframe
            width="560"
            height="315"
            src={release.videos[0].uri}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      ))}
    </div>
  )
}

export default SingleReleaseCard
