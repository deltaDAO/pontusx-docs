'use client'

import { PontusXIdentity } from '@deltadao/pontusx-registry-hooks'
import { useMemo } from 'react'

export interface CompanyGroup {
  legalName: string | null
  /** Unique key for React / expansion state */
  key: string
  identities: PontusXIdentity<'v1'>[]
  /** True when addresses within this group have differing presentationUrls */
  hasMismatchedPresentations: boolean
  /** Distinct non-null presentationUrls found in this group */
  uniquePresentationUrls: string[]
}

interface UseParticipantSearchResult {
  filteredGroups: CompanyGroup[]
  /** Groups that should be auto-expanded because the query matched a wallet address */
  addressMatchKeys: Set<string>
  /** Lower-cased wallet addresses that directly matched the query (empty when the hit was only on company name) */
  matchedWalletAddresses: Set<string>
}

export function useParticipantSearch(
  groups: CompanyGroup[],
  query: string,
): UseParticipantSearchResult {
  return useMemo<UseParticipantSearchResult>(() => {
    const trimmed = (query ?? '').trim()

    if (!trimmed) {
      return { filteredGroups: groups, addressMatchKeys: new Set(), matchedWalletAddresses: new Set() }
    }

    const lower = trimmed.toLowerCase()
    const filteredGroups: CompanyGroup[] = []
    const addressMatchKeys = new Set<string>()
    const matchedWalletAddresses = new Set<string>()

    for (const group of groups) {
      const nameMatch = group.legalName?.toLowerCase().includes(lower) ?? false
      const matchingIdentities = group.identities.filter((id) =>
        id.walletAddress.toLowerCase().includes(lower),
      )
      const addressMatch = matchingIdentities.length > 0

      if (!nameMatch && !addressMatch) continue

      filteredGroups.push(group)

      // Auto-expand groups where the hit is on a wallet address (not just on the name)
      if (addressMatch) {
        addressMatchKeys.add(group.key)
        for (const id of matchingIdentities) {
          matchedWalletAddresses.add(id.walletAddress.toLowerCase())
        }
      }
    }

    return { filteredGroups, addressMatchKeys, matchedWalletAddresses }
  }, [groups, query])
}

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function SearchInput({
  value,
  onChange,
  placeholder = 'Search by institution name or addresses...',
}: SearchInputProps) {
  return (
    <div className="relative mb-3">
      <svg
        className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
      </svg>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full pl-8 pr-8 py-1.5 text-sm rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          aria-label="Clear search"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  )
}
