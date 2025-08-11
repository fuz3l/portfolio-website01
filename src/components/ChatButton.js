'use client';

export function ChatButton() {
  return (
    <button
      aria-label="Chat"
      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      <svg
        width="22"
        height="22"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="inline-block"
      >
        <path
          strokeWidth="2"
          d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
        />
      </svg>
    </button>
  );
} 