import Integrations from '../public/Integrations.svg'
import PeopleWatching from '../public/PeopleWatching.svg'
import UserAnalitics from '../public/UserAnalitics.svg'
import PrivacyFirst from '../public/PrivacyFirst.svg'
import facebookIcon from '@/public/Facebook.svg'
import instagramIcon from '@/public/Instagram.svg'
import twitterIcon from '@/public/Twitter.svg'
import githubIcon from '@/public/Github.svg'
import dribbleIcon from '@/public/Dribble.svg'

export const dropdownContent = [
  {
    img: UserAnalitics.src,
    title: 'User Analitics',
    description: 'Find out what people are watching'
  },
  {
    img: PeopleWatching.src,
    title: 'People Watching',
    description: 'View films based on what others are watching.'
  },
  {
    img: PrivacyFirst.src,
    title: 'Privacy First',
    description: 'Control what other users see on your profile'
  },
  {
    img: Integrations.src,
    title: 'Integrations',
    description: 'Connect with third-party tools that you\'re already using.'
  }
]

export const stats = [
  {
    title: 'Founded',
    data: '2021'
  },
  {
    title: 'Beta Users',
    data: '521'
  },
  {
    title: 'Films',
    data: '123456'
  },
  {
    title: 'Raised',
    data: '$25M'
  }
]

export const footerData = [
  {
    title: 'Solutions',
    links: [
      {
        title: 'Marketing',
        href: ''
      },
      {
        title: 'Analytics',
        href: ''
      },
      {
        title: 'Commerce',
        href: ''
      },
      {
        title: 'Insights',
        href: ''
      }
    ]
  },
  {
    title: 'Support',
    links: [
      {
        title: 'Pricing',
        href: ''
      },
      {
        title: 'Documentation',
        href: ''
      },
      {
        title: 'Guides',
        href: ''
      },
      {
        title: 'API Status',
        href: ''
      }
    ]
  },
  {
    title: 'Company',
    links: [
      {
        title: 'About',
        href: ''
      },
      {
        title: 'Blog',
        href: ''
      },
      {
        title: 'Jobs',
        href: ''
      },
      {
        title: 'Press',
        href: ''
      },
      {
        title: 'Partners',
        href: ''
      }
    ]
  },
  {
    title: 'Legal',
    links: [
      {
        title: 'Claim',
        href: ''
      },
      {
        title: 'Privacy',
        href: ''
      },
      {
        title: 'Terms',
        href: ''
      }
    ]
  }
]

export const footerIcons = [
  {
    title: 'facebook',
    icon: facebookIcon
  },
  {
    title: 'instagram',
    icon: instagramIcon
  },
  {
    title: 'twitter',
    icon: twitterIcon
  },
  {
    title: 'github',
    icon: githubIcon
  },
  {
    title: 'dribble',
    icon: dribbleIcon
  }
]

export const languages = [
  'English',
  'Deutsch',
  'Italiano',
  'Español',
  'Français',
  'Polski'
]

export const currencies = [
  'AUD',
  'USD',
  'GBP',
  'EUR'
]

export const metricsStats = [
  {
    data: '8k+',
    description: 'Companies use laoreet amet lacus nibh integer quis.'
  },
  {
    data: '98%',
    description: 'Customer satisfaction laoreet amet lacus nibh integer quis.'
  },
  {
    data: '25k+',
    description: 'Countries around the globe lacus nibh integer quis.'
  },
  {
    data: '12m+',
    description: 'Issues resolved lacus nibh integer quis.'
  }
]

const generateYearsBetween = (startYear, endYear) => {
  const endDate = endYear || new Date().getFullYear()
  let years = []

  for (let i = startYear; i <= endDate; i++) {
    years.push(startYear.toString());
    startYear++
  }
  return years
}

export const yearValues = generateYearsBetween(1970, 2020)

export const APIkey = '3082c50c420141c82342132e685c2aaf'

export const img_url_base = 'https://image.tmdb.org/t/p/w300'

export const discoverLink = (APIkey, page, release_year_filter, genre_filter) => (
  `https://api.themoviedb.org/3/discover/movie?api_key=${APIkey}&page=${page}&primary_release_year=${release_year_filter}&with_genres=${genre_filter}`
)

export const searchLink = (APIkey, page, name) => (
  `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&page=${page}&query=${name}`
)