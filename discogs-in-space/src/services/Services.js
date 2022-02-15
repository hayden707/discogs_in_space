import axios from 'axios'

export const FindReleases = async (artist_id) => {
  try {
    const res = await axios.get(
      `https://api.discogs.com/artists/${artist_id}/releases`
    )
    return res.data
  } catch (error) {
    throw error
  }
}
