"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [dateStr, setDateStr] = useState('');
  const [timeStr, setTimeStr] = useState('');

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const isHome = pathname === '/';

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setDateStr(now.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }));
      setTimeStr(now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime(); // Initial update
    const timer = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const TopColoredBar = () => (
    <div style={{ height: '8px', width: '100%', background: 'linear-gradient(to right, #e74c3c 14%, #2c3e50 14% 28%, #f1c40f 28% 42%, #3498db 42% 56%, #e67e22 56% 70%, #1abc9c 70% 84%, #9b59b6 84%)' }}></div>
  );

  const HomeNavLinks = () => (
    <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', color: '#111', letterSpacing: '0.5px', padding: '0 1rem' }}>
      <Link href="/" className="hover-text-primary" style={{ padding: '1rem 0' }}>Accueil</Link>
      <Link href="/actu" className="hover-text-primary" style={{ padding: '1rem 0', display: 'flex', alignItems: 'center', gap: '4px' }}>
        Actu en temps reel <span style={{ backgroundColor: '#e67e22', color: 'white', padding: '2px 4px', borderRadius: '4px', fontSize: '0.6rem' }}>NOUVEAU</span>
      </Link>
      <Link href="/forum" className="hover-text-primary" style={{ padding: '1rem 0', display: 'flex', alignItems: 'center', gap: '4px' }}>
        Forum <span style={{ backgroundColor: '#e67e22', color: 'white', padding: '2px 4px', borderRadius: '4px', fontSize: '0.6rem' }}>NOUVEAU</span>
      </Link>
      <Link href="/podcasts" className="hover-text-primary" style={{ padding: '1rem 0', display: 'flex', alignItems: 'center', gap: '4px' }}>
        Podcasts <span style={{ backgroundColor: '#e67e22', color: 'white', padding: '2px 4px', borderRadius: '4px', fontSize: '0.6rem' }}>NOUVEAU</span>
      </Link>
      <Link href="/pronostics" className="hover-text-primary" style={{ padding: '1rem 0', display: 'flex', alignItems: 'center', gap: '4px' }}>
        Pronostics <span style={{ backgroundColor: '#e67e22', color: 'white', padding: '2px 4px', borderRadius: '4px', fontSize: '0.6rem' }}>NOUVEAU</span>
      </Link>
    </nav>
  );

  if (isHome) {
    return (
      <header>
        <TopColoredBar />
        
        {/* Massive Background Banner for Homepage */}
        <div style={{ width: '100%', height: '350px', backgroundImage: 'url(/homepage_banner.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
          
          {/* Logo overlay on the banner */}
          <div style={{ position: 'absolute', top: '1rem', left: '2rem' }}>
            <Link href="/">
              <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: 0, letterSpacing: '-1px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.1rem 0.5rem', borderRadius: '4px', fontStyle: 'italic' }}>TOP</span>
                  <span style={{ color: 'var(--foreground)', fontStyle: 'italic' }}>tv</span>
                  <span style={{ color: 'var(--primary)' }}>+</span>
                </h1>
              </div>
            </Link>
          </div>

          {/* Date overlay on the banner */}
          <div style={{ position: 'absolute', bottom: '1rem', right: '2rem', backgroundColor: 'var(--primary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', fontWeight: 'bold' }}>
            <span style={{ textTransform: 'capitalize' }}>{dateStr}</span>
          </div>

        </div>

        {/* New Navigation Bar below banner */}
        <div style={{ backgroundColor: 'white', borderBottom: '1px solid #eee', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', position: 'relative', zIndex: 10 }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <HomeNavLinks />
            
            <div style={{ display: 'flex', height: '100%' }}>
              <Link href="/actus-ailleurs" style={{ display: 'flex', alignItems: 'center', padding: '0 1.5rem', fontWeight: 'bold', fontSize: '0.8rem', borderLeft: '1px solid #eee', color: 'var(--primary)', textTransform: 'uppercase' }}>
                Actus d'ailleurs
              </Link>
              <Link href="/admin/login" style={{ display: 'flex', alignItems: 'center', padding: '0 1.5rem', backgroundColor: '#f1c40f', color: '#111', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                Mon Compte
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // Classic Header for other pages
  return (
    <header>
      <TopColoredBar />
      <div className="bg-dark top-bar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem', fontSize: '0.8rem', fontWeight: 400, color: '#ccc' }}>
          <span style={{ textTransform: 'capitalize', minWidth: '200px' }}>{dateStr}</span>
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
        <span style={{ textTransform: 'capitalize' }}>{dateStr}</span> {timeStr && `— Mise à jour : ${timeStr}`}
      </div>
    </header>
  );
}
