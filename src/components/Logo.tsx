'use client';

export function Logo() {
  return (
    <svg className="stroke-current text-white dark:text-primary w-20 h-20" width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="4" fill="none"></circle>
      <path d="M 50 170 L 50 70 L 75 70 L 100 120 L 125 70 L 150 70 L 150 170" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
      <path d="M 50 50 L 50 30 L 110 30 Q 140 30 140 60 Q 140 90 110 90 L 75 90 L 75 70" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
      <line x1="50" y1="170" x2="150" y2="170" stroke="currentColor" strokeWidth="3" strokeLinecap="round"></line>
    </svg>
  );
};