'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (name: string, email: string, password: string) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in (from localStorage)
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const signIn = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock authentication - replace with real API
    // Demo credentials: demo / demo
    if ((email === 'demo' && password === 'demo') || (email && password)) {
      const user = {
        id: '1',
        email: email === 'demo' ? 'demo@arexaai.com' : email,
        name: email === 'demo' ? 'Demo User' : email.split('@')[0]
      }
      setUser(user)
      localStorage.setItem('user', JSON.stringify(user))
      router.push('/app')
    } else {
      throw new Error('Invalid credentials')
    }
  }

  const signUp = async (name: string, email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock registration - replace with real API
    if (name && email && password) {
      const user = {
        id: '1',
        email,
        name
      }
      setUser(user)
      localStorage.setItem('user', JSON.stringify(user))
      router.push('/app')
    } else {
      throw new Error('Registration failed')
    }
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem('user')
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
