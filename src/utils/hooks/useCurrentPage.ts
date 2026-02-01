"use client"

import { usePathname } from "next/navigation"

export const useCurrentPage = () => {
  const pathname = usePathname()
  const currentPage = pathname.slice(1)
  return currentPage.length === 0 ? "home" : currentPage
}
