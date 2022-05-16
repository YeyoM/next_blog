import classes from './contact-form.module.css'
import Notification from '../ui/notification'
import React, { useState, useEffect } from 'react'

async function sendContactData ({ name, email, message }) {
  const response = await fetch('/api/contact', {
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

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Error sending message')
  }
}

export default function ContactForm () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [requestError, setRequestError] = useState()
  // can be success, pending, error
  const [requestStatus, setRequestStatus] = useState()

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null)
        setRequestError(null)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [requestStatus])

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  async function sendMessage (e) {
    e.preventDefault()
    // verificar que los datos esten completos aquiiiiii
    if (!name || !email || !message) {
      setRequestError('Missing required fields')
      setRequestStatus('error')
    } else {
      setRequestStatus('pending')
      try {
        await sendContactData(name, email, message)
        setRequestStatus('success')
        setEmail('')
        setMessage('')
        setName('')
      } catch (error) {
        setRequestError(error.message)
        setRequestStatus('error')
      }
    }
  }

  let notificationData

  if (requestStatus === 'pending') {
    notificationData = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Please wait while we send your message'
    }
  }

  if (requestStatus === 'success') {
    notificationData = {
      status: 'success',
      title: 'Message sent',
      message: 'Thank you for contacting us'
    }
  }

  if (requestStatus === 'error') {
    notificationData = {
      status: 'error',
      title: 'Error sending message',
      message: requestError
    }
  }

  return (
    <section className={classes.contact}>
      {notificationData && <Notification status={notificationData.status} title={notificationData.title} message={notificationData.message} />}
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
