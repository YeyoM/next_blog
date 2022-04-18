import Image from "next/image"
import classes from "./post-header.module.css"

export default function PostHeader(props) {

  const { title } = props

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
    </header>
  )
}