import React, { Fragment } from 'react'
import Head from 'next/head'

import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'

import { getFeaturedPosts } from '../lib/posts-util'

export default function HomePage (props) {
  const title = 'Diego\'s Blog'
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name='description' content='I blog about web technologies from the eyes of a computer science student'/>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts}/>
    </Fragment>
  )
}

export function getStaticProps () {
  const featuredPosts = getFeaturedPosts()
  return {
    props: {
      posts: featuredPosts
    }
  }
}
