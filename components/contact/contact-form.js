import classes from './contact-form.module.css'
import React, { useState } from 'react'

export default function ContactForm () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  function sendMessage (e) {
    e.preventDefault()

    // verificar que los datos esten completos aquiiiiii
    if (!name || !email || !message) {
      setError('Please fill out all the fields')
      setTimeout(() => {
        setError('')
      }, 4000)
      return
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    })
  }

  return (
    <section className={classes.contact}>
      {
        error && <div className={classes.alert}>{error}</div>
      }
      <h1>Send me an email</h1>
      <form className={classes.form} onSubmit={sendMessage}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input type="text" id='name' placeholder='Your name here...' onChange={handleNameChange} value={name}/>
          </div>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input type="email" id='email' placeholder='Your email here...' onChange={handleEmailChange} value={email}/>
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your message</label>
          <textarea id='message' rows='5' placeholder='Your message here...' onChange={handleMessageChange} value={message}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send it!</button>
        </div>
      </form>
    </section>
  )
}
