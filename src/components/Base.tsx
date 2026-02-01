"use client"

import { ReactNode } from "react"
import { StyledComponentsRegistry } from "./StyledComponentsRegistry"
import { Header } from "./header"

export function Base({ children }: { children: ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <Header />
      {children}
    </StyledComponentsRegistry>
  )
}
