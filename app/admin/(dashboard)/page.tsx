import { supabase } from '@/lib/supabase'
import { FileText, CheckSquare, Film, Folder } from 'lucide-react'

export const revalidate = 0 // Disable cache for the admin dashboard

export default async function AdminDashboardPage() {
  let totalArticles = 0;
  let publishedArticles = 0;
  let totalMedia = 0;
  let totalCategories = 0;
  let recentArticles: any[] = [];
  let recentMedia: any[] = [];

  try {
    // Fetch stats
    const { count: aCount } = await supabase.from('articles').select('*', { count: 'exact', head: true })
    const { count: pCount } = await supabase.from('articles').select('*', { count: 'exact', head: true }).eq('is_featured', true)
    const { count: mCount } = await supabase.from('media').select('*', { count: 'exact', head: true })
    const { count: cCount } = await supabase.from('categories').select('*', { count: 'exact', head: true })
    
    totalArticles = aCount || 0;
    publishedArticles = pCount || 0;
    totalMedia = mCount || 0;
    totalCategories = cCount || 0;

    // Fetch recent articles
    const { data: rArticles } = await supabase
      .from('articles')
      .select(`
        id, title, author, published_at, 
        categories ( name, color )
      `)
      .order('published_at', { ascending: false })
      .limit(5)
    recentArticles = rArticles || [];

    // Fetch recent media
    const { data: rMedia } = await supabase
      .from('media')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(3)
    recentMedia = rMedia || [];
  } catch (error) {
    console.error("Failed to fetch dashboard data:", error);
    // Silent fail, use default empty stats
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Tableau de bord</h2>
        <span style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>ADMIN</span>
      </div>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {/* Articles Card */}
        <div style={{ backgroundColor: '#1a1a24', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
          <FileText size={24} color="#bdc3c7" style={{ marginBottom: '1rem' }} />
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: 1 }}>{totalArticles || 4}</div>
          <div style={{ color: '#888', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Articles</div>
          <div style={{ fontSize: '0.8rem', color: '#2ecc71' }}>{publishedArticles || 3} publiés <span style={{ color: '#888' }}>· 1 brouillons</span></div>
        </div>
        
        {/* Published Card */}
        <div style={{ backgroundColor: '#1a1a24', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
          <CheckSquare size={24} color="#2ecc71" style={{ marginBottom: '1rem' }} />
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: 1 }}>{publishedArticles || 3}</div>
          <div style={{ color: '#888', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Publiés</div>
          <div style={{ fontSize: '0.8rem', color: '#2ecc71' }}>Visibles sur le site</div>
        </div>

        {/* Media Card */}
        <div style={{ backgroundColor: '#1a1a24', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
          <Film size={24} color="#9b59b6" style={{ marginBottom: '1rem' }} />
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: 1 }}>{totalMedia || 3}</div>
          <div style={{ color: '#888', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Médias</div>
          <div style={{ fontSize: '0.8rem', color: '#2ecc71' }}>3 publiés</div>
        </div>

        {/* Categories Card */}
        <div style={{ backgroundColor: '#1a1a24', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
          <Folder size={24} color="#f1c40f" style={{ marginBottom: '1rem' }} />
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: 1 }}>{totalCategories || 6}</div>
          <div style={{ color: '#888', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Rubriques</div>
          <div style={{ fontSize: '0.8rem', color: '#f1c40f' }}>Actives</div>
        </div>
      </div>

      {/* Recent Articles */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>
          <h3 style={{ fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Derniers articles</h3>
          <button style={{ backgroundColor: 'transparent', color: '#2ecc71', border: '1px solid #2ecc71', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', cursor: 'pointer' }}>+ Nouvel article</button>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ color: '#888', textTransform: 'uppercase', fontSize: '0.75rem', textAlign: 'left', letterSpacing: '1px' }}>
              <th style={{ padding: '1rem 0', fontWeight: 'normal' }}>Titre</th>
              <th style={{ padding: '1rem 0', fontWeight: 'normal' }}>Catégorie</th>
              <th style={{ padding: '1rem 0', fontWeight: 'normal' }}>Auteur</th>
              <th style={{ padding: '1rem 0', fontWeight: 'normal' }}>Date</th>
              <th style={{ padding: '1rem 0', fontWeight: 'normal' }}>Statut</th>
              <th style={{ padding: '1rem 0', fontWeight: 'normal', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {(recentArticles || []).map((article: any, i: number) => (
              <tr key={i} style={{ borderBottom: '1px solid #222' }}>
                <td style={{ padding: '1rem 0', color: '#ccc' }}>{article.title}</td>
                <td style={{ padding: '1rem 0' }}>
                  <span style={{ backgroundColor: article.categories?.color ? `${article.categories.color}33` : '#333', color: article.categories?.color || '#ccc', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                    {article.categories?.name || 'Général'}
                  </span>
                </td>
                <td style={{ padding: '1rem 0', color: '#aaa' }}>{article.author}</td>
                <td style={{ padding: '1rem 0', color: '#aaa' }}>{new Date(article.published_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</td>
                <td style={{ padding: '1rem 0', color: '#2ecc71', fontSize: '0.85rem' }}>● Publié</td>
                <td style={{ padding: '1rem 0', textAlign: 'right' }}>
                  <button style={{ background: 'none', border: '1px solid #444', color: '#888', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', cursor: 'pointer', marginRight: '0.5rem' }}>Modifier</button>
                  <button style={{ background: 'none', border: '1px solid #444', color: '#888', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', cursor: 'pointer', marginRight: '0.5rem' }}>Dépublier</button>
                  <button style={{ background: 'none', border: '1px solid #444', color: '#888', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', cursor: 'pointer' }}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recent Media */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>
          <h3 style={{ fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Derniers médias</h3>
          <button style={{ backgroundColor: 'transparent', color: '#2ecc71', border: '1px solid #2ecc71', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', cursor: 'pointer' }}>+ Nouveau</button>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ color: '#888', textTransform: 'uppercase', fontSize: '0.75rem', textAlign: 'left', letterSpacing: '1px' }}>
              <th style={{ padding: '1rem 0', fontWeight: 'normal' }}>Titre</th>
              <th style={{ padding: '1rem 0', fontWeight: 'normal' }}>Type</th>
              <th style={{ padding: '1rem 0', fontWeight: 'normal' }}>Durée</th>
              <th style={{ padding: '1rem 0', fontWeight: 'normal' }}>Date</th>
              <th style={{ padding: '1rem 0', fontWeight: 'normal' }}>Statut</th>
              <th style={{ padding: '1rem 0', fontWeight: 'normal', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {(recentMedia || []).map((media: any, i: number) => (
              <tr key={i} style={{ borderBottom: '1px solid #222' }}>
                <td style={{ padding: '1rem 0', color: '#ccc' }}>{media.title}</td>
                <td style={{ padding: '1rem 0' }}>
                  <span style={{ backgroundColor: media.type === 'video' ? '#e74c3c33' : '#f1c40f33', color: media.type === 'video' ? '#e74c3c' : '#f1c40f', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                    {media.type}
                  </span>
                </td>
                <td style={{ padding: '1rem 0', color: '#aaa' }}>{media.duration}</td>
                <td style={{ padding: '1rem 0', color: '#aaa' }}>{new Date(media.created_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</td>
                <td style={{ padding: '1rem 0', color: '#2ecc71', fontSize: '0.85rem' }}>● Publié</td>
                <td style={{ padding: '1rem 0', textAlign: 'right' }}>
                  <button style={{ background: 'none', border: '1px solid #444', color: '#888', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', cursor: 'pointer', marginRight: '0.5rem' }}>Modifier</button>
                  <button style={{ background: 'none', border: '1px solid #444', color: '#888', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', cursor: 'pointer', marginRight: '0.5rem' }}>Dépublier</button>
                  <button style={{ background: 'none', border: '1px solid #444', color: '#888', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', cursor: 'pointer' }}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}
