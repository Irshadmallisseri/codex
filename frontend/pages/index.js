import { useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')

  const sendMessage = async () => {
    setResponse('...')
    const res = await fetch('http://localhost:8000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    })
    const data = await res.json()
    setResponse(data.response)
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Assistant</h1>
      <textarea
        rows="4"
        cols="50"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button onClick={sendMessage}>Send</button>
      <p>{response}</p>
    </div>
  )
}
