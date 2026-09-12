# Random Joke Generator

This directory adds a simple random joke generator to the repository. The project includes two implementations:

1) Standalone static page (public/joke.html)
   - Opens in the browser as a plain HTML page. It uses https://icanhazdadjoke.com/ to fetch jokes (no API key required).
   - Open the file locally (public/joke.html) or host it on GitHub Pages and visit `/joke.html`.

2) React component (src/components/JokeGenerator.jsx)
   - A lightweight React component that fetches jokes from JokeAPI (https://v2.jokeapi.dev/) and supports category selection and a safe-mode filter.
   - Drop this component into a React or Next.js page to use it.

Features added
- Category selection: Any, Programming, Misc, Dark, Pun, Spooky, Christmas
- Safe mode toggle: filters NSFW / religious / political / racist / sexist / explicit content
- Support for single- and two-part jokes (setup + delivery)

Usage (React)
```jsx
import JokeGenerator from './components/JokeGenerator'

export default function Page() {
  return (
    <main>
      <JokeGenerator />
    </main>
  )
}
```

Notes
- The JokeAPI (https://v2.jokeapi.dev/) is used for the React component to enable categories and blacklist flags. No API key is required for basic usage.
- The static page uses icanhazdadjoke.com (also no key required).
- Both APIs are free for development and demos but may be rate-limited. If you run into CORS or quota issues, consider using a server-side proxy (Next.js API route) or caching responses.
