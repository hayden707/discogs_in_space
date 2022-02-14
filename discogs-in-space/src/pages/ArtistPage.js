import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import './ArtistPage.css'

function ArtistPage(props) {
  const [artist, setArtist] = useState(null)
  const [releases, setReleases] = [useState([])]

  const { artist_id } = useParams()

  useEffect(() => {
    async function getArtist() {
      const res = await axios.get(
        `https://api.discogs.com/artists/${artist_id}/releases`
      )
    }
    getArtist()
  }, [])

  return (
    <div className="artist-page">
      {/* <p>{props.match.params}</p> */}
      <p>test TEST</p>
      <h1>{artist_id}</h1>
    </div>
  )
}

export default ArtistPage
