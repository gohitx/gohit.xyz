import React from 'react'

export const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    // class="h-5 w-5 text-blue-500 opacity-0 transition-opacity group-hover:opacity-100 dark:text-blue-400"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)
