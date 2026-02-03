'use client'

interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'pop' | 'frosted'
  color?: 'purple' | 'blue' | 'red' | 'green'
  selected?: boolean
  disabled?: boolean
  className?: string
}

export default function Button({ 
  onClick, 
  children, 
  variant = 'primary',
  color = 'purple',
  selected = false,
  disabled = false,
  className = ''
}: ButtonProps) {
  const baseClasses = "font-bold text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all"
  
  const variantClasses = {
    primary: "casino-control bg-gradient-to-b from-purple-500 to-purple-700 border-purple-400 hover:from-purple-600 hover:to-purple-800",
    secondary: "casino-control bg-gradient-to-b from-gray-500 to-gray-700 border-gray-400 hover:from-gray-600 hover:to-gray-800",
    success: "casino-control bg-gradient-to-b from-green-500 to-green-700 border-green-400 hover:from-green-600 hover:to-green-800",
    danger: "casino-control bg-gradient-to-b from-red-500 to-red-700 border-red-400 hover:from-red-600 hover:to-red-800",
    pop: `rounded-lg px-4 py-2 shadow-[0_4px_8px_rgba(0,0,0,0.35),inset_0_2px_6px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95 ${
      color === 'blue' ? 'bg-gradient-to-br from-blue-600 to-blue-800' :
      color === 'red' ? 'bg-gradient-to-br from-red-600 to-red-800' :
      color === 'green' ? 'bg-gradient-to-br from-green-600 to-green-800' :
      'bg-gradient-to-br from-purple-600 to-purple-800'
    }`,
    frosted: `rounded-lg px-4 py-2 backdrop-blur-md shadow-[0_4px_8px_rgba(0,0,0,0.35),inset_0_2px_6px_rgba(255,255,255,0.25)] ${
      selected 
        ? 'bg-purple-600/90 border-2 border-purple-400' 
        : 'bg-slate-800/70 border-2 border-slate-600 hover:bg-slate-700/70'
    }`
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
