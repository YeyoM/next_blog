import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../lib/posts-util'
import React, { Fragment } from 'react'
import Head from 'next/head'

export default function AllPostsPage (props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name='description' content='All Posts'/>
      </Head>
    <AllPosts posts={props.posts}/>
    </Fragment>
  )
}

export function getStaticProps () {
  const allPosts = getAllPosts()
  return {
    props: {
      posts: allPosts
    }
  }
}
