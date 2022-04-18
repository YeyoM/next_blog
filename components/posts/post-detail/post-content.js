import PostHeader from "./post-header"
import classes from "./post-content.module.css"

const DUMMY_POST = {
  slug: 'getting-started-with-next-js',
  title: 'Getting started with Next.js',
  image: 'getting-started-nextjs.png',
  date: '2020-02-01',
  content: '# This is a first post'
}

export default function PostContent() {

  const imagePath = `/images/posts${DUMMY_POST.slug}/${DUMMY_POST.image}`

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath}/>
      <p>{DUMMY_POST.content}</p>
    </article>
  )
}