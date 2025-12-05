import { PontusXIdentity, usePontusXRegistry } from '@deltadao/pontusx-registry-hooks'
import { useMemo } from 'react'

interface ParticipantsListProps {
  /**
   * Optional contract address to filter by
   */
  contractAddress?: string
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

export default function ParticipantsList({
  contractAddress,
  cacheBaseUrl = 'https://cache.registry.pontus-x.eu/',
  explorerBaseUrl = 'https://explorer.pontus-x.eu/pontusx/test',
}: ParticipantsListProps = {}) {
  const { data: identities, error, isLoading } = usePontusXRegistry({ apiBaseUrl: cacheBaseUrl })

  if (error) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-red-600 dark:text-red-400">
          Error loading registry: {error.message}
        </div>
      </div>
    )
  }

  if (!isLoading && (!identities || identities.length === 0)) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-gray-600 dark:text-gray-400">
          No participants found
        </div>
      </div>
    )
  }

  // Filter by contract address if provided
  const filteredIdentities = useMemo(()=> {
    if(!identities || identities.length === 0) return []
    return contractAddress
    ? (identities as PontusXIdentity<'v1'>[]).filter(
        (identity) =>
          identity.contractAddress.toLowerCase() ===
          contractAddress.toLowerCase()
      )
    : identities as PontusXIdentity<'v1'>[]
  }, [identities]) 

  // Sort by legal name (nulls last) and then by wallet address
  const sortedIdentities = useMemo(() => [...filteredIdentities].sort((a, b) => {
    if (a.legalName === null && b.legalName !== null) return 1
    if (a.legalName !== null && b.legalName === null) return -1
    if (a.legalName && b.legalName) {
      const nameComparison = a.legalName.localeCompare(b.legalName)
      if (nameComparison !== 0) return nameComparison
    }
    return a.walletAddress.localeCompare(b.walletAddress)
  }), [filteredIdentities])

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
        <thead className="bg-gray-50 dark:bg-gray-800 sticky top-0">
          <tr>
            <th
              scope="col"
              className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Participant
            </th>
            <th
              scope="col"
              className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Address
            </th>
            <th
              scope="col"
              className="px-3 py-2 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Credential
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {isLoading || sortedIdentities.length === 0 ? (
            // Skeleton loading rows
            Array.from({ length: 8 }).map((_, index) => (
              <tr key={`skeleton-${index}`} className="animate-pulse">
                <td className="px-3 py-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                </td>
                <td className="px-3 py-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                </td>
                <td className="px-3 py-2 flex justify-center">
                  <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </td>
              </tr>
          ))
          ) : (
            sortedIdentities.map((identity) => {
              const explorerUrl = `${explorerBaseUrl}/tx/${identity.txHash}?tab=tokentransfers`

              return (
                <tr key={`${identity.contractAddress}-${identity.walletAddress}`} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-3 py-2 text-sm font-medium">
                  {identity.legalName ? (
                    <a
                      href={explorerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vocs_Anchor hover:underline"
                      title={`View NFT #${identity.tokenId} on explorer`}
                    >
                      {identity.legalName}
                    </a>
                  ) : (
                    <span className="text-gray-500 dark:text-gray-400 italic">
                      Unknown
                    </span>
                  )}
                </td>
                <td className="px-3 py-2 text-xs font-mono text-gray-600 dark:text-gray-400">
                  {identity.walletAddress}
                </td>
                <td className="px-3 py-2 text-center">
                  {identity.presentationUrl ? (
                    <a
                      href={identity.presentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vocs_Anchor inline-flex items-center justify-center w-5 h-5 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                      title="View credential (JWT)"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-gray-300 dark:text-gray-600">—</span>
                  )}
                </td>
              </tr>
            )
          })
          )}
        </tbody>
      </table>
      <div className="mt-3 px-3 py-2 bg-gray-50 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        {isLoading ? (
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32 animate-pulse"></div>
        ) : (
          <>{sortedIdentities.length} participant{sortedIdentities.length !== 1 ? 's' : ''} total</>
        )}
      </div>
    </div>
  )
}
