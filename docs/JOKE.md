Random Joke Generator

This directory adds a simple random joke generator to the repository. The React component now supports selecting categories and a safe-mode filter using JokeAPI (https://v2.jokeapi.dev/).

Features added:
- Category selection: Any, Programming, Misc, Dark, Pun, Spooky, Christmas
- Safe mode toggle: filters NSFW / religious / political / racist / sexist / explicit content
- Support for single- and two-part jokes (setup + delivery)

Usage (React):

import JokeGenerator from './components/JokeGenerator'

export default function Page() {
  return (
    <main>
      <JokeGenerator />
    </main>
  )
}

Notes:
- The component uses the public JokeAPI (no API key required). In production, consider adding a server-side proxy or caching layer to avoid rate limits and to centralize content filtering.
- If you prefer a different set of categories, edit the CATEGORIES array in the component.
