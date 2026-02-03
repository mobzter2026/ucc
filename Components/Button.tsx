'use client'

interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'danger'
  disabled?: boolean
  className?: string
}

export default function Button({ 
  onClick, 
  children, 
  variant = 'primary',
  disabled = false,
  className = ''
}: ButtonProps) {
  const baseClasses = "casino-control font-bold text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
  
  const variantClasses = {
    primary: "bg-gradient-to-b from-purple-500 to-purple-700 border-purple-400 hover:from-purple-600 hover:to-purple-800",
    secondary: "bg-gradient-to-b from-gray-500 to-gray-700 border-gray-400 hover:from-gray-600 hover:to-gray-800",
    success: "bg-gradient-to-b from-green-500 to-green-700 border-green-400 hover:from-green-600 hover:to-green-800",
    danger: "bg-gradient-to-b from-red-500 to-red-700 border-red-400 hover:from-red-600 hover:to-red-800"
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
