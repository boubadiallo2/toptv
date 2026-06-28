import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="container" style={{ marginTop: '2rem' }}>
      
      {/* Banner Ad */}
      <div style={{ backgroundColor: '#e0e0d8', padding: '3rem', textAlign: 'center', marginBottom: '2rem', borderRadius: '4px' }}>
        <p style={{ letterSpacing: '2px', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--muted)' }}>BANNIÈRE PUBLICITAIRE 3</p>
        <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '0.5rem' }}>300 × 600 PX — ESPACE C</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        {/* Main Article (Left) */}
        <article>
          <div style={{ backgroundColor: '#1c4f82', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', opacity: 0.9, borderRadius: '4px', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'normal', opacity: 0.5 }}>Politique</h2>
          </div>
          <div>
            <span style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.3rem 0.6rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', borderRadius: '2px' }}>Politique</span>
            <Link href="/article/reforme-budgetaire">
              <h2 style={{ fontSize: '2.8rem', margin: '1rem 0', lineHeight: 1.1, color: 'var(--foreground)' }} className="hover-scale">
                La réforme budgétaire au cœur des débats parlementaires
              </h2>
            </Link>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '1rem' }}>
              Le gouvernement présente son projet de loi de finances rectificatif devant l&apos;Assemblée nationale.
            </p>
            <p style={{ fontSize: '0.9rem' }}>
              <span className="text-primary" style={{ fontWeight: 'bold' }}>Marie Lefebvre</span> <span style={{ color: '#aaa', marginLeft: '1rem' }}>17 avril 2026</span>
            </p>
          </div>
        </article>

        {/* Side Articles (Right) */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '2rem', borderLeft: '1px solid var(--border)', paddingLeft: '2rem' }}>
          <article>
            <span className="text-primary" style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Économie</span>
            <Link href="/article/inflation">
              <h3 style={{ fontSize: '1.4rem', margin: '0.5rem 0' }}>L&apos;inflation recule pour le troisième mois consécutif</h3>
            </Link>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
              Les chiffres confirment une tendance durable à la stabilisation des prix...
            </p>
            <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Jean-Paul Moreau · 17 avril 2026</p>
          </article>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border)' }} />

          <article>
            <span className="text-primary" style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Sport</span>
            <Link href="/article/ligue-des-champions">
              <h3 style={{ fontSize: '1.4rem', margin: '0.5rem 0' }}>Ligue des Champions : résultats des quarts de finale</h3>
            </Link>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
              Découvrez tous les résultats et moments forts des matchs retour...
            </p>
            <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Marc Leblanc · 16 avril 2026</p>
          </article>
        </aside>
      </div>
    </section>
  );
}
