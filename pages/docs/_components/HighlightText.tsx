'use client'

interface HighlightTextProps {
  text: string
  query: string
  className?: string
  highlightClassName?: string
}

/**
 * Renders `text` with every occurrence of `query` (case-insensitive) wrapped
 * in a highlighted mark element.
 */
export default function HighlightText({
  text,
  query,
  className,
  highlightClassName = 'bg-yellow-200 dark:bg-yellow-500/40 text-yellow-900 dark:text-yellow-100 rounded-sm px-0.5',
}: HighlightTextProps) {
  const safeQuery = query ?? ''
  const safeText = text ?? ''

  if (!safeQuery.trim()) {
    return <span className={className}>{safeText}</span>
  }

  const escaped = safeQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  // Use a capturing group so split() interleaves non-match / match / non-match…
  // Odd-indexed parts are the matches; avoids stateful regex.test() with the g flag.
  const parts = safeText.split(new RegExp(`(${escaped})`, 'i'))

  return (
    <span className={className}>
      {parts.map((part, i) =>
        i % 2 !== 0 ? (
          <mark key={i} className={highlightClassName}>
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </span>
  )
}
