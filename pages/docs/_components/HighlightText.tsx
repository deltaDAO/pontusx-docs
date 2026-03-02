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
  if (!query.trim()) {
    return <span className={className}>{text}</span>
  }

  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`(${escaped})`, 'gi')
  const parts = text.split(regex)

  return (
    <span className={className}>
      {parts.map((part, i) =>
        regex.test(part) ? (
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
