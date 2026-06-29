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
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 1rem' }}>
          <Link href="/">
            <h1 style={{ fontSize: '1.6rem', fontWeight: 'bold', margin: 0, letterSpacing: '-1px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.1rem 0.5rem', borderRadius: '4px', fontStyle: 'italic' }}>TOP</span>
              <span style={{ color: 'var(--foreground)', fontStyle: 'italic' }}>tv</span>
              <span style={{ color: 'var(--primary)' }}>+</span>
            </h1>
          </Link>
          <nav style={{ display: 'flex', gap: '2rem', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', color: '#444', letterSpacing: '0.5px' }}>
            <Link href="/" className="nav-link">Accueil</Link>
            <div className="dropdown-container">
              <span className="nav-link" style={{ paddingBottom: '1rem' }}>Rubriques ▾</span>
              <div className="dropdown-menu" style={{ top: '100%', marginTop: '0.5rem' }}>
                <Link href="/rubriques/politique" className="dropdown-item">Politique</Link>
                <Link href="/rubriques/economie" className="dropdown-item">Économie</Link>
                <Link href="/rubriques/sport" className="dropdown-item">Sport</Link>
                <Link href="/rubriques/societe" className="dropdown-item">Société</Link>
                <Link href="/rubriques/environnement" className="dropdown-item">Environnement</Link>
                <Link href="/rubriques/culture" className="dropdown-item">Culture</Link>
              </div>
            </div>
            <Link href="/videos" className="nav-link">Vidéos</Link>
            <Link href="/podcasts" className="nav-link">Podcasts</Link>
            <Link href="/publicite" className="nav-link" style={{ color: 'var(--foreground)' }}>Publicité</Link>
          </nav>
        </div>
      </div>
      <div style={{ backgroundColor: '#e8e8e1', borderBottom: '1px solid #d0d0c8', textAlign: 'center', padding: '0.5rem', fontSize: '0.85rem', color: 'var(--primary)' }}>
        <span style={{ textTransform: 'capitalize' }}>{new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span> — Mise à jour : {new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
      </div>
    </header>
  );
}
