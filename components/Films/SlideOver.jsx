import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, HeartIcon } from '@heroicons/react/24/outline'
import { img_url_base } from '@/util/constants'
import classNames from '@/util/classNames'
import { useQuery } from 'react-query'
import { getMovie } from '@/pages/api/movies'

const options = { year: 'numeric', month: 'long', day: 'numeric' }

function SlideOver(props) {
  const { movieId, onClose, open } = props

  const { status, data: movie } = useQuery({
    queryKey: ['movie', movieId],
    enabled: open,
    queryFn: () => getMovie(movieId)
  })

  return (
    <Transition.Root show={open} as='div'>
      <Dialog as='div' className='relative z-10' onClose={() => {
        onClose(false)
      }}>
        <Transition.Child
          as='div'
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>
        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <Transition.Child
                as='div'
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto h-full relative w-screen max-w-md'>
                  <Transition.Child
                    as='div'
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4'>
                      <button
                        type='button'
                        className='rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                        onClick={() => onClose(false)}
                      >
                        <span className='sr-only'>Close panel</span>
                        <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl'>
                    <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                      {status === 'success' ? (
                        <div>
                          <div className='flex justify-center'>
                            {movie.poster_path ? (
                              <img src={`${img_url_base}/${movie.poster_path}`} alt='Missing image' className='rounded-lg w-1/2'/>
                            ) : (
                              <div
                                className='flex justify-center items-center h-full'
                              >
                                Missing image
                              </div>
                            )}
                          </div>
                          <div className='flex justify-between mt-5'>
                            <div>
                              <p className='text-lg font-medium'>
                                {movie.title}
                              </p>
                              <div className='flex text-gray-500'>
                              {movie.genres.map((genre, idx) => {
                                return (
                                    `${genre.name}${idx === movie.genres.length-1 ? '' : ', '}`
                                )
                              })}
                              </div>
                            </div>
                            <div>
                              <HeartIcon className='h-5 w-5 text-gray-500 hover:text-black hover:cursor-pointer'/>
                            </div>
                          </div>
                          <div className='flex flex-col mt-5 gap-3'>
                            <p className='text-base font-medium'>
                              Information
                            </p>
                            <div className='border-t-2' />
                            <div className='flex justify-between items-center'>
                              <p>
                                Release Date
                              </p>
                              <p className='text-sm font-medium'>
                                {new Date(movie.release_date).toLocaleDateString('en-US', options)}
                              </p>
                            </div>
                            <div className='border-t-2' />
                            <div className='flex justify-between items-center'>
                              <p>
                                Metascore Rating
                              </p>
                              <p className='text-sm font-medium'>
                                {movie.vote_average}
                              </p>
                            </div>
                            <div className='border-t-2' />
                            <div className='flex justify-between items-center'>
                              <p>
                                Runtime
                              </p>
                              <p className='text-sm font-medium'>
                                {movie.runtime}m
                              </p>
                            </div>
                            <div className='border-t-2' />
                            <button
                              className={classNames(
                                'flex justify-center items-center rounded-md border border-transparent',
                                'bg-indigo-500 py-2 px-5 text-sm font-medium text-white',
                                'hover:bg-indigo-700 hover:underline focus:outline-none',
                                'focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                              )}
                            >
                              Add to list
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className='flex justify-center items-center w-full h-full'>
                          <h1 className='text-2xl'>
                            Loading.....
                          </h1>
                        </div>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default SlideOver