import PostHeader from "./post-header"
import classes from "./post-content.module.css"
import ReactMarkdown from "react-markdown"
import Image from 'next/image'
import { Prism as SyntaxHighLighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function PostContent(props) {

  const { post } = props

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph
      if (node.children[0].tagName  === 'img') { 
        const image = node.children[0]
        return (
          <div className={classes.image}>
            <Image 
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              height={300}
              width={600}
              layout="responsive"
            />
          </div>
        )
      }
      return <p>{paragraph.children}</p>
    },

    code(code) {
      const { children } = code
      return (
        <SyntaxHighLighter 
          style={atomDark} 
          language='javascript' 
        >
          {children}
        </SyntaxHighLighter>
      )
    }
  }

  return (
    <article className={classes.content}>
      <PostHeader title={post.title}/>
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}