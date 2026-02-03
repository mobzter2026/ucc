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

// Mock player data - you'll replace this with real Supabase data later
const MOCK_PLAYERS = [
  { player: 'Player 1', gamesPlayed: 15, wins: 8, runnerUps: 3, survivals: 2, losses: 2, winRate: '73' },
  { player: 'Player 2', gamesPlayed: 12, wins: 5, runnerUps: 4, survivals: 2, losses: 1, winRate: '58' },
  { player: 'Player 3', gamesPlayed: 18, wins: 6, runnerUps: 5, survivals: 4, losses: 3, winRate: '56' },
  { player: 'Player 4', gamesPlayed: 10, wins: 3, runnerUps: 2, survivals: 3, losses: 2, winRate: '45' },
]

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [activeTab, setActiveTab] = useState<'leaderboard' | 'recent'>('leaderboard')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % QUOTES.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const getMedal = (index: number) => {
    if (index === 0) return '🥇'
    if (index === 1) return '🥈'
    if (index === 2) return '🥉'
    return `${index + 1}`
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 via-70% to-slate-950 flex items-center justify-center">
        <div className="text-white text-2xl font-mono">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 via-70% to-slate-950 text-white p-2 sm:p-4 font-mono overflow-x-hidden pb-24">
      <div className="max-w-7xl mx-auto mt-4 px-2">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="w-full max-w-full text-center select-none text-[1.15rem] sm:text-[1.5rem] font-semibold tracking-[0.12em] sm:tracking-[0.16em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] mb-3 leading-tight">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
              ULTIMATE CARD CHAMPIONSHIP
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
              LEADERBOARD 🏆
            </span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base italic transition-opacity duration-500 whitespace-nowrap overflow-hidden text-ellipsis px-2">
            "{QUOTES[currentQuote]}"
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-6 mt-2 flex justify-center">
          <div className="flex gap-2 max-w-full px-2 justify-center">
            <Button
              onClick={() => setActiveTab('leaderboard')}
              variant="frosted"
              color="purple"
              selected={activeTab === 'leaderboard'}
              className="flex-1 min-w-[120px] px-2 py-1.5 text-xs sm:text-sm whitespace-nowrap text-white font-bold"
            >
              🏆 Leaderboard
            </Button>

            <Button
              onClick={() => setActiveTab('recent')}
              variant="frosted"
              color="purple"
              selected={activeTab === 'recent'}
              className="flex-1 min-w-[130px] px-2 py-1.5 text-xs sm:text-sm whitespace-nowrap text-white font-bold"
            >
              📜 Recent Games
            </Button>
          </div>
        </div>

        {/* Leaderboard Tab */}
        {activeTab === 'leaderboard' && (
          <div className="rounded-xl shadow-2xl overflow-hidden mb-8 bg-gradient-to-b from-purple-900/50 to-slate-900/60 shadow-[0_12px_25px_rgba(0,0,0,0.45),inset_0_2px_4px_rgba(255,255,255,0.08)]">
            <div className="p-4 border-b border-slate-700">
              <div className="text-center">
                <h2 className="text-lg sm:text-2xl font-bold mb-1 whitespace-nowrap" style={{fontVariant: 'small-caps'}}>
                  <span className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] uppercase">
                    The Ultimate Championship Board
                  </span> 🏆
                </h2>
                <p className="text-slate-400 text-sm mb-3 italic">Where Champions Rise and Legends Fall</p>
                <p className="text-slate-400 text-xs mb-3">
                  🏆 Wins: 100%  ⬩  🏃 2nd: 40%  ⬩  🤟🏼 Survival: 10%
                </p>
              </div>
            </div>

            <div className="overflow-x-auto backdrop-blur-sm">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700 bg-gradient-to-b from-slate-800 to-slate-900 shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.1)]">
                    <th className="text-center p-4 w-20">Rank</th>
                    <th className="text-left p-4">Player</th>
                    <th className="text-center p-2 md:p-4 text-sm md:text-base">Games</th>
                    <th className="text-center p-2 md:p-4 text-sm md:text-base">Wins</th>
                    <th className="text-center p-2 md:p-4 text-sm md:text-base">2nd</th>
                    <th className="text-center p-2 md:p-4 text-sm md:text-base">Survived</th>
                    <th className="text-center p-2 md:p-4 text-sm md:text-base">Losses</th>
                    <th className="text-center p-2 md:p-4 text-sm md:text-base">Win Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_PLAYERS.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="text-center p-8 text-slate-400">
                        No games played yet.
                      </td>
                    </tr>
                  ) : (
                    MOCK_PLAYERS.map((player, idx) => (
                      <tr 
                        key={player.player} 
                        className={`border-b border-slate-700/50 ${
                          idx < 3 ? 'bg-yellow-900/10' : ''
                        } shadow-[inset_0_1px_2px_rgba(255,255,255,0.08)] hover:bg-purple-800/20 transition-all`}
                      >
                        <td className="p-2 md:p-4 text-center text-xl md:text-2xl">
                          {getMedal(idx)}
                        </td>
                        <td className="p-2 md:p-4 font-bold text-lg md:text-xl">
                          {player.player}
                        </td>
                        <td className="text-center p-2 md:p-4 text-sm md:text-base">
                          {player.gamesPlayed}
                        </td>
                        <td className="text-center p-4 text-green-400 font-bold">
                          {player.wins}
                        </td>
                        <td className="text-center p-4 text-blue-400 font-bold">
                          {player.runnerUps}
                        </td>
                        <td className="text-center p-4 text-slate-400 font-bold">
                          {player.survivals}
                        </td>
                        <td className="text-center p-4 text-red-400 font-bold">
                          {player.losses}
                        </td>
                        <td className="text-center p-4 text-yellow-400 font-bold text-xl">
                          {player.winRate}%
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Recent Games Tab */}
        {activeTab === 'recent' && (
          <div className="rounded-xl p-6 mb-8 bg-gradient-to-b from-purple-900/50 to-slate-900/60 shadow-[0_12px_25px_rgba(0,0,0,0.45),inset_0_2px_4px_rgba(255,255,255,0.08)]">
            <div className="flex flex-col items-center mb-4 gap-2">
              <h2 className="text-xl font-bold mb-1 whitespace-nowrap">
                📜 <span className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">RECENT GAMES</span>
              </h2>
              <div className="text-sm">
                <span className="inline-block bg-green-600 text-white px-2 py-0.5 rounded mr-2 shadow-[0_4px_8px_rgba(0,0,0,0.35),inset_0_2px_6px_rgba(255,255,255,0.25)]">Winner</span>
                <span className="inline-block bg-blue-600 text-white px-2 py-0.5 rounded mr-2 shadow-[0_4px_8px_rgba(0,0,0,0.35),inset_0_2px_6px_rgba(255,255,255,0.25)]">2nd</span>
                <span className="inline-block bg-slate-600 text-white px-2 py-0.5 rounded mr-2 shadow-[0_4px_8px_rgba(0,0,0,0.35),inset_0_2px_6px_rgba(255,255,255,0.25)]">Survivors</span>
                <span className="inline-block bg-red-600 text-white px-2 py-0.5 rounded shadow-[0_4px_8px_rgba(0,0,0,0.35),inset_0_2px_6px_rgba(255,255,255,0.25)]">Loser</span>
              </div>
            </div>
            <div className="text-center p-8 text-slate-400">
              No recent games to display.
            </div>
          </div>
        )}

        {/* Footer Links */}
        <div className="text-center mt-8 space-x-4">
          <a href="/admin/login" className="text-slate-400 hover:text-slate-200 text-sm">Admin Login</a>
          <span className="text-slate-600">|</span>
          <a href="/user/login" className="text-slate-400 hover:text-slate-200 text-sm">User Login</a>
        </div>
      </div>
    </div>
  )
}
