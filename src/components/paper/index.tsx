import { ReactNode } from "react"
import { ResponsivePaperContainer, ResponsivePaperContent } from "./styled"
import Image from "next/image"
import background from "@/public/background.svg"

export function Paper({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        justifyContent: "center",
      }}
    >
      <ResponsivePaperContainer style={{ position: "relative" }}>
        <ResponsivePaperContent>{children}</ResponsivePaperContent>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image src={background} alt="" />
        </div>
      </ResponsivePaperContainer>
    </div>
  )
}
