Random Joke Generator

This directory adds a simple random joke generator to the repository. There are two implementations included:

1) Standalone static page (public/joke.html)
   - Opens in the browser as a plain HTML page. It uses https://icanhazdadjoke.com/ to fetch jokes (no API key required).
   - Open https://your-repo.github.io/ai-style-twin/joke.html (if hosted) or open the file locally to try it.

2) React component (src/components/JokeGenerator.jsx)
   - A lightweight React component that fetches jokes from the Official Joke API: https://official-joke-api.appspot.com/random_joke
   - Drop this component into a React or Next.js page to use it.

How to use the React component (example):

import JokeGenerator from './components/JokeGenerator'

export default function Page() {
  return (
    <main>
      <JokeGenerator />
    </main>
  )
}

Notes:
- Both external APIs used here are free and do not require API keys for basic usage. They are suitable for development and demos.
- If you plan to request many jokes or use this in production, consider adding caching or an API proxy to avoid CORS/rate limits.
