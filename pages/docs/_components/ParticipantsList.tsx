'use client'
import { PontusXIdentity, usePontusXRegistry } from '@deltadao/pontusx-registry-hooks'
import { useMemo, useState } from 'react'
import InfoIcon from './icons/Info'
import ExternalLinkIcon from './icons/ExternalLink'

interface ParticipantsListProps {
  /**
   * Optional custom registry cache base URL
   * @default "https://cache.registry.pontus-x.eu"
   */
  cacheBaseUrl?: string
  /**
   * Optional custom explorer base URL
   * @default "https://explorer.pontus-x.eu"
   */
  explorerBaseUrl?: string
}

interface CompanyGroup {
  legalName: string | null
  /** Unique key for React / expansion state */
  key: string
  identities: PontusXIdentity<'v1'>[]
  /** True when addresses within this group have differing presentationUrls */
  hasMismatchedPresentations: boolean
  /** Distinct non-null presentationUrls found in this group */
  uniquePresentationUrls: string[]
}

export default function ParticipantsList({
  cacheBaseUrl = 'https://cache.registry.pontus-x.eu/',
  explorerBaseUrl = 'https://explorer.pontus-x.eu/pontusx/test',
}: ParticipantsListProps = {}) {
  const { data, error, isLoading } = usePontusXRegistry({ apiBaseUrl: cacheBaseUrl })
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set())

  // Cast to v1 identities — deprecated identities are excluded
  const identities = useMemo(() => data as PontusXIdentity<'v1'>[] ?? [], [data])

  // Group identities by legalName, detect credential mismatches within each group
  const companyGroups = useMemo<CompanyGroup[]>(() => {
    const map = new Map<string, PontusXIdentity<'v1'>[]>()

    for (const identity of identities) {
      const key = identity.legalName ?? '__unknown__'
      if (!map.has(key)) map.set(key, [])
      map.get(key)!.push(identity)
    }

    const groups: CompanyGroup[] = []
    for (const [key, members] of map) {
      const legalName = key === '__unknown__' ? null : key
      const presentationUrlSet = new Set(members.map((m) => m.presentationUrl))
      // A null mixed with a URL, or two different URLs, both count as a mismatch
      const hasMismatchedPresentations = presentationUrlSet.size > 1
      const uniquePresentationUrls = [...presentationUrlSet].filter((u): u is string => u !== null)
      groups.push({ legalName, key, identities: members, hasMismatchedPresentations, uniquePresentationUrls })
    }

    // Named companies first (alphabetical), unknown last
    return groups.sort((a, b) => {
      if (a.legalName === null) return 1
      if (b.legalName === null) return -1
      return a.legalName.localeCompare(b.legalName)
    })
  }, [identities])

  const toggleGroup = (key: string) => {
    setExpandedKeys((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const totalAddresses = companyGroups.reduce((sum, g) => sum + g.identities.length, 0)

  if (error) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-red-600 dark:text-red-400">
          Error loading registry: {error.message}
        </div>
      </div>
    )
  }

  if (!isLoading && companyGroups.length === 0) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-gray-600 dark:text-gray-400">No participants found</div>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
        <thead className="bg-gray-50 dark:bg-gray-800 sticky top-0">
          <tr>
            <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Company
            </th>
            <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Identities
            </th>
            <th scope="col" className="px-3 py-2 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Credential
            </th>
            {/* chevron column */}
            <th scope="col" className="w-8" />
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <tr key={`skeleton-${i}`} className="animate-pulse">
                <td className="px-3 py-2"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" /></td>
                <td className="px-3 py-2"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20" /></td>
                <td className="px-3 py-2"><div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded mx-auto" /></td>
                <td className="px-3 py-2"><div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded mx-auto" /></td>
              </tr>
            ))
          ) : (
            companyGroups.flatMap((group) => {
              const isExpanded = expandedKeys.has(group.key)
              // When all addresses share a single presentationUrl, surface it directly
              const sharedUrl = !group.hasMismatchedPresentations && group.uniquePresentationUrls.length === 1
                ? group.uniquePresentationUrls[0]
                : null

              const companyRow = (
                <tr
                  key={group.key}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer select-none"
                  onClick={() => toggleGroup(group.key)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      toggleGroup(group.key)
                    }
                  }}
                >
                  {/* Company name + optional warning badge */}
                  <td className="px-3 py-2 font-medium">
                    <div className="flex items-center gap-2">
                      {group.legalName
                        ? <span>{group.legalName}</span>
                        : <span className="text-gray-400 dark:text-gray-500 italic">Unknown</span>
                      }
                    </div>
                  </td>

                  {/* Address count */}
                  <td className="px-3 py-2">
                    <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                      </svg>
                      {group.identities.length}
                    </span>
                  </td>

                  {/* Credential: single link, mismatch indicator, or dash */}
                  <td className="px-3 py-2 text-center">
                    {group.hasMismatchedPresentations ? (
                      <span
                        title={`${group.uniquePresentationUrls.length} different credentials across addresses — expand to inspect`}
                        className="inline-flex items-center gap-1 text-blue-500 dark:text-blue-400 text-xs font-medium"
                      >
                        <InfoIcon className="w-3.5 h-3.5" />
                        {group.uniquePresentationUrls.length}×
                      </span>
                    ) : sharedUrl ? (
                      <a
                        href={sharedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="vocs_Anchor inline-flex items-center justify-center w-5 h-5 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                        title="View credential (JWT)"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLinkIcon />
                      </a>
                    ) : (
                      <span className="text-gray-300 dark:text-gray-600">—</span>
                    )}
                  </td>

                  {/* Chevron */}
                  <td className="pr-3 py-2 text-center">
                    <svg
                      className={`w-4 h-4 mx-auto text-gray-400 transition-transform duration-150 ${isExpanded ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </td>
                </tr>
              )

              const addressRows = isExpanded
                ? [...group.identities]
                    .sort((a, b) => a.walletAddress.localeCompare(b.walletAddress))
                    .map((identity) => {
                      const explorerUrl = `${explorerBaseUrl}/tx/${identity.txHash}?tab=tokentransfers`
                      const isMismatchedEntry = group.hasMismatchedPresentations
                      return (
                        <tr
                          key={`${identity.contractAddress}-${identity.walletAddress}`}
                          className="bg-gray-50/70 dark:bg-gray-800/40"
                        >
                          {/* Indented wallet address */}
                          <td className="pl-8 pr-3 py-1.5">
                            <span className="font-mono text-xs text-gray-600 dark:text-gray-400 break-all">
                              {identity.walletAddress}
                            </span>
                          </td>

                          {/* Token ID linking to explorer */}
                          <td className="px-3 py-1.5">
                            <a
                              href={explorerUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="vocs_Anchor inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:underline"
                              title={`View Registry ID #${identity.tokenId} on explorer`}
                            >
                              <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                              </svg>
                              Registry ID #{identity.tokenId}
                            </a>
                          </td>

                          {/* Per-address credential link; highlight if mismatched */}
                          <td className="px-3 py-1.5 text-center">
                            {identity.presentationUrl ? (
                              <a
                                href={identity.presentationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`vocs_Anchor inline-flex items-center justify-center w-5 h-5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${isMismatchedEntry ? 'text-blue-500 dark:text-blue-400' : ''}`}
                                title={isMismatchedEntry ? 'Credential differs from other addresses for this company' : 'View credential (JWT)'}
                              >
                                <ExternalLinkIcon />
                              </a>
                            ) : (
                              <span
                                className={isMismatchedEntry ? 'text-blue-400 dark:text-blue-500 text-xs' : 'text-gray-300 dark:text-gray-600'}
                                title={isMismatchedEntry ? 'No credential — differs from other addresses for this company' : undefined}
                              >
                                —
                              </span>
                            )}
                          </td>

                          <td />
                        </tr>
                      )
                    })
                : []

              return [companyRow, ...addressRows]
            })
          )}
        </tbody>
      </table>

      {/* Footer */}
      <div className="mt-0 px-3 py-2 bg-gray-50 dark:bg-gray-800 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between gap-4">
        {isLoading ? (
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-40 animate-pulse" />
        ) : (
          <>
            <span>
              {companyGroups.length} compan{companyGroups.length !== 1 ? 'ies' : 'y'}
              {' · '}
              {totalAddresses} wallet address{totalAddresses !== 1 ? 'es' : ''}
            </span>
          </>
        )}
      </div>
    </div>
  )
}
