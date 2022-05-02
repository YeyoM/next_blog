import '../styles/globals.css'
import Layout from '../components/layout/layout'
import React from 'react'
import Head from 'next/head'

function MyApp ({ Component, pageProps }) {
  const title = 'Diego\'s Blog'

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/d.svg" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
