import { useRouter } from 'next/router'
import { ArrowLeftIcon } from '@primer/octicons-react'
import { DEFAULT_VERSION, useVersion } from 'components/hooks/useVersion'
import { Link } from 'components/Link'

export const AllProductsLink = () => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const currentVersionPathSegment = currentVersion === DEFAULT_VERSION ? '' : `/${currentVersion}`

  return (
    <li className="mt-3">
      <Link
        href={`/${router.locale}${currentVersionPathSegment}`}
        className="f6 pl-4 pr-5 ml-n1 pb-1 color-fg-default"
      >
        <ArrowLeftIcon size="small" className="mr-1" />
        All products
      </Link>
    </li>
  )
}
