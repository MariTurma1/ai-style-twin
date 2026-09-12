import React, { useState } from 'react'

const CATEGORIES = ['Any', 'Programming', 'Misc', 'Dark', 'Pun', 'Spooky', 'Christmas']
const BLACKLIST = ['nsfw','religious','political','racist','sexist','explicit']

export default function JokeGenerator() {
  const [joke, setJoke] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [category, setCategory] = useState('Any')
  const [safeMode, setSafeMode] = useState(true)

  async function getJoke() {
    setLoading(true)
    setError(null)
    setJoke(null)
    try {
      const cat = category === 'Any' ? 'Any' : encodeURIComponent(category)
      const blacklist = safeMode ? `&blacklistFlags=${BLACKLIST.join(',')}` : ''
      const url = `https://v2.jokeapi.dev/joke/${cat}?type=single,twopart${blacklist}`

      const res = await fetch(url)
      if (!res.ok) throw new Error('Network response was not ok')
      const data = await res.json()

      if (data.error) {
        throw new Error(data.message || 'Joke API error')
      }

      // Joke can be single or two-part
      let text = ''
      if (data.type === 'single') {
        text = data.joke
      } else if (data.type === 'twopart') {
        text = `${data.setup}\n${data.delivery}`
      } else {
        text = JSON.stringify(data)
      }

      setJoke(text)
    } catch (err) {
      console.error(err)
      setError('Could not fetch a joke — try a different category or disable safe mode.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{padding:16, borderRadius:8, background:'#fff', boxShadow:'0 6px 18px rgba(2,6,23,0.08)', maxWidth:720}}>
      <h2 style={{marginTop:0}}>Random Joke Generator</h2>

      <div style={{display:'flex', gap:8, marginBottom:12, alignItems:'center'}}>
        <label style={{display:'flex', gap:8, alignItems:'center'}}>
          <span>Category:</span>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>

        <label style={{display:'flex', gap:8, alignItems:'center'}}>
          <input type="checkbox" checked={safeMode} onChange={(e) => setSafeMode(e.target.checked)} />
          <span>Safe mode (filter NSFW / offensive)</span>
        </label>

        <button onClick={getJoke} style={{background:'#2563eb', color:'#fff', border:0, padding:'8px 12px', borderRadius:8}}>
          New joke
        </button>
      </div>

      <p style={{whiteSpace:'pre-wrap'}}>{loading ? 'Loading...' : joke ?? 'Click "New joke" to get one.'}</p>
      {error && <p style={{color:'red'}}>{error}</p>}

      <div style={{display:'flex', gap:8, marginTop:8}}>
        <button onClick={() => { navigator.clipboard?.writeText(joke || '') }} style={{padding:'8px 12px', borderRadius:8}}>
          Copy
        </button>
        <button onClick={() => { setJoke(null); setError(null) }} style={{padding:'8px 12px', borderRadius:8}}>
          Clear
        </button>
      </div>

      <small style={{display:'block', marginTop:12, color:'#6b7280'}}>
        Source: JokeAPI (https://v2.jokeapi.dev/) — categories available: {CATEGORIES.join(', ')}
      </small>
    </div>
  )
}
