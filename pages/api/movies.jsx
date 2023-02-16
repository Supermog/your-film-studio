import axios from 'axios'
import { APIkey } from '@/util/constants'

export const getMovies = async (page) => {
  const moviesReq = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US&page=${page}`)
  const genresReq = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${APIkey}&language=en-US`)

  const movies = {
    page: moviesReq.data.page,
    nextPage: moviesReq.data.page < 10 ? moviesReq.data.page+1 : null,
    previousPage: moviesReq.data.page <= 1 ? null : moviesReq.data.page-1,
    total_pages: 10,
    total_results: moviesReq.data.total_results,
    results: moviesReq.data.results.map((el) => {
    return {
      ...el,
      genres: el.genre_ids.map((id) => genresReq.data.genres.find((genre) => id === genre.id))
    }
  })}

  return movies
}