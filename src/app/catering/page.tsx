"use client"

import { Base, Heading, MenuItems, Paragraph } from "@/src/components"
import { useMenu } from "@/src/utils/hooks/useMenu"
import { Grid } from "@mui/material"

export default function Page() {
  const { getCategory } = useMenu()
  const catering = getCategory("Catering")

  return (
    <Base>
      <Grid container flexDirection="column">
        <Grid padding="12px">
          <Grid>
            <Heading>Catering</Heading>
          </Grid>
          <Paragraph padding="0 12px 32px 0">
            When you cater from Star Pizza, you get food made by a family owned
            small business with more than 20 years of experience serving the
            Roswell, East Cobb, Alpharetta, and Canton. Our pizzas and Italian
            dishes use{" "}
            <i>
              fresh hand tossed dough, homemade spiced sauce, and high quality
              mozzarella
            </i>{" "}
            that your party is sure to enjoy! Catering with Star Pizza makes
            feeding your group easy and delicious while delivering the same
            great flavors that our regular customers love.
          </Paragraph>
          <Grid>
            <MenuItems items={catering} />
          </Grid>
        </Grid>
      </Grid>
    </Base>
  )
}
