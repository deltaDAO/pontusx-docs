import { useMemo } from 'react'
import { CompanyGroup } from './types'

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
