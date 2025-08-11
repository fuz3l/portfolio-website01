'use client';

import { ThemeToggle } from './ThemeToggle';
import { MusicPlayer } from './MusicPlayer';
import { ChatButton } from './ChatButton';
import { Timer } from './Timer';

export default function Footer({ authorName = "Fuzail" }) {
  return (
    <footer className="w-full flex justify-between items-end px-6 pb-4 text-sm">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4 mb-2">
          <ThemeToggle />
          <MusicPlayer />
          <ChatButton />
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <div className="flex items-center gap-2">
          <span>Made by {authorName}</span>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block">
              <path strokeWidth="2" d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.6 1.64.96c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.9 3.54 4.3-.37.1-.76.16-1.16.16-.28 0-.55-.03-.82-.08.55 1.7 2.16 2.94 4.07 2.97A9.06 9.06 0 010 21.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.87 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" />
            </svg>
          </a>
        </div>
        <div className="text-xs text-gray-400 dark:text-gray-500">
          <Timer />
        </div>
      </div>
    </footer>
  );
}
