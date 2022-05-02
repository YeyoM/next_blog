import classes from './post-header.module.css'
import React from 'react'

export default function PostHeader (props) {
  const { title } = props

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
    </header>
  )
}
