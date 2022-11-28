import '../styles/globals.css'
import { SWRConfig } from 'swr'
import { request } from 'graphql-request'
import sha256 from 'js-sha256'
import Layout from '../components/Layout/Layout'
import { AppProvider } from '../utils/AppContext'
function fetch(args) {
 return request({
  url: '/api/graphql',
  document: args.query,
  variables: args.variables,
  requestHeaders: {
   'Api-key': process.env.NEXT_PUBLIC_API_KEY,
   /* prettier-ignore */
   "X-Signature": sha256(`${process.env.NEXT_PUBLIC_API_KEY}${process.env.NEXT_PUBLIC_SECRET}${Math.floor(Date.now()/1000)}`),
   Accept: 'application/json',
  },
 })
}
export default function App({ Component: App, pageProps }) {
 return (
  <SWRConfig value={{ revalidateIfStale: false }}>
   <AppProvider>
    <Layout>
     <App {...pageProps} />
    </Layout>
   </AppProvider>
  </SWRConfig>
 )
}
