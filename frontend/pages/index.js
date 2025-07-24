import { useState } from 'react'

export default function Home() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return
    const history = [...messages, { sender: 'user', text: input }]
    setMessages(history)
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      })
      if (!res.ok) throw new Error('Request failed')
      const data = await res.json()
      setMessages([...history, { sender: 'ai', text: data.response }])
    } catch (err) {
      setMessages([...history, { sender: 'ai', text: 'Error: ' + err.message }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Assistant</h1>
      <div style={{ maxWidth: 600, marginBottom: 20 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.sender === 'user' ? 'right' : 'left', margin: '5px 0' }}>
            <span style={{
              display: 'inline-block',
              padding: '8px 12px',
              borderRadius: 12,
              background: m.sender === 'user' ? '#d1e7dd' : '#f8d7da'
            }}>{m.text}</span>
          </div>
        ))}
        {loading && <p>Typing...</p>}
      </div>
      <textarea
        rows="4"
        cols="50"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <button onClick={sendMessage} disabled={loading}>Send</button>
    </div>
  )
}
