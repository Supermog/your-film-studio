import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'


const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
      <QueryClientProvider client={queryClient}>
        <div className={`flex flex-col justify-between min-h-screen`}>
          <div>
            <NavBar />
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </QueryClientProvider>
  )
}
