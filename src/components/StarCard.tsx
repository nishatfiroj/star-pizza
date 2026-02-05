import { Card, CardContent } from "@mui/material"
import React from "react"

export const StarCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card
      style={{
        boxShadow: "1px 1px 5px var(--default-text-color)",
        backgroundColor: "var(--default-white)",
      }}
    >
      <CardContent>{children}</CardContent>
    </Card>
  )
}
