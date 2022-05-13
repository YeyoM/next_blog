import classes from './error-alert.module.css'
import React from 'react'

function ErrorAlert (props) {
  return <div className={classes.alert}>{props.children}</div>
}

export default ErrorAlert
