import seats from '@/public/Seats.jpg'
import gearedAppLogo from '@/public/GearedAppLogo.svg'
import logo from '@/public/Mark.svg'
import {
  ChevronRightIcon,
  StarIcon
} from '@heroicons/react/20/solid'
import classNames from '@/util/classNames'
import { stats } from '@/util/constants'

function Home() {

  return (
    <>
      <div className='h-full flex flex-col lg:gap-40 gap-24 mb-16'>
        <div className={`mt-10 flex flex-col sm:flex-row sm:justify-between h-[550px]`}>
          <div className='lg:w-1/2 p-3 m-3 sm:p-10 sm:m-10'>
            <div className='sm:block flex justify-center'>
              <img src={logo.src} alt='logo' className='h-[42px] rounded-xl' />
            </div>
            <div className='text-sm font-medium flex gap-2 justify-center sm:justify-start items-center mt-12'>
              <div className='bg-indigo-100 text-indigo-600 rounded-xl p-1 px-2 hover:underline hover:cursor-pointer'>
                WHAT'S NEW
              </div>
              <div className='text-indigo-600 flex items-center hover:underline hover:cursor-pointer'>
                Uncover new features
                <ChevronRightIcon className='h-5 w-5 pt-1' />
              </div>
            </div>
            <h1 className='text-5xl font-bold mt-3 sm:block flex justify-center'>
              Your film studio
            </h1>
            <p className='text-gray-500 mt-5 mb-6 sm:w-3/4'>
              Curate your perfect film lineup. With Your Film Studio, you can collaborate with friends or randomly generate watch lists based on your interests.
            </p>
            <div className='flex gap-3 flex-col sm:flex-row'>
              <input
                className='border-2 rounded p-2 pr-12'
                type='email'
                placeholder='Enter your email'
              />
              <button
                className={classNames(
                  'flex justify-center items-center rounded-md border border-transparent',
                  'bg-indigo-500 py-2 px-10 text-sm font-medium text-white',
                  'hover:bg-indigo-700 hover:underline focus:outline-none',
                  'focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                )}
              >
                Sign up
              </button>
            </div>
            <div className='flex mt-10'>
              <div className='flex border-r-2 p-1 pr-5'>
                {Array(5).fill('h-4 w-4 text-orange-300').map((el, idx) => (
                  <StarIcon key={idx} className={el} />
                ))}
              </div>
              <p className='pl-5'>
                Rated 5 stars by over 500 beta users
              </p>
            </div>
          </div>
          <div className='flex sm:justify-end hidden lg:flex w-1/2'>
            {seats?.src ? (
              <img src={seats.src} alt='seats' className='h-full w-full'/>
            ) : null}
          </div>
        </div>
        <div className='flex gap-20 lg:flex-row flex-col items-center lg:items-start'>
          <div className={classNames(
            'rounded-xl lg:ml-10 sm:bg-[url("../public/Background.jpg")]',
            'bg-gradient-to-b from-indigo-500 to-purple-900',
            'sm:h-[500px] sm:w-[560px] text-white mx-5 sm:mx-0'
          )}
          >
            <div className='sm:mt-60 mt-10 ml-7'>
              {gearedAppLogo?.src ? (
                <img src={gearedAppLogo.src} alt='GearedApp' />
              ) : null}
            </div>
            <div className='mx-10 mt-14'>
              Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. 
            </div>
            <div className='mx-10 mt-5 text-gray-300 mb-10 sm:mb-0'>
              Lara Findlay, Director GearedApp
            </div>
          </div>
          <div className='lg:mr-10 lg:w-1/2 w-5/6'>
            <h1 className='text-3xl font-bold'>
              On a mission to empower fans of Film
            </h1>
            <p className='mt-5 text-gray-500'>
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.
            </p>
            <p className='mt-5 text-gray-500'>
              Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.
            </p>
            <p className='mt-5 text-gray-500'>
              Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
            </p>
            <div className='grid grid-rows-2 grid-cols-2 grid-flow-col gap-3 mt-10'>
              {stats.map((el) => {
                return (
                  <div className='mb-10' key={el.title}>
                    <div className='border-t-2 mb-5' />
                    <p className='text-gray-500 font-medium'>
                      {el.title}
                    </p>
                    <h1 className='font-bold text-3xl'>
                      {el.data}
                    </h1>
                  </div>
                )
              })}
            </div>
            <div className='text-indigo-600 flex items-center hover:underline hover:cursor-pointer'>
                Find out what our other users say
                <ChevronRightIcon className='h-5 w-5 pt-1' />
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home