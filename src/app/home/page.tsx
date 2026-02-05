"use client"

import { Grid } from "@mui/material"
import Image from "next/image"
import pizza from "@/public/pizza.svg"
import { useBreakpoints } from "@/src/utils/hooks"
import { RotatingContainer, Rotator, RotatingItem } from "./styled"
import { Base, Heading, Paper, Paragraph } from "@/src/components"
import { LocationCard, locations } from "./LocationCard"
import { BestInGalaxyCoupon, PizzaWingComboCoupon } from "../coupons/page"

export default function Home() {
  const { isMobile } = useBreakpoints()
  return (
    <Base>
      <Grid container flexDirection="column">
        <Grid flex={1} padding="48px">
          <RotatingGraphic />
        </Grid>

        <Grid flex={1} margin="auto" padding="56px">
          <Image src={pizza} alt="Pizza" />
        </Grid>

        <Grid marginTop="100px">
          <Paper>
            <Grid flexDirection="row" container flex={1} padding="40px">
              {locations.map((location, i) => (
                <Grid key={i} size={isMobile ? 12 : 6} paddingBottom="44px">
                  <LocationCard key={location.address} {...location} />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        <Grid
          container
          textAlign="center"
          style={{ padding: "120px 0", margin: "24px" }}
          flexDirection="column"
        >
          <Heading fontSize={64}>Big flavor, smaller bill!</Heading>
          <Grid
            spacing={4}
            flexDirection="row"
            container
            justifyContent="center"
          >
            <PizzaWingComboCoupon />
            <BestInGalaxyCoupon />
          </Grid>
        </Grid>

        <Paper small>
          <Grid container justifyContent="center">
            <Paragraph textAlign="center" maxWidth={400}>
              Star Pizza is a fully family owned and run restaurant. We opened
              our doors in the 90s and built this pizzeria and our family from
              the ground up. It is the greatest honor to continue our
              traditions!
              <br />
              <br />
              With over 25 years of experience, you can trust us to bring the
              heat, with hand-tossed dough, sauce blended to perfection, and
              imported cheeses that complete each and every pizza.
              <br />
              <br />
              We can&apos;t wait to serve you next!
            </Paragraph>
          </Grid>
        </Paper>

        <Grid style={{ padding: "120px 0" }} textAlign="center">
          <Grid
            style={{
              backgroundColor: "var(--default-text-color)",
              color: "var(--default-white)",
              padding: "12px 24px 14px",
              margin: "auto",
              maxWidth: 300,
              borderRadius: 100,
              marginBottom: "12px",
            }}
          >
            <a href="https://ordering.bigholler.com/StarPizza/">
              <Paragraph fontSize={36}>Order now</Paragraph>
            </a>
          </Grid>
          <Paragraph>A fresh pizza awaits you...</Paragraph>
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
