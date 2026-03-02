import { PontusXIdentity } from '@deltadao/pontusx-registry-hooks'

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
