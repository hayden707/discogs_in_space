import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import SingleReleaseCard from '../components/SingleReleaseCard'
import './ReleasePage.css'

function ReleasePage(props) {
  // const [artist, setArtist] = useState(null)
  const [release, setRelease] = useState([])
  const [video, setVideo] = useState(null)
  const [hasVideo, setHasVideo] = useState(false)
  const [hasRelease, setHasRelease] = useState(false)

  const { release_id } = useParams()

  useEffect(async () => {
    async function findRelease() {
      const res = await axios.get(
        `https://api.discogs.com/releases/${release_id}`
      )
      setRelease(res.data)
      console.log(res.data, 'releases')
      setVideo(res.data.videos)
      setHasVideo(true)
      setHasRelease(true)
      // replaceUri(video.uri)
      // setVideo(video.uri)
      // console.logI
    }
    findRelease()
    // const releases = await FindReleases(artist_id)
    // setReleases(releases.data)
  }, [])

  // const replaceUri = (url) => {
  //   let newUrl = url.replace(/watch/g, 'embed')
  //   setVideo(newUrl)
  // }

  // const getArtist = async (artist_id) => {
  //   const res = await axios.get(
  //     `https://api.discogs.com/artists/${artist_id}/releases`
  //   )
  //   setReleases(res.data.results)
  //   console.log(res.data.results)
  // }
  // getArtist()

  return (
    <div className="release-page">
      <h3>Artist:</h3>
      {hasRelease ? (
        release.artists.map((artist) => (
          <div key={artist.id}>{artist.name}</div>
        ))
      ) : (
        <div>loading</div>
      )}
      <h3>Title: {release.title}</h3>
    </div>
  )
}

export default ReleasePage
