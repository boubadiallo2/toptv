'use client'

import { useFormState } from 'react-dom'
import { login } from '@/app/actions/auth'
import Link from 'next/link'

const initialState = {
  error: null,
}

export default function LoginPage() {
  const [state, formAction] = useFormState(login as any, initialState)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0a0a0a', color: 'white', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: '#1a1a24', padding: '3rem', borderRadius: '8px', width: '100%', maxWidth: '400px', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
        
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Link href="/">
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0, letterSpacing: '-1px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
              <span style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.1rem 0.6rem', borderRadius: '6px', fontStyle: 'italic' }}>TOP</span>
              <span style={{ color: 'white', fontStyle: 'italic' }}>tv</span>
              <span style={{ color: 'var(--primary)' }}>+</span>
            </h1>
          </Link>
          <p style={{ color: '#888', fontSize: '0.8rem', marginTop: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Panneau d&apos;administration</p>
        </div>

        {/* Form */}
        <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Identifiant</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              required
              style={{ width: '100%', padding: '0.8rem', backgroundColor: '#111', border: '1px solid #333', borderRadius: '4px', color: 'white', outline: 'none' }}
              onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
              onBlur={(e) => e.target.style.borderColor = '#333'}
            />
          </div>

          <div>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Mot de passe</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              required
              style={{ width: '100%', padding: '0.8rem', backgroundColor: '#111', border: '1px solid #333', borderRadius: '4px', color: 'white', outline: 'none' }}
              onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
              onBlur={(e) => e.target.style.borderColor = '#333'}
            />
          </div>

          {state?.error && (
            <div style={{ color: '#ff4d4f', fontSize: '0.9rem', textAlign: 'center' }}>
              {state.error}
            </div>
          )}

          <button 
            type="submit" 
            style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--primary)', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer', marginTop: '0.5rem' }}
          >
            Accéder au panneau
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.8rem', color: '#555' }}>
          Demo — admin / admin123
        </div>
      </div>
    </div>
  )
}
