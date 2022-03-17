import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import './ReleasePage.css'

function ReleasePage(props) {
  // const [artist, setArtist] = useState(null)
  const [release, setRelease] = useState([])
  // const [video, setVideo] = useState([])
  // const [hasVideo, setHasVideo] = useState(false)
  const [hasRelease, setHasRelease] = useState(false)
  const [Tracklist, setTracklist] = useState([])

  const { release_id } = useParams()

  useEffect(async () => {
    async function findRelease() {
      try {
        const res = await axios.get(
          `https://api.discogs.com/masters/${release_id}`,
          {
            headers: {
              Authorization: `Discogs token=${process.env.REACT_APP_TOKEN}`
            }
          }
        )
        setRelease(res.data)
        console.log(res.data, 'releases')
        // setVideo(res.data.videos)
        // setHasVideo(true)
        setHasRelease(true)
        setTracklist(res.data.tracklist)
      } catch (error) {
        throw error
      }
    }
    findRelease()
  }, [])

  return (
    <div
      // className="release-page"
      className="min-h-screen bg-lime-100"
    >
      <div className="grid grid-cols-2">
        <div className="left-grid"></div>
        {hasRelease ? (
          <h1 className="fixed flex justify-center items-center ml-32 mt-24 text-6xl font-extrabold animate-bounce">
            {release.artists[0].name}
          </h1>
        ) : (
          <div>RELEASE</div>
        )}
        {hasRelease ? (
          <img
            className="h-24 fixed ml-60 mt-48 animate-bounce"
            src="https://i.imgur.com/PoTDRAr.png"
          />
        ) : (
          <div></div>
        )}
        <div
          // className="right-grid"
          className="mr-6 mt-6"
        >
          <div className="image-block">
            {hasRelease ? (
              <img
                alt="album cover"
                className="max-h-96 mx-auto"
                src={release.images[0].uri}
              />
            ) : (
              <p>Loading</p>
            )}
          </div>
          <div
            // className="info-block"
            className="mt-4 font-bold"
          >
            {hasRelease ? <h3>{release.artists[0].name} </h3> : <div></div>}
            {hasRelease ? <h4>{release.title}</h4> : <div></div>}
            {/* {hasRelease ? (
              <h5>Label: {release.labels[0].name}</h5>
            ) : (
              <div></div>
            )} */}
          </div>
          <div
            // className="track-block"
            className="mt-4 "
          >
            <h4 className="font-bold">Tracklist:</h4>
            <div className="tracklist">
              {Tracklist.map((track) => (
                <p>
                  {track.position}. {track.title} {track.duration}
                </p>
              ))}
              <div
                // className="video-block"
                className="mt-4"
              >
                <h4 className="font-bold">YouTube Links:</h4>
                {/* <div className="video-map flex flex-col justify-center items-center">
                  {video.map((video) => (
                    <a href={video.uri}>{video.title}</a>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReleasePage
