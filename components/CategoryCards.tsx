import Link from 'next/link';
import { supabase } from '@/lib/supabase';

const mockCategories = [
  { name: 'Politique', slug: 'politique', color: '#1c4f82', title: 'La réforme budgétaire au cœur des débats parlementaires', desc: 'Le gouvernement présente son projet de loi de finances rectificatif devant l\'Ass...' },
  { name: 'Économie', slug: 'economie', color: '#7b1f24', title: 'L\'inflation recule pour le troisième mois consécutif', desc: 'Les chiffres confirment une tendance durable à la stabilisation des prix...' },
  { name: 'Sport', slug: 'sport', color: '#1f3e5a', title: 'Ligue des Champions : résultats des quarts de finale', desc: 'Découvrez tous les résultats et moments forts des matchs retour...' },
  { name: 'Société', slug: 'societe', color: '#5a3d1c', title: 'Nouveau plan d\'urbanisme dévoilé', desc: 'La ville présente ses projets pour les 10 prochaines années...' },
  { name: 'Environnement', slug: 'environnement', color: '#1c5a24', title: 'La transition énergétique s\'accélère', desc: 'De nouvelles mesures annoncées pour le développement des énergies renouvelables...' },
  { name: 'Culture', slug: 'culture', color: '#4a1c5a', title: 'Ouverture du nouveau musée d\'art contemporain', desc: 'L\'inauguration très attendue aura lieu ce week-end...' },
];

export default async function CategoryCards() {
  const { data: categories } = await supabase.from('categories').select('*');
  const displayCategories = categories && categories.length > 0 
    ? categories.map((cat: any, i: number) => ({
        ...cat,
        title: mockCategories[i % mockCategories.length].title, // Mock article title since articles table is empty
        desc: mockCategories[i % mockCategories.length].desc
      }))
    : mockCategories;
  return (
    <section className="container" style={{ marginTop: '4rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--muted)', margin: 0, paddingRight: '1rem', backgroundColor: 'var(--background)' }}>Nos Rubriques</h3>
        <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)' }}></div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
        {displayCategories.map((cat: any, idx: number) => (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
            <Link href={`/rubrique/${cat.slug}`}>
              <div className="hover-scale" style={{ backgroundColor: cat.color, aspectRatio: '3/2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', opacity: 0.9, borderRadius: '4px', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 'normal', opacity: 0.7 }}>{cat.name}</h2>
              </div>
            </Link>
            <span className="text-primary" style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{cat.name}</span>
            <Link href={`/article/mock-${idx}`}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', lineHeight: 1.2 }}>{cat.title}</h3>
            </Link>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>{cat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
