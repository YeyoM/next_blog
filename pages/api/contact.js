import { MongoClient } from 'mongodb'
import 'dotenv/config'

export default async function handler (req, res) {
  const URI = process.env.MONGO_URI

  if (req.method === 'POST') {
    const { name, email, message } = req.body

    if (
      !email ||
      !name ||
      !message ||
      !email.includes('@') ||
      email.trim() === '' ||
      name.trim() === '' ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Missing required fields' })
    }

    const newMessage = {
      email,
      name,
      message
    }

    let client

    try {
      client = await MongoClient.connect(URI)
    } catch (error) {
      res.status(500).json({ message: 'Error connecting to database' })
      return
    }

    const db = client.db()

    try {
      const result = await db.collection('messages').insertOne(newMessage)
      newMessage.id = result.insertedId
    } catch (error) {
      res.status(500).json({ message: 'Error inserting message' })
      return
    }

    client.close()
    res.status(201).json({ message: 'Message sent' })
  }
}
