import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import classNames from '@/util/classNames'
import { dropdownContent } from '@/util/constants'

function DropDown() {

  return (
  <Menu
    as="div"
    className={classNames(
      'text-gray-600',
      'px-3 py-2 text-sm border-0 font-medium'
    )}
  >
    <div className='hover:underline hover:cursor-pointer'>
      <Menu.Button className='flex'>
        Features
        <ChevronDownIcon className='h-5 w-5' />
      </Menu.Button>
    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className='absolute left-40 bg-white shadow-lg rounded'>
        <div className='grid grid-cols-2 gap-4 p-4 hover:cursor-default'>
          {dropdownContent.map((el, idx) => {
            return (
              <div key={el.title} className='hover:bg-gray-100 hover:rounded hover:cursor-pointer'>
                <div className='gap-4'>
                  <div className='bg-indigo-500 p-3 rounded float-left mr-3'>
                    <img src={el.img} />
                  </div>
                  <div>
                    <p>
                      {el.title}
                    </p>
                    <p className='text-gray-400 text-xs'>
                      {el.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className='bg-gray-100 p-5 hover:cursor-default'>
          <div>
            <div className='flex gap-2 items-center'>
              <p className='hover:underline hover:cursor-pointer'>
                Premium
              </p>
              <div className='bg-indigo-100 text-indigo-600 rounded-xl p-1 px-3 hover:cursor-default'>
                New
              </div>
            </div>
            <p className='text-gray-400 text-xs'>
              Get access to releases before anyone else.
            </p>
          </div>
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
  )
}

export default DropDown