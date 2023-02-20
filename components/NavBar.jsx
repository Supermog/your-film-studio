import logo from '../public/Mark.svg'
import classNames from '@/util/classNames'
import { Disclosure } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import DropDown from './NavBar/DropDown'
import DropDownMobile from './NavBar/DropDownMobile'

function NavBar() {

  return (
    <Disclosure as='nav'>
      {({ open }) => (
        <>
          <div className='flex p-4 justify-between'>
            {/*Desktop view*/}
            <div className='items-center gap-5 hidden sm:flex'>
              {logo?.src ? (
                <img src={logo.src} alt='logo'/>
              ) : null}
                <a
                  href='/films'
                  className={classNames(
                    'text-gray-600 hover:underline',
                    'px-3 py-2 rounded-md text-sm font-medium'
                  )}
                >
                  Browse Films
                </a>
                <DropDown />
                <a
                  href='/'
                  className={classNames(
                    'text-gray-600 hover:underline',
                    'px-3 py-2 rounded-md text-sm font-medium'
                  )}
                >
                  About
                </a>
            </div>
            {/* Mobile view */}
            <div className='sm:hidden'>
              <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                {open ? (
                  <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                ) : (
                  <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                )}
              </Disclosure.Button>
            </div>
            <div className='flex items-center gap-2'>
              <a
                href='#'
                className={classNames(
                  'text-gray-600 hover:underline',
                  'px-3 py-2 rounded-md text-sm font-medium'
                )}
              >
                Sign in
              </a>
              <a
                href='#'
                className={classNames(
                  'flex justify-center rounded-md border border-transparent',
                  'bg-indigo-500 py-2 px-4 text-sm font-medium text-white',
                  'hover:bg-indigo-700 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                )}
              >
                Sign up
              </a>
            </div>
          </div>
          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              <Disclosure.Button
                as='a'
                href='#'
                className={classNames(
                  'text-gray-600 hover:bg-gray-200',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
              >
                Browse Films
              </Disclosure.Button>
              <DropDownMobile />
              <Disclosure.Button
                as='a'
                href='#'
                className={classNames(
                  'text-gray-600 hover:bg-gray-200',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
              >
                About
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar