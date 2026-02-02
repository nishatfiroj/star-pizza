"use client"

import { Grid } from "@mui/material"
import { Base } from "../components/Base"
import {
  RotatingContainer,
  RotatingItem,
  Rotator,
  SupportingText,
} from "./styled"

export default function Home() {
  return (
    <Base>
      <Grid container>
        <Grid flex={1}>
          <RotatingGraphic />
        </Grid>
      </Grid>
    </Base>
  )
}

const RotatingGraphic = () => {
  return (
    <Grid container flexDirection="column" alignItems="center">
      <SupportingText>Quality is our #1 priority</SupportingText>
      <RotatingContainer>
        <Rotator>
          <RotatingItem>Fresh made dough</RotatingItem>
          <RotatingItem>Homemade sauce</RotatingItem>
          <RotatingItem>25+ years serving Roswell</RotatingItem>
          <RotatingItem>Halal choices</RotatingItem>
          <RotatingItem>Delivery and pick up!</RotatingItem>
        </Rotator>
      </RotatingContainer>
      <SupportingText>Since 1999</SupportingText>
    </Grid>
  )
}
