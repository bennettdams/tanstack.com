import * as React from 'react'
import { FaArrowLeft, FaArrowRight, FaDiscord, FaGithub } from 'react-icons/fa'
import { CgClose, CgMenuLeft } from 'react-icons/cg'
import { Link, MetaFunction, NavLink, Outlet, useMatches } from 'remix'
import { last } from '~/utils/utils'
import { useReactTableV8Config } from '../v8'
import { DocSearch } from '@docsearch/react'
import { gradientText } from './index'
import { Search } from '../../../components/Search'
import { Carbon } from '~/components/Carbon'
import { seo } from '~/utils/seo'
import { LinkOrA } from '~/components/LinkOrA'
import { Docs, DocsConfig } from '~/components/Docs'

const logo = (
  <>
    <Link to="/" className="font-light">
      TanStack
    </Link>
    <Link to=".." className={`font-bold`}>
      <span className={`${gradientText}`}>Table</span>{' '}
      <span className="text-sm align-super">v8</span>
    </Link>
  </>
)

const localMenu = {
  label: 'Menu',
  children: [
    {
      label: 'Home',
      to: '..',
    },
    {
      label: (
        <div className="flex items-center gap-2">
          Github <FaGithub className="text-lg opacity-20" />
        </div>
      ),
      to: 'https://github.com/tanstack/table',
    },
    {
      label: (
        <div className="flex items-center gap-2">
          Discord <FaDiscord className="text-lg opacity-20" />
        </div>
      ),
      to: 'https://tlinz.com/discord',
    },
  ],
}

export let meta: MetaFunction = () => {
  return seo({
    title:
      'TanStack Table Docs | React Table, Solid Table, Svelte Table, Vue Table',
    description:
      'Headless UI for building powerful tables & datagrids with TS/JS, React, Solid, Svelte and Vue',
  })
}

export default function RouteReactTable() {
  let config = useReactTableV8Config()

  config = React.useMemo(
    () =>
      ({
        ...config,
        menu: [localMenu, ...config.menu],
      } as DocsConfig),
    [config]
  )

  return (
    <Docs
      {...{
        logo,
        colorFrom: 'from-rose-500',
        colorTo: 'to-violet-500',
        textColor: 'text-violet-500',
        config,
      }}
    />
  )
}
