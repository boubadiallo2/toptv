import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="bg-dark top-bar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem', fontSize: '0.8rem', fontWeight: 400, color: '#ccc' }}>
          <span style={{ textTransform: 'capitalize' }}>{new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/admin" className="nav-link">Administration</Link>
            <Link href="/podcasts" className="nav-link">Podcasts</Link>
          </div>
        </div>
      </div>
      <div className="main-nav" style={{ backgroundColor: 'white', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1rem' }}>
          <Link href="/">
            <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', margin: 0, letterSpacing: '-1px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.1rem 0.8rem', borderRadius: '6px', fontStyle: 'italic' }}>TOP</span>
              <span style={{ color: 'var(--foreground)', fontStyle: 'italic' }}>tv</span>
              <span style={{ color: 'var(--primary)' }}>+</span>
            </h1>
          </Link>
          <nav style={{ display: 'flex', gap: '2rem', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', color: '#444', letterSpacing: '0.5px' }}>
            <Link href="/" className="nav-link">Accueil</Link>
            <Link href="/rubriques" className="nav-link">Rubriques ▾</Link>
            <Link href="/videos" className="nav-link">Vidéos</Link>
            <Link href="/podcasts" className="nav-link">Podcasts</Link>
            <Link href="/publicite" className="nav-link" style={{ color: 'var(--foreground)' }}>Publicité</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
