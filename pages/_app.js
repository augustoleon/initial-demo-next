import '@/styles/globals.css'

// Toda mi app se va a renderizar desde este punto 
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  // return <Component {...pageProps} />
  return getLayout( <Component {...pageProps} /> )
}
