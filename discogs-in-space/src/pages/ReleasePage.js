import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import './ReleasePage.css'

function ReleasePage(props) {
  // const [artist, setArtist] = useState(null)
  const [release, setRelease] = useState([])
  const [video, setVideo] = useState(null)
  const [hasVideo, setHasVideo] = useState(false)
  const [hasRelease, setHasRelease] = useState(false)
  const [Tracklist, setTracklist] = useState([])

  const { release_id } = useParams()

  useEffect(async () => {
    async function findRelease() {
      const res = await axios.get(
        `https://api.discogs.com/releases/${release_id}`,
        {
          headers: {
            Authorization: `Discogs token=${process.env.REACT_APP_TOKEN}`
          }
        }
      )
      setRelease(res.data)
      console.log(res.data, 'releases')
      setVideo(res.data.videos)
      setHasVideo(true)
      setHasRelease(true)
      setTracklist(res.data.tracklist)
    }
    findRelease()
  }, [])

  return (
    <div className="release-page">
      {hasRelease ? <img src={release.images[0].uri} /> : <p>Loading</p>}
      {/* <img src={release.images[0].uri} /> */}
      {hasRelease ? (
        <h3>Artist: {release.artists[0].name} </h3>
      ) : (
        <p>Loading</p>
      )}
      {hasRelease ? <h3>Title: {release.title}</h3> : <p>Loading</p>}
      {hasRelease ? <h4>{release.labels[0].name}</h4> : <p>Loading</p>}
      <h4>Tracklist:</h4>
      <div className="tracklist">
        {Tracklist.map((track) => (
          <p>
            {track.position}. {track.title} {track.duration}
          </p>
        ))}
      </div>
    </div>
  )
}

export default ReleasePage
