-- Supabase Schema for TOP tv +

-- Drop tables if they exist (for easy re-runs during development)
DROP TABLE IF EXISTS media CASCADE;
DROP TABLE IF EXISTS articles CASCADE;
DROP TABLE IF EXISTS categories CASCADE;

-- 1. Categories Table
CREATE TABLE categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  slug text NOT NULL UNIQUE,
  color text DEFAULT '#000000',
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Articles Table
CREATE TABLE articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  summary text,
  content text,
  author text,
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  image_url text,
  is_featured boolean DEFAULT false,
  published_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Media Table (Videos & Podcasts)
CREATE TABLE media (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  type text NOT NULL CHECK (type IN ('video', 'podcast')),
  duration text, -- e.g., '58 min'
  video_url text,
  thumbnail_url text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Admins Table
CREATE TABLE admins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text NOT NULL UNIQUE,
  password text NOT NULL, -- Stored as plaintext for demo purposes as requested
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Add some initial categories based on mockups
INSERT INTO categories (name, slug, color) VALUES 
('Politique', 'politique', '#1c4f82'),
('Économie', 'economie', '#7b1f24'),
('Sport', 'sport', '#1f3e5a'),
('Société', 'societe', '#5a3d1c'),
('Environnement', 'environnement', '#1c5a24'),
('Culture', 'culture', '#4a1c5a');

-- Add the default admin account
INSERT INTO admins (username, password) VALUES ('admin', 'admin123');

-- Add dummy articles for the dashboard
DO $$
DECLARE
  cat_politique uuid;
  cat_economie uuid;
  cat_sport uuid;
  cat_culture uuid;
BEGIN
  SELECT id INTO cat_politique FROM categories WHERE slug = 'politique';
  SELECT id INTO cat_economie FROM categories WHERE slug = 'economie';
  SELECT id INTO cat_sport FROM categories WHERE slug = 'sport';
  SELECT id INTO cat_culture FROM categories WHERE slug = 'culture';

  INSERT INTO articles (title, slug, summary, author, category_id, published_at) VALUES 
  ('La réforme budgétaire au cœur des débats parlementaires', 'reforme-budgetaire', 'Summary...', 'Marie Lefebvre', cat_politique, '2026-04-17 10:00:00'),
  ('L''inflation recule pour le troisième mois consécutif', 'inflation-recule', 'Summary...', 'Jean-Paul Moreau', cat_economie, '2026-04-17 09:00:00'),
  ('Ligue des Champions : résultats des quarts de finale', 'lbc-resultats', 'Summary...', 'Marc Leblanc', cat_sport, '2026-04-16 22:00:00'),
  ('Le Festival de Cannes dévoile sa sélection officielle', 'cannes-selection', 'Summary...', 'Claire Dubois', cat_culture, '2026-04-15 14:00:00');
END $$;

-- Add dummy media for the dashboard
INSERT INTO media (title, type, duration, created_at) VALUES 
('Grand entretien : le ministre de l''Économie répond à nos questions', 'video', '58 min', '2026-04-17 11:00:00'),
('Le Débat du Soir : faut-il réformer le système électoral ?', 'podcast', '42 min', '2026-04-16 20:00:00'),
('Décryptage : comprendre la crise du logement en 20 minutes', 'podcast', '21 min', '2026-04-15 18:00:00');
