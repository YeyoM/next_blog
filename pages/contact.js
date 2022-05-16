import ContactForm from '../components/contact/contact-form'
import React, { Fragment } from 'react'
import Head from 'next/head'

export default function ContactPage () {
  return (
    <Fragment>
      <Head>
        <title>Send me an Email</title>
        <meta name='description' content='Send me an Email'/>
      </Head>
    <ContactForm/>
    </Fragment>
  )
}
