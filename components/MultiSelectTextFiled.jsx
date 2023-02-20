import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

function MultiSelectTextField(props) {
  const {
    title,
    clearText,
    values,
    onChange,
    allValues
  } = props

  const [inputValue, setInputValue] = useState('')

  return (
    <div>
      <div className='flex justify-between items-center mb-5'>
        <p className='text-gray-400'>
          {title.toUpperCase()}
        </p>
        <div
          className='bg-gray-100 px-2 rounded text-gray-600 hover:underline hover:cursor-pointer'
          onClick={() => {
            onChange([])
          }}
        >
          {clearText}
        </div>
      </div>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const foundValue = allValues.find((obj) => (obj.name === inputValue.charAt(0).toLocaleUpperCase() + inputValue.slice(1).toLocaleLowerCase()))
          if (
            inputValue &&
            inputValue.length > 0 &&
            !values.find(el => el.value === inputValue.toLocaleLowerCase()) &&
            foundValue
            ) {
                onChange((prev) => (
                  [
                    ...prev,
                    {
                      text: inputValue.charAt(0).toLocaleUpperCase() + inputValue.slice(1),
                      value: foundValue.id
                    }
                  ]
                ))
          }
          setInputValue('')
        }}
      >
        <div className='flex w-full bg-white items-center pl-2 rounded-md border-2'>
          <MagnifyingGlassIcon className='h-5 w-5 text-gray-400' />
          <input
            className='w-full h-10 p-2 border-0 focus:outline-none rounded-md'
            placeholder='Search'
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
            }}
          />
        </div>
      </form>
      <div className='mt-3 flex flex-wrap gap-2'>
        {values.map((el, idx) => {
          return (
            <div
              className='flex items-center bg-violet-300 text-violet-900 rounded-xl px-2'
              key={`${el.value}-${idx}`}
            >
              {el.text}
              <XMarkIcon
                className='h-5 w-5 pt-1 hover:cursor-pointer hover:text-black'
                onClick={() => {
                  const temp = [...values]
                  temp.splice(idx, 1)
                  onChange(temp)
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MultiSelectTextField