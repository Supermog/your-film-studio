import { Html, Head, Main, NextScript } from 'next/document'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function Document() {

  return (
    <Html lang='en'>
      <Head />
      <body>
        <div className={`flex flex-col justify-between min-h-screen`}>
          <div>
            <NavBar />
            <Main />
          </div>
          <Footer />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
