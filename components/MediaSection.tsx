import Link from 'next/link';
import { Play } from 'lucide-react';

const mediaItems = [
  { type: 'VIDÉO', title: 'Grand entretien : le ministre de l\'Économie répond à nos questions', desc: 'Une heure d\'échange sur la politique fiscale.', duration: '58 min', color: '#1f3e5a' },
  { type: 'PODCAST', title: 'Le Débat du Soir : faut-il réformer le système électoral ?', desc: 'Nos chroniqueurs croisent les points de vue.', duration: '42 min', color: '#3a2022' },
  { type: 'PODCAST', title: 'Décryptage : comprendre la crise du logement en 20 minutes', desc: 'Notre journaliste économique explique les mécanismes.', duration: '21 min', color: '#25203a' },
];

export default function MediaSection() {
  return (
    <section className="bg-dark" style={{ marginTop: '4rem', padding: '4rem 0', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#aaa', margin: 0, paddingRight: '1rem' }}>Vidéos & Podcasts</h3>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#333' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
          {mediaItems.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="hover-scale" style={{ backgroundColor: item.color, aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', marginBottom: '1rem', position: 'relative', cursor: 'pointer' }}>
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', backgroundColor: '#111', color: 'white', padding: '0.2rem 0.5rem', fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '1px' }}>
                  {item.type}
                </div>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: item.type === 'VIDÉO' ? 'var(--primary)' : 'rgba(255,255,255,0.2)', border: item.type === 'VIDÉO' ? 'none' : '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Play fill="white" color="white" size={24} style={{ marginLeft: '4px' }} />
                </div>
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', lineHeight: 1.2, color: '#f5f5f0' }}>{item.title}</h3>
              <p style={{ color: '#aaa', fontSize: '0.95rem', marginBottom: '0.8rem' }}>{item.desc}</p>
              <p style={{ fontSize: '0.85rem', color: '#ebb95e', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ display: 'inline-block', width: '12px', height: '12px', border: '1px solid currentColor', borderRadius: '50%', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: '2px', left: '5px', width: '1px', height: '4px', backgroundColor: 'currentColor' }}></span>
                  <span style={{ position: 'absolute', top: '5px', left: '5px', width: '3px', height: '1px', backgroundColor: 'currentColor' }}></span>
                </span>
                {item.duration}
              </p>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link href="/medias" style={{ color: '#ebb95e', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', fontWeight: 'bold' }} className="hover-scale">
            Voir tous les contenus →
          </Link>
        </div>
      </div>
    </section>
  );
}
