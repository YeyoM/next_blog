import Link from 'next/link'
import Image from 'next/image'

import classes from './post-item.module.css'

export default function PostItem(props) {

  const { title, image, excerpt, date, slug } = props

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const imagePath = `/image/posts/${slug}/${image}`

  return (
    <li className={classes.post}>
      <Link href={`/posts/${post.id}`}>
        <a>
          <div className={classes.image}>
            <Image 
              src={imagePath} 
              alt={title} 
              width={300} 
              height={200}
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}