import { Grid } from "@mui/material"
import logo from "@/public/star-pizza-logo.svg"
import menu from "@/public/menu-icon.svg"
import Image from "next/image"
import { useBreakpoints, useCurrentPage } from "@/src/utils/hooks"
import { Pages } from "@/src/utils/types"
import { ReactNode, useState } from "react"
import { StyledNavBarItem } from "./styled"

export function Header() {
  const { isMobile } = useBreakpoints()
  return isMobile ? <MobileHeader /> : <DesktopHeader />
}

function DesktopHeader() {
  return (
    <header>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        padding="0 24px"
      >
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
        </Grid>
      </Grid>
    </header>
  )
}

function NavBarItem({ page, children }: { page: Pages; children?: ReactNode }) {
  const currentPage = useCurrentPage()

  const href = page === "home" ? "/" : `/${page}`

  return (
    <StyledNavBarItem
      $currentpage={(currentPage === page).toString()}
      href={href}
    >
      {page === "home" ? children : page}
    </StyledNavBarItem>
  )
}
function MobileHeader() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header>
      <Grid
        container
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid>
          <NavBarItem page={"home"}>
            <Image height={72} src={logo} alt={"Star Pizza"} />
          </NavBarItem>
        </Grid>
        <Grid p={2} onClick={() => setOpenMenu(true)}>
          <Image src={menu} width={24} height={24} alt={"Open menu"} />
        </Grid>
        {openMenu && (
          <Grid
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              padding: "1em",
              width: "100%",
              height: "100%",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 10000,
              backgroundColor: "var(--secondary-color)",
            }}
          >
            <Grid container flexDirection="column">
              <NavBarItem page={"menu"} />
              <NavBarItem page={"catering"} />
              <NavBarItem page={"coupons"} />
              <NavBarItem page={"delivery"} />
              <NavBarItem page={"contact"} />
            </Grid>

            <Grid
              style={{ position: "absolute", right: 24 }}
              onClick={() => setOpenMenu(false)}
            >
              <p>X</p>
            </Grid>
          </Grid>
        )}
      </Grid>
    </header>
  )
}
