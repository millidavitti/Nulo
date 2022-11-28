import '../styles/globals.css'
import { SWRConfig } from 'swr'
import Layout from '../components/Layout/Layout'
import { AppProvider } from '../utils/AppContext'

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
