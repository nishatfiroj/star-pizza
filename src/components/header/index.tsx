import { Grid } from "@mui/material"
import logo from "@/public/star-pizza-logo.svg"
import menu from "@/public/menu-icon.svg"
import Image from "next/image"
import { useBreakpoints, useCurrentPage } from "@/src/utils/hooks"
import { Pages } from "@/src/utils/types"
import { ReactNode } from "react"
import { StyledNavBarItem } from "./styled"

export function Header() {
  const { isMobile } = useBreakpoints()
  return isMobile ? <MobileHeader /> : <DesktopHeader />
}

function DesktopHeader() {
  return (
    <header>
      <Grid container alignItems="center" justifyContent="space-around">
        <Grid>
          <NavBarItem page={"home"}>
            <Image height={72} src={logo} alt={"Star Pizza"} />
          </NavBarItem>
        </Grid>
        <Grid>
          <NavBarItem page={"menu"} />
          <NavBarItem page={"catering"} />
          <NavBarItem page={"coupons"} />
          <NavBarItem page={"delivery"} />
          <NavBarItem page={"contact"} />
          <NavBarItem page={"join"} />
        </Grid>
      </Grid>
    </header>
  )
}

function NavBarItem({ page, children }: { page: Pages; children?: ReactNode }) {
  const currentPage = useCurrentPage()

  return (
    <StyledNavBarItem
      $currentpage={(currentPage == page).toString()}
      href={`/${page}`}
    >
      {page === "home" ? children : page}
    </StyledNavBarItem>
  )
}
function MobileHeader() {
  return (
    <header>
      <Grid
        container
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid>
          <Image height={56} src={logo} alt={"Star Pizza"} />
        </Grid>
        <Grid p={2}>
          <Image src={menu} width={24} height={24} alt={"Open menu"} />
        </Grid>
      </Grid>
    </header>
  )
}
