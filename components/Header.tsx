import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="bg-dark top-bar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
          <span>{new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/admin">Administration</Link>
            <Link href="/podcasts">Podcasts</Link>
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
          <nav style={{ display: 'flex', gap: '2rem', fontWeight: 500, fontSize: '0.9rem', textTransform: 'uppercase' }}>
            <Link href="/" className="hover-scale">Accueil</Link>
            <Link href="/rubriques" className="hover-scale">Rubriques ▾</Link>
            <Link href="/videos" className="hover-scale">Vidéos</Link>
            <Link href="/podcasts" className="hover-scale">Podcasts</Link>
            <Link href="/publicite" className="text-primary hover-scale">Publicité</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
