import { Fragment } from 'react'

import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-next-js',
    title: 'Getting started with Next.js',
    image: 'getting-started-nextjs.png',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices eros, eu porttitor nunc nisl euismod nunc. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices eros, eu porttitor nunc nisl euismod nunc.',
    date: '2020-02-01',
  },
  {
    slug: 'getting-started-with-next-js2',
    title: 'Getting started with Next.js',
    image: 'getting-started-nextjs.png',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices eros, eu porttitor nunc nisl euismod nunc. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices eros, eu porttitor nunc nisl euismod nunc.',
    date: '2020-01-01',
  },
  {
    slug: 'getting-started-with-next-js3',
    title: 'Getting started with Next.js',
    image: 'getting-started-nextjs.png',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices eros, eu porttitor nunc nisl euismod nunc. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices eros, eu porttitor nunc nisl euismod nunc.',
    date: '2020-01-01',
  },
  {
    slug: 'getting-started-with-next-js4',
    title: 'Getting started with Next.js',
    image: 'getting-started-nextjs.png',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices eros, eu porttitor nunc nisl euismod nunc. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices eros, eu porttitor nunc nisl euismod nunc.',
    date: '2020-01-01',
  },
]

export default function HomePage() {

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS}/>
    </Fragment>
  )
}