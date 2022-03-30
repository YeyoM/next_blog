import { Fragment } from 'react'
import MainNavigation from './main-navigation'

import classes from './layout.module.css'

export default function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  )
}