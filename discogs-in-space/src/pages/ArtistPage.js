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
        `https://api.discogs.com/artists/${artist_id}/releases?per_page=300`,
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
      // className="artist-page"
      className="min-h-screen bg-lime-100 md:grid md:grid-cols-2"
    >
      <div className="pt-8">
        <h1 className="md:fixed flex justify-center items-center md:ml-20 md:mt-8 lg:ml-48 lg:mt-24 text-6xl font-extrabold animate-bounce">
          Releases
        </h1>
        <img
          className="h-24 mt-4 md:fixed md:ml-32 md:mt-28 lg:ml-64 lg:mt-48 mx-auto animate-bounce"
          src="https://i.imgur.com/PoTDRAr.png"
        />
      </div>
      <div className="flex justify-center items-center mt-8">
        <ReleaseCard releases={releases} />
      </div>
    </div>
  )
}

export default ArtistPage
