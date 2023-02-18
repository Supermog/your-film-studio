import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import classNames from '@/util/classNames'

function MultiSelector(props) {
  const {
    title,
    selectedValues,
    onChange,
    values
  } = props

  return (
    <div>
      <p className='text-gray-600 mb-1'>
        {title}
      </p>
      <Menu as='div' className='flex'>
        <div className='w-full'>
          <Menu.Button
            className={classNames(
            'flex w-full justify-between items-center rounded-md border border-gray-300',
            'bg-white px-4 py-1 text-gray-700 shadow-sm hover:bg-gray-50',
            'focus:outline-none focus:ring-2 focus:ring-indigo-500',
            'focus:ring-offset-2 focus:ring-offset-gray-100'
            )}
          >
            <div className='flex justify-start w-full flex-wrap'>
              {selectedValues.length < 1 ? 'Choose' : selectedValues.map((el, idx) => {
                return idx === selectedValues.length - 1 ? <p>{el}</p> : <p>{el},&nbsp;</p>
              })}
            </div>
            <div>
              <ChevronUpIcon className='h-4 w-4 relative top-1'/>
              <ChevronDownIcon className='h-4 w-4 relative bottom-1'/>
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute max-h-60 overflow-auto origin-bottom z-10 mt-12 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='py-1'>
              {values.map((el, idx) => {
                return (
                  <Menu.Item key={el}>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          if (!selectedValues.some((val) => (val === el))) {
                            onChange(prev => [
                              ...prev,
                              el
                            ])
                          } else {
                            const temp = [...selectedValues].filter((val) => val !== el)
                            onChange(temp)
                          }
                        }}
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'flex justify-between w-full px-4 py-2 text-left text-sm'
                        )}
                      >
                        <p className={selectedValues.find((val) => (val === el)) ? 'font-semibold' : ''}>
                          {el}
                        </p>
                        <div className={selectedValues.find((val) => (val === el)) ? '' : 'hidden'}>
                          <CheckIcon className='h-5 w-5'/>
                        </div>
                      </button>
                    )}
                  </Menu.Item>
                )
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default MultiSelector