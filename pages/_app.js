import '../styles/globals.css'
import Layout from '../components/layout/layout'
import React from 'react'
import Head from 'next/head'

function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/d.svg" />
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
