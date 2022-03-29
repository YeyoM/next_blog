import PostItem from './post-item'
import classes from './posts-grid.module.css'

export default function PostsGrid(props) {
  
  const { posts } = props
  console.log(posts[0].slug)

  return (
    <ul className={classes.grid}>
      {posts.map(post => (
        <PostItem 
          key={post.slug}
          post={post} 
        />
      ))}
    </ul>
  )
}