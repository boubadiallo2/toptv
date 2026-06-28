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

-- Add some initial categories based on mockups
INSERT INTO categories (name, slug, color) VALUES 
('Politique', 'politique', '#1c4f82'),
('Économie', 'economie', '#7b1f24'),
('Sport', 'sport', '#1f3e5a'),
('Société', 'societe', '#5a3d1c'),
('Environnement', 'environnement', '#1c5a24'),
('Culture', 'culture', '#4a1c5a');
