'use client'

import { useEffect, useState } from 'react'
import Button from '@/Components/Button'

const QUOTES = [
  "Friendship ends where the game begins.",
  "It's not about winning, it's about making others lose.",
  "Every card tells a story of betrayal.",
  "Where loyalty dies and legends are born.",
  "Every loss is just character building… and humiliation.",
  "If at first you don't succeed… shuffle and try again.",
  "Victory is earned. Humiliation is free.",
  "Some are born winners. Others are just funny losers.",
  "The table is a battlefield. Your ego is the weapon.",
  "You can't control luck… but you can ruin everyone else's day.",
  "Pain is temporary. Bragging rights are forever.",
  "Hope your therapy sessions are ready.",
  "One table. Many casualties.",
  "Lose today. Regret tomorrow. Cry later.",
  "Your dignity called… it's filing a complaint.",
  "Lose today. Learn tomorrow. Dominate next time.",
  "Winners rise. Everyone else takes notes… or cry.",
  "Step up or step aside."
]

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % QUOTES.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 py-6 px-4 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-black text-white text-center tracking-wider drop-shadow-lg">
          🏆 UCC CHAMPIONSHIP 🏆
        </h1>
        <p className="text-center text-purple-100 mt-2 text-sm md:text-base font-semibold">
          Where Legends Are Made
        </p>
      </div>

      {/* Rotating Quote */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border-2 border-purple-500/50 shadow-xl">
          <p className="text-white text-center text-lg md:text-xl italic font-light">
            "{QUOTES[currentQuote]}"
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-4">
        <Button variant="primary" className="w-full">
          View Leaderboard
        </Button>
        
        <Button variant="success" className="w-full">
          Start New Game
        </Button>
        
        <Button variant="secondary" className="w-full">
          Game History
        </Button>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <p className="text-purple-300 text-sm">
          May the best player win... or at least survive.
        </p>
      </div>
    </div>
  )
}
