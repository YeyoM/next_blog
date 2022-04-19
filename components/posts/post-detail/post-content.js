import PostHeader from "./post-header"
import classes from "./post-content.module.css"
import ReactMarkdown from "react-markdown"

export default function PostContent(props) {

  const { post } = props

  return (
    <article className={classes.content}>
      <PostHeader title={post.title}/>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  )
}