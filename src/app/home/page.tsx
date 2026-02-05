"use client"

import { Grid } from "@mui/material"
import Image from "next/image"
import pizza from "@/public/pizza.svg"
import { useBreakpoints } from "@/src/utils/hooks"
import { RotatingContainer, Rotator, RotatingItem } from "./styled"
import { Base, Paper, Paragraph } from "@/src/components"
import { LocationCard, locations } from "./LocationCard"
import { BestInGalaxyCoupon, PizzaWingComboCoupon } from "../coupons/page"

export default function Home() {
  const { isMobile } = useBreakpoints()
  return (
    <Base>
      <Grid container flexDirection="column">
        <Grid flex={1}>
          <RotatingGraphic />
        </Grid>
        <Grid flex={1} margin="auto" padding={isMobile ? "12px" : "100px"}>
          <Image src={pizza} alt="Pizza" />
        </Grid>
        <Grid>
          <Paper>
            <Grid flexDirection="row" container flexWrap="wrap">
              {locations.map((location, i) => (
                <Grid key={i} size={6} padding="24px 16px">
                  <LocationCard key={location.address} {...location} />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        <Grid>
          <PizzaWingComboCoupon />
          <BestInGalaxyCoupon />
        </Grid>
      </Grid>
    </Base>
  )
}

const RotatingGraphic = () => {
  return (
    <Grid container flexDirection="column" alignItems="center">
      <Paragraph>Quality is our #1 priority</Paragraph>
      <RotatingContainer>
        <Rotator>
          <RotatingItem>Fresh made dough</RotatingItem>
          <RotatingItem>Homemade sauce</RotatingItem>
          <RotatingItem>25+ years serving Roswell</RotatingItem>
          <RotatingItem>Halal choices</RotatingItem>
          <RotatingItem>Delivery and pick up!</RotatingItem>
        </Rotator>
      </RotatingContainer>
      <Paragraph>Since 1999</Paragraph>
    </Grid>
  )
}
