import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import './ArtistPage.css'
import ReleaseCard from '../components/ReleaseCard'
import { FindReleases } from '../services/Services'

function ArtistPage(props) {
  // const [artist, setArtist] = useState(null)
  const [releases, setReleases] = useState([])

  const { artist_id } = useParams()

  useEffect(async () => {
    async function findReleases() {
      const res = await axios.get(
        `https://api.discogs.com/artists/${artist_id}/releases`
      )
      setReleases(res.data.releases)
      console.log(res.data.releases, 'releases')
    }
    findReleases()
    // const releases = await FindReleases(artist_id)
    // setReleases(releases.data)
  }, [])

  // const getArtist = async (artist_id) => {
  //   const res = await axios.get(
  //     `https://api.discogs.com/artists/${artist_id}/releases`
  //   )
  //   setReleases(res.data.results)
  //   console.log(res.data.results)
  // }
  // getArtist()

  return (
    <div className="artist-page">
      <ReleaseCard releases={releases} />
    </div>
  )
}

export default ArtistPage
