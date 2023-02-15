import { metricsStats, yearValues } from '@/util/constants'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import MultiSelectTextField from '@/components/MultiSelectTextFiled'
import { useState } from 'react'
import MultiSelector from '@/components/MultiSelector'

function Films () {

  const [genres, setGenres] = useState([])
  const [years, setYears] = useState([])

  return (
    <div className=''>
      <div className='p-5 md:p-20'>
        <div className='flex flex-col items-center rounded-md gap-y-5 bg-gray-100 border-2 border-gray-200 px-10 py-5'>
          <h1 className='text-3xl font-semibold'>
            Search for Films
          </h1>
          <div className='flex w-full bg-white items-center pl-2 rounded-md'>
            <MagnifyingGlassIcon className='h-5 w-5 text-gray-400' />
            <input
              className='w-full h-10 p-2 border-0 focus:outline-none rounded-md'
              placeholder='Search'
            />
          </div>
        </div>
        <div className='mt-14 flex'>
          <div className='w-full sm:w-1/4'>
            <p className='text-lg text-gray-500 mb-8'>
              Filters
            </p>
            <div>
              <MultiSelectTextField
                title='genre'
                clearText='Clear Filters'
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
        </div>
      </div>
      <div className='w-full flex w-full bg-gradient-to-r from-gray-900 to-gray-500'>
        <div className='md:pl-16 md:pt-20 p-10 md:w-1/2 text-white'>
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
      </div>
    </div>
  )
}

export default Films