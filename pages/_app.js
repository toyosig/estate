import Router from 'next/router'
import Head from 'next/head'
import Nprogress from 'nprogress'
import { ChakraProvider } from '@chakra-ui/provider'

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
