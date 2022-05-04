export default function handler (req, res) {
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

    console.log(newMessage)

    res.status(201).json({ message: 'Message sent' })
  }
}
