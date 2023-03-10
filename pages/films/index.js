import {
  metricsStats,
  yearValues,
  img_url_base
} from '@/util/constants'
import {
  MagnifyingGlassIcon,
  ArrowLeftIcon,
  ArrowRightIcon
} from '@heroicons/react/20/solid'
import MultiSelectTextField from '@/components/MultiSelectTextFiled'
import { useState } from 'react'
import MultiSelector from '@/components/MultiSelector'
import { getGenres, getMovies } from '../api/movies'
import { useQuery } from 'react-query'
import SlideOver from '@/components/Films/SlideOver'
import classNames from '@/util/classNames'
import fadingProgrammer from '@/public/FadingProgrammer.jpg'

export async function getStaticProps() {
  const allGenres = await getGenres()

  return {
    props: {
      allGenres
    }
  }
}

function Films (props) {

  const { allGenres } = props

  const [open, setOpen] = useState(false)
  const [slideOverId, setSlideOverId] = useState()
  const [page, setPage] = useState(1)
  const [genres, setGenres] = useState([])
  const [years, setYears] = useState([])
  const [movieName, setMovieName] = useState('')

  const { status, data: movies } = useQuery({
    queryKey: ['movies', movieName, page, years, genres],
    keepPreviousData: true,
    queryFn: () => getMovies(parseInt(page) || 1, movieName, years, genres)
  })

  return (
    <div>
      <div className='p-5 md:p-20'>
        <div className='flex flex-col items-center rounded-md gap-y-5 bg-gray-100 border-2 border-gray-200 px-10 py-5'>
          <h1
            className='text-3xl font-semibold'
            data-testid='search-text'
          >
            Search for Films
          </h1>
          <div className='flex w-full bg-white items-center pl-2 rounded-md'>
            <MagnifyingGlassIcon className='h-5 w-5 text-gray-400' />
            <input
              className='w-full h-10 p-2 border-0 focus:outline-none rounded-md'
              placeholder='Search'
              value={movieName}
              onChange={(e) => {
                setMovieName(e.target.value)
              }}
            />
          </div>
        </div>
        <div className='mt-14 flex sm:flex-row flex-col gap-5 sm:gap-0'>
          <div className='w-full sm:w-1/4'>
            <p className='text-lg text-gray-500 mb-8'>
              Filters
            </p>
            <div>
              <MultiSelectTextField
                title='genre'
                clearText='Clear Filters'
                allValues={allGenres}
                values={genres}
                onChange={setGenres}
              />
            </div>
            <div className='border-t-2 mt-5' />
            <div className='mt-5'>
              <p className='text-gray-400 mb-5'>
                YEAR
              </p>
              <MultiSelector
                title='Release Year'
                values={yearValues}
                selectedValues={years}
                onChange={setYears}
              />
            </div>
          </div>
          <div className='sm:w-3/4 w-full pl-5'>
            {status === 'loading' ? (
              <div>
                Loading...
              </div>
            ) : movies?.results?.length > 0 ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-flow-row'>
                {movies?.results ? movies.results.map((el) => {
                  return (
                    <div
                      key={el.id}
                      className='hover:bg-gray-200 hover:cursor-pointer p-5 rounded-lg flex flex-col justify-between'
                      onClick={() => {
                        setSlideOverId(el.id)
                        setOpen(true)
                      }}
                    >
                      {el.poster_path ? (
                        <img src={`${img_url_base}/${el.poster_path}`} alt='Missing image' className='rounded-lg w-full'/>
                      ) : (
                        <div
                          className='flex justify-center items-center h-full'
                        >
                          Missing image
                        </div>
                      )}
                      <div>
                        <p className='text-sm font-medium'>
                          {el.title}
                        </p>
                        <p className='text-sm font-medium text-gray-500'>
                          {el.genres[0]?.name}
                        </p>
                      </div>
                    </div>
                  )
                }) : null}
              </div>
            ) : (
              <div className='flex justify-center text-2xl font-bold'>
                No results!
              </div>
            )}
            {
              movies?.results && movies?.results.length > 0 ? (
                <div className='mt-10'>
                  <div className='flex justify-between'>
                    <button
                      className={classNames(
                        `flex ${movies?.previousPage ? 'hover:underline hover:cursor-pointer' : 'disabled hover:cursor-default'}`,
                        'justify-self-start items-center gap-2 text-sm font-medium text-gray-500'
                      )}
                      onClick={() => {
                        if (movies.previousPage) {
                          setPage(movies.previousPage)
                        }
                      }}
                      data-testid='previous-button'
                    >
                      <ArrowLeftIcon className='h-5 w-5' data-testid='arrow-left'/>
                      <p>
                        Previous
                      </p>
                    </button>
                    <div className='flex gap-x-5'>
                      {movies?.page !== 1 && movies?.previousPage !== 1 ? (
                        <button
                          className='text-gray-500 hover:underline hover:cursor-pointer'
                          onClick={() => {
                            if (page !== 1) {
                              setPage(1)
                            }
                          }}
                        >
                          1
                        </button>
                      ) : null}
                      <button
                        className='pointer-events-none text-black'
                      >
                        {movies?.page}
                      </button>
                      {movies?.page !== movies?.total_pages && movies?.nextPage !== movies.total_pages ? (
                        <button
                          className='text-gray-500 hover:underline hover:cursor-pointer'
                          onClick={() => {
                            if (page !== movies.total_pages) {
                              setPage(movies.total_pages)
                            }
                          }}
                        >
                          {movies?.total_pages}
                        </button>
                      ) : null}
                    </div>
                    <button
                      className={classNames(
                        `flex ${movies?.nextPage ? 'hover:underline hover:cursor-pointer' : 'disabled hover:cursor-default'}`,
                        'justify-self-start items-center gap-2 text-sm font-medium text-gray-500'
                      )}
                      onClick={() => {
                        if (movies.nextPage) {
                          setPage(movies.nextPage)
                        }
                      }}
                      data-testid='next-button'
                    >
                      <p>
                        Next
                      </p>
                      <ArrowRightIcon className='h-5 w-5' data-testid='right-icon'/>
                    </button>
                  </div>
                </div>
              ) : null
            }
          </div>
        </div>
      </div>
      <div className='w-full z-10 flex flex-row xl:bg-gray-900 max-xl:bg-gradient-to-r max-xl:from-gray-900 max-xl:to-gray-500'>
        <div className='md:pl-16 md:pt-20 p-10 lg:w-1/2 text-white'>
          <div className='text-sm text-indigo-400 font-medium mb-5'>
            VALUABLE METRICS
          </div>
          <h1 className='text-3xl font-bold mb-5'>
            Curating Your List
          </h1>
          <div className='font-light text-gray-200 mb-5'>
            Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate diam sit tellus quis at.
          </div>
          <div className='grid sm:grid-rows-2 grid-rows-4 grid-flow-col gap-5 mb-16'>
            {metricsStats.map((stat) => {
              return (
                <div key={stat.data}>
                  <h1 className='text-2xl font-bold'>
                    {stat.data.toUpperCase()}
                  </h1>
                  <p>
                    {stat.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
        <div className='absolute hidden xl:block inset-x-1/2 w-1/6 h-full bg-gradient-to-r from-gray-900'
        />
        {fadingProgrammer?.src ? (
          <div className='w-1/2 h-full xl:block hidden text-white'>
            <img src={fadingProgrammer.src} alt='Missing image' className='h-full w-full' />
          </div>
        ) : (
          <div
            className='w-1/2 hidden xl:flex justify-center items-center text-white'
          >
            Missing image
          </div>
        )}
      </div>
      <SlideOver
        movieId={slideOverId}
        onClose={setOpen}
        open={open}
      />
    </div>
  )
}

export default Films