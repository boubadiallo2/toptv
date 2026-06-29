"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="bg-dark" style={{ padding: '4rem 0', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '2rem' }}>
        <div>
          <h2 className="text-primary" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            <span style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0 0.5rem', borderRadius: '4px', marginRight: '4px' }}>TOP</span>tv <span style={{ color: 'var(--primary)' }}>+</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
            L&apos;information de référence, rigoureuse et indépendante.
          </p>
        </div>
        
        <div>
          <h4 style={{ textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', marginBottom: '1.5rem', color: 'white' }}>Rubriques</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--muted)', fontSize: '0.9rem' }}>
            <li><Link href="/politique" className="hover-scale" style={{ display: 'inline-block' }}>Politique</Link></li>
            <li><Link href="/economie" className="hover-scale" style={{ display: 'inline-block' }}>Économie</Link></li>
            <li><Link href="/sport" className="hover-scale" style={{ display: 'inline-block' }}>Sport</Link></li>
            <li><Link href="/culture" className="hover-scale" style={{ display: 'inline-block' }}>Culture</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', marginBottom: '1.5rem', color: 'white' }}>Médias</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--muted)', fontSize: '0.9rem' }}>
            <li><Link href="/videos" className="hover-scale" style={{ display: 'inline-block' }}>Vidéos</Link></li>
            <li><Link href="/podcasts" className="hover-scale" style={{ display: 'inline-block' }}>Podcasts</Link></li>
            <li><Link href="/direct" className="hover-scale" style={{ display: 'inline-block' }}>Le Direct</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', marginBottom: '1.5rem', color: 'white' }}>Le Journal</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--muted)', fontSize: '0.9rem' }}>
            <li><Link href="/a-propos" className="hover-scale" style={{ display: 'inline-block' }}>À propos</Link></li>
            <li><Link href="/contact" className="hover-scale" style={{ display: 'inline-block' }}>Contact</Link></li>
            <li><Link href="/mentions-legales" className="hover-scale" style={{ display: 'inline-block' }}>Mentions Légales</Link></li>
            <li><Link href="/abonnements" className="hover-scale text-primary" style={{ display: 'inline-block', fontWeight: 'bold' }}>Abonnez-vous</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
