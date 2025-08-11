'use client';

import { useState, useRef } from 'react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <button
        onClick={toggleMusic}
        id="music-btn"
        aria-label="Toggle music"
        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        {isPlaying ? (
          <svg
            id="music-pause"
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="inline-block"
          >
            <rect x="6" y="4" width="4" height="16" strokeWidth="2" />
            <rect x="14" y="4" width="4" height="16" strokeWidth="2" />
          </svg>
        ) : (
          <svg
            id="music-play"
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="inline-block"
          >
            <polygon points="5,3 19,12 5,21" strokeWidth="2" />
          </svg>
        )}
      </button>
      <audio
        ref={audioRef}
        id="audio"
        src="/music.mp3"
        loop
        onEnded={() => setIsPlaying(false)}
      />
    </>
  );
} 