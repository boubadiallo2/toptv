"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function FloatingBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'relative',
      maxWidth: '1000px',
      margin: '-150px auto 3rem auto',
      zIndex: 20,
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      overflow: 'hidden'
    }}>
      <button 
        onClick={() => setIsVisible(false)}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          zIndex: 30
        }}
        aria-label="Fermer la publicité"
      >
        ✕
      </button>
      
      <div style={{ position: 'relative', width: '100%', height: '300px' }}>
        <Image 
          src="/floating_ad_banner.png"
          alt="Publicité partenaire"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
