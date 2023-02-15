import {
  footerData,
  currencies,
  languages,
  footerIcons
} from "@/util/constants"
import Selector from "./Footer/Selector"
import { useState } from "react"
import classNames from "@/util/classNames"

function Footer() {

  const [language, setLanguage] = useState(languages.at(0))
  const [currency, setCurrency] = useState(currencies.at(0))

  return (
    <div className='bg-gray-50 py-10 lg:px-24 md:px-16 px-5 w-full flex flex-col gap-y-10 text-sm'>
      <div className='flex sm:flex-row flex-col'>
        <div className='grid sm:grid-cols-4 gap-10 sm:gap-0 mb-10 sm:mb-0 grid-cols-2 grid-flow-row sm:w-4/5 w-full'>
          {footerData.map((el) => {
            return (
              <div className='flex flex-col gap-y-3' key={el.title}>
                <div className='text-gray-400'>
                  {el.title.toLocaleUpperCase()}
                </div>
                <div className='flex flex-col gap-y-3'>
                  {el.links.map((link) => {
                    return (
                      <a href={link.href} key={link.title} className='text-gray-500 hover:underline hover:cursor-pointer w-fit '>
                        {link.title}
                      </a>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className='flex flex-col gap-y-3'>
          <div className='text-gray-400'>
            LANGUAGE AND CURRENCY
          </div>
          <div>
            <Selector
              value={language}
              onValueChange={setLanguage}
              values={languages}
            />
          </div>
          <div>
            <Selector
              value={currency}
              onValueChange={setCurrency}
              values={currencies}
            />
          </div>
        </div>
      </div>
      <div className='border-t-2' />
      <div className='flex justify-between sm:items-center gap-x-5 sm:flex-row flex-col'>
        <div className='mb-5 sm:mb-0'>
          <div className='text-gray-400 mb-3'>
            SUBSCRIBE TO OUR NEWSLETTER
          </div>
          <div className='text-gray-500'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </div>
        </div>
        <div className='flex gap-x-5 h-[40px] w-full sm:w-auto'>
          <input
            className='border-2 rounded p-2 lg:pr-12 sm:w-auto w-full
            '
            type='email'
            placeholder='Enter your email'
          />
          <button
            className={classNames(
              'flex justify-center items-center rounded-md border border-transparent',
              'bg-indigo-500 py-2 px-5 text-sm font-medium text-white',
              'hover:bg-indigo-700 hover:underline focus:outline-none',
              'focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            )}
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className='border-t-2' />
      <div className='flex justify-between items-center sm:gap-y-0 gap-y-5 sm:flex-row flex-col'>
        <div className='text-gray-400'>
          © 2021 GearedApp, Inc. All rights reserved.
        </div>
        <div className='flex gap-x-10 '>
          {footerIcons.map((el) => {
            return (
              <img src={el.icon.src} key={el.title} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Footer