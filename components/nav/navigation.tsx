'use client'

import { useActiveSection } from '@/hooks/use-active-section'
import { navItems } from '@/lib/data'
import { DesktopNav } from './desktop-nav'
import { MobileBottomNav } from './mobile-bottom-nav'
import { MobileMenu } from './mobile-menu'

const SECTION_IDS = navItems.map((i) => i.href.slice(1))

export function Navigation() {
  const active = useActiveSection(SECTION_IDS)

  return (
    <>
      <DesktopNav active={active} />
      <MobileMenu />
      <MobileBottomNav active={active} />
    </>
  )
}
