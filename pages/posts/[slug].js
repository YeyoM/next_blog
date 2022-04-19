import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util"

export default function PostDetailPage(props) {
  return (
    <PostContent post={props.post} />
  )
}

export function getStaticProps(context) {
  const { params } = context
  const { slug } = params
  const post = getPostData(slug)
  return {
    props: {
      post
    }, 
    revalidate: 600
  }
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles()
  const slugs = postFilenames.map(postFilename => postFilename.replace(/\.md$/, ''))
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false
  }
}