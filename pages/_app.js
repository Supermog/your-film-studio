import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { GenreContext } from '@/contexts/GenreContext'
import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {

  const [genres, setGenres] = useState([])

  const genresValue = useMemo(() => genres, [])

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=3082c50c420141c82342132e685c2aaf&language=en-US')
        setGenres(res.data.genres)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  return (
    <GenreContext.Provider value={genresValue}>
      <QueryClientProvider client={queryClient}>
        <div className='flex flex-col justify-between min-h-screen'>
          <div>
            <NavBar />
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </QueryClientProvider>
    </GenreContext.Provider>
  )
}
