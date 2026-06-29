'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, FileText, PenLine, Film, PlusCircle, Globe, LogOut } from 'lucide-react'
import { logout } from '@/app/actions/auth'

export default function AdminHeader() {
  const pathname = usePathname()

  if (pathname === '/admin/login') {
    return null
  }

  return (
    <div style={{ backgroundColor: '#1a1a24', borderBottom: '1px solid #333', padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#ccc' }}>
      
      {/* Top row: Logo */}
      <div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0, letterSpacing: '-1px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.1rem 0.4rem', borderRadius: '4px', fontStyle: 'italic' }}>TOP</span>
          <span style={{ color: 'white', fontStyle: 'italic' }}>tv</span>
          <span style={{ color: 'var(--primary)' }}>+</span>
        </h1>
        <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px', color: '#888' }}>Administration</div>
      </div>

      {/* Bottom row: Navigation */}
      <nav style={{ display: 'flex', gap: '2rem', fontSize: '0.85rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Link href="/admin" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: pathname === '/admin' ? 'white' : '#888', borderBottom: pathname === '/admin' ? '2px solid var(--primary)' : '2px solid transparent', paddingBottom: '0.5rem' }}>
          <LayoutDashboard size={16} color={pathname === '/admin' ? 'var(--primary)' : 'currentColor'} />
          Tableau de bord
        </Link>
        <Link href="/admin/articles" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: pathname === '/admin/articles' ? 'white' : '#888', paddingBottom: '0.5rem' }}>
          <FileText size={16} />
          Articles
        </Link>
        <Link href="/admin/articles/new" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888', paddingBottom: '0.5rem' }}>
          <PenLine size={16} color="var(--primary)" />
          Nouvel article
        </Link>
        <Link href="/admin/media" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888', paddingBottom: '0.5rem' }}>
          <Film size={16} color="#9b59b6" />
          Vidéos & Podcasts
        </Link>
        <Link href="/admin/media/new" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888', paddingBottom: '0.5rem' }}>
          <PlusCircle size={16} color="#9b59b6" />
          Nouveau média
        </Link>
        <Link href="/" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3498db', paddingBottom: '0.5rem', marginLeft: 'auto' }}>
          <Globe size={16} />
          Voir le site
        </Link>
        <button onClick={() => logout()} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e67e22', background: 'none', border: 'none', cursor: 'pointer', paddingBottom: '0.5rem', fontSize: '0.85rem', padding: 0 }}>
          <LogOut size={16} />
          Déconnexion
        </button>
      </nav>
    </div>
  )
}
