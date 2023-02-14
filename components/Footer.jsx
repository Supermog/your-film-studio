import { footerData, currencies, languages } from "@/util/constants"
import Selector from "./Footer/Selector"
import { useState } from "react"

function Footer() {

  const [language, setLanguage] = useState(languages.at(0))
  const [currency, setCurrency] = useState(currencies.at(0))

  return (
    <div className='bg-gray-50 p-10 flex flex-col'>
      <div className='grid grid-col-5 grid-flow-col'>
        {footerData.map((el) => {
          return (
            <div className='flex flex-col gap-y-3'>
              <div className='text-gray-400'>
                {el.title.toLocaleUpperCase()}
              </div>
              <div className='flex flex-col gap-y-3'>
                {el.links.map((link) => {
                  return (
                    <a href={link.href} className='text-gray-500 hover:underline hover:cursor-pointer w-fit '>
                      {link.title}
                    </a>
                  )
                })}
              </div>
            </div>
          )
        })}
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
    </div>
  )
}

export default Footer