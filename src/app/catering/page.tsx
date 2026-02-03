"use client"

import { Base, Heading, Paragraph } from "@/src/components"
import { useMenu } from "@/src/utils/hooks/useMenu"
import { Grid } from "@mui/material"

export default function Page() {
  const { getCategory } = useMenu()
  const catering = getCategory("Catering")

  return (
    <Base>
      <Grid container flexDirection="column">
        <Grid>
          <Heading>Catering</Heading>
        </Grid>
        <Grid>
          {catering.map((cateringItem, i) => (
            <Grid key={i}>
              <Paragraph>{cateringItem.item}</Paragraph>
              <Paragraph>
                {cateringItem.price} {cateringItem.notes}
              </Paragraph>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Base>
  )
}
