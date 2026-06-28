import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="bg-dark top-bar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem', fontSize: '1rem', fontWeight: 500 }}>
          <span>{new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/admin" className="nav-link">Administration</Link>
            <Link href="/podcasts" className="nav-link">Podcasts</Link>
          </div>
        </div>
      </div>
      <div className="main-nav" style={{ backgroundColor: 'white', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 1rem' }}>
          <Link href="/">
            <h1 className="text-primary" style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0, letterSpacing: '-1px' }}>
              <span style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0 0.5rem', borderRadius: '4px', marginRight: '4px' }}>TOP</span>tv <span style={{ color: 'var(--primary)' }}>+</span>
            </h1>
          </Link>
          <nav style={{ display: 'flex', gap: '2rem', fontWeight: 600, fontSize: '1.1rem', textTransform: 'uppercase' }}>
            <Link href="/" className="nav-link">Accueil</Link>
            <Link href="/rubriques" className="nav-link">Rubriques ▾</Link>
            <Link href="/videos" className="nav-link">Vidéos</Link>
            <Link href="/podcasts" className="nav-link">Podcasts</Link>
            <Link href="/publicite" className="text-primary nav-link">Publicité</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
