import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import './ArtistPage.css'
import ReleaseCard from '../components/ReleaseCard'

function ArtistPage(props) {
  const [releases, setReleases] = useState([])

  const { artist_id } = useParams()

  useEffect(async () => {
    async function findReleases() {
      const res = await axios.get(
        `https://api.discogs.com/artists/${artist_id}/releases`,
        {
          headers: {
            Authorization: `Discogs token=${process.env.REACT_APP_TOKEN}`
          }
        }
      )
      setReleases(res.data.releases)
      console.log(res.data.releases, 'releases')
    }
    findReleases()
  }, [])

  return (
    <div
      className="artist-page"
      className="min-h-screen bg-lime-100 grid grid-cols-2"
    >
      <div>
        <h1 className="fixed flex justify-center items-center ml-48 mt-24 text-6xl font-extrabold">
          RELEASES
        </h1>
      </div>
      <div className="flex justify-center items-center mt-8">
        <ReleaseCard releases={releases} />
      </div>
    </div>
  )
}

export default ArtistPage
