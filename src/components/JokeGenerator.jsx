import React, { useState } from 'react'

export default function JokeGenerator() {
  const [joke, setJoke] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function getJoke() {
    setLoading(true)
    setError(null)
    try {
      // Official Joke API (no key required)
      const res = await fetch('https://official-joke-api.appspot.com/random_joke')
      if (!res.ok) throw new Error('Network response was not ok')
      const data = await res.json()
      setJoke(`${data.setup} ${data.punchline}`)
    } catch (err) {
      console.error(err)
      setError('Could not fetch a joke')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{padding:16, borderRadius:8, background:'#fff', boxShadow:'0 6px 18px rgba(2,6,23,0.08)', maxWidth:720}}>
      <h2 style={{marginTop:0}}>Random Joke Generator</h2>
      <p>{loading ? 'Loading...' : joke ?? 'Click the button to get a joke.'}</p>
      {error && <p style={{color:'red'}}>{error}</p>}
      <div style={{display:'flex', gap:8}}>
        <button onClick={getJoke} style={{background:'#2563eb', color:'#fff', border:0, padding:'8px 12px', borderRadius:8}}>
          New joke
        </button>
        <button onClick={() => { navigator.clipboard?.writeText(joke || '') }} style={{padding:'8px 12px', borderRadius:8}}>
          Copy
        </button>
      </div>
    </div>
  )
}
