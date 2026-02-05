"use client"

import { Base, Heading, Paragraph } from "@/src/components"
import { CallButton, OrderOnlineButton } from "./styled"
import { Grid } from "@mui/material"

export default function Page() {
  return (
    <Base>
      <Grid
        container
        justifyContent="center"
        flexDirection="column"
        flex={1}
        alignItems="center"
        spacing={8}
      >
        <Grid textAlign="center">
          <Heading>Order delivery now!</Heading>
          <Paragraph>You can order by calling us or ordering online!</Paragraph>
        </Grid>

        <Grid container flexDirection="column" spacing={4}>
          <CallButton href="tel:+17706506717">
            Call for Roswell/East Cobb
          </CallButton>
          <CallButton href="tel:+17706673000">
            Call for Roswell/Alpharetta
          </CallButton>
          <CallButton href="tel:+16788809167">Call for Canton</CallButton>
        </Grid>

        <Grid container flexDirection="column" spacing={4}>
          <OrderOnlineButton href="https://ordering.bigholler.com/StarPizza/">
            Order online for Roswell/East Cobb
          </OrderOnlineButton>
          <OrderOnlineButton href="https://ordering.bigholler.com/StarPizzaAlpharettaHwy/">
            Order online for Roswell/Alpharetta
          </OrderOnlineButton>
          <OrderOnlineButton href="https://slicelife.com/restaurants/ga/canton/30114/star-pizza-pasta-canton/menu?rwg_token=AAiGsoYq5fksMBOmaO7I2IkAQ0vus5cQFYusHmH--uaIJ8m9BQ0kDCKuTC7H3nL7c6tyx6h9PjkcqrHrqmXkI3x-M7ccGnibCA%3D%3D">
            Order online for Canton
          </OrderOnlineButton>
        </Grid>
      </Grid>
    </Base>
  )
}
