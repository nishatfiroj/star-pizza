"use client"

import { ReactNode } from "react"
import { Header } from ".."

type Props = { children: ReactNode }
export function Base({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
