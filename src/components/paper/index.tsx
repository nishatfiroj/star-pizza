import { ReactNode } from "react"
import { ResponsivePaperContainer, ResponsivePaperContent } from "./styled"
import Image from "next/image"
import background from "@/public/background.svg"
import smallBackground from "@/public/smallbackground.png"
import mobileBackground from "@/public/mobile-background.svg"
import smallMobileBackground from "@/public/small-mobile-background.png"
import { useBreakpoints } from "@/src/utils/hooks"

export function Paper({
  children,
  small = false,
}: {
  children: ReactNode
  small?: boolean
}) {
  const { isMobile } = useBreakpoints()
  let src = undefined
  if (isMobile && small) {
    src = smallMobileBackground
  } else if (isMobile && !small) {
    src = mobileBackground
  } else if (!isMobile && small) {
    src = smallBackground
  } else {
    src = background
  }

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
          <Image src={src} alt="" />
        </div>
      </ResponsivePaperContainer>
    </div>
  )
}
