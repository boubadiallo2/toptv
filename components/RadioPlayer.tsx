"use client";
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function RadioPlayer() {
  const pathname = usePathname();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [volume, setVolume] = useState(50);

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  if (isMinimized) {
    return (
      <button 
        onClick={() => setIsMinimized(false)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          backgroundColor: '#0a0a0a',
          color: 'white',
          border: '1px solid #333',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
        }}
      >
        <span style={{ fontSize: '1.2rem' }}>🎵</span>
      </button>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#0a0a0a',
      color: 'white',
      borderTop: '1px solid #222',
      zIndex: 1000,
      padding: '0.8rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 -4px 10px rgba(0,0,0,0.5)',
      fontFamily: 'sans-serif'
    }}>
      {/* Radio Info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
        <div style={{ 
          width: '50px', 
          height: '50px', 
          backgroundColor: '#111', 
          borderRadius: '8px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontWeight: 'bold',
          color: '#e74c3c',
          border: '1px solid #333'
        }}>
          Rfm
        </div>
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Rfm 94.0 FM</div>
          <div style={{ fontSize: '0.8rem', color: '#888', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', backgroundColor: '#e74c3c', borderRadius: '50%', animation: 'pulse 2s infinite' }}></span>
            EN DIRECT
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flex: 1, justifyContent: 'center' }}>
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          style={{
            backgroundColor: '#222',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '1.2rem'
          }}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
      </div>

      {/* Volume & Close */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1, justifyContent: 'flex-end' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>🔊</span>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            style={{ width: '100px', cursor: 'pointer' }}
          />
        </div>
        <button 
          onClick={() => setIsMinimized(true)}
          style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontSize: '1.2rem' }}
          title="Réduire le lecteur"
        >
          ✕
        </button>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}} />
    </div>
  );
}
