import dynamic from 'next/dynamic'
import Head from 'next/head'

const JokeGenerator = dynamic(() => import('../components/JokeGenerator'), { ssr: false })

export default function JokeDemo() {
  return (
    <>
      <Head>
        <title>Joke Generator Demo — AI Style Twin</title>
      </Head>

      <main className="min-h-screen p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-semibold mb-4">Joke Generator Demo</h1>
          <p className="text-sm text-gray-500 mb-4">This page demonstrates the JokeGenerator React component (client-side).</p>
          <JokeGenerator />
        </div>
      </main>
    </>
  )
}
