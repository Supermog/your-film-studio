import axios from 'axios'
import { APIkey } from '@/util/constants'
import { discoverLink, searchLink } from '@/util/constants'

export const getMovies = async (page, movieName = '', years = [], genres = []) => {
  const release_year_filter = years.join('|')
  const genre_filter = genres.map((genreObj) => genreObj.value).join('|')
  const name_filter = movieName.split(' ').join('+')

  const reqURL = name_filter ? searchLink(APIkey, page, name_filter) : discoverLink(APIkey, page, release_year_filter)

  const moviesReq = await axios.get(reqURL)
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