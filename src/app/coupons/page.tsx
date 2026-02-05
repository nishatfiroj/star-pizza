"use client"

import { Base, StarCard, Heading, Paragraph } from "@/src/components"
import { useBreakpoints } from "@/src/utils/hooks"
import { Grid } from "@mui/material"

export default function Page() {
  const { isMobile } = useBreakpoints()
  const size = isMobile ? 12 : 6

  return (
    <Base>
      <Grid container spacing="24px" padding="24px">
        <Grid size={size}>
          <AnniversaryCoupon />
        </Grid>
        <Grid size={size}>
          <BestInGalaxyCoupon />
        </Grid>
        <Grid size={size}>
          <GameDaySpecialCoupon />
        </Grid>
        <Grid size={size}>
          <PizzaWingComboCoupon />
        </Grid>
        <Grid size={size}>
          <FamilySpecialCoupon />
        </Grid>
        <Grid size={size}>
          <MixAndMatchCoupon />
        </Grid>
      </Grid>
    </Base>
  )
}

export const AnniversaryCoupon = () => (
  <StarCard>
    <Grid textAlign="center">
      <Heading>27 year anniversary special</Heading>
      <Paragraph>25+ years of pizza merits some special pricing!</Paragraph>
    </Grid>
    <br />
    <Grid
      flexDirection="row"
      flex={1}
      container
      spacing="16px"
      justifyContent="center"
    >
      <Grid flexDirection="column">
        <br />
        <Paragraph>2 Medium</Paragraph>
        <Paragraph>2 Large</Paragraph>
        <Paragraph>2 X Large</Paragraph>
      </Grid>
      <Grid flexDirection="column">
        <Paragraph>
          <b>1 Topping</b>
        </Paragraph>
        <Paragraph>$18.99</Paragraph>
        <Paragraph>$22.99</Paragraph>
        <Paragraph>$26.99</Paragraph>
      </Grid>
      <Grid flexDirection="column">
        <Paragraph>
          <b>3 Topping</b>
        </Paragraph>
        <Paragraph>$21.99</Paragraph>
        <Paragraph>$27.99</Paragraph>
        <Paragraph>$29.99</Paragraph>
      </Grid>
    </Grid>
  </StarCard>
)

export const BestInGalaxyCoupon = () => (
  <StarCard>
    <Grid textAlign="center" container flexDirection="column">
      <Heading>Best in the Galaxy!</Heading>
      <Paragraph> 14&quot; large pizza with 3 toppings </Paragraph>
      <Heading fontSize={24}>OR</Heading>
      <Paragraph>16&quot; extra large pizza with 1 topping for only</Paragraph>
      <Heading>$14.99</Heading>
    </Grid>
  </StarCard>
)

export const GameDaySpecialCoupon = () => (
  <StarCard>
    <Grid textAlign="center" container flexDirection="column">
      <Heading>Game Day Special</Heading>
      <Paragraph> 3 large pizzas with 1 topping for only </Paragraph>
      <Heading>$32.99</Heading>
      <Heading fontSize={24}>OR</Heading>
      <Paragraph>3 extra large cheese pizzas for only</Paragraph>
      <Heading>$36.99</Heading>
    </Grid>
    <br />
    <Grid>
      <Paragraph fontSize={12}>
        *same topping must be used for all 3 pies
      </Paragraph>
    </Grid>
  </StarCard>
)

export const PizzaWingComboCoupon = () => (
  <StarCard>
    <Grid textAlign="center" container flexDirection="column">
      <Heading>Pizza & Wing Combo</Heading>

      <Grid container flexDirection="row" justifyContent="center" spacing={4}>
        <Grid size={4}>
          <Paragraph>Large pizza with 2 toppings and 15 wings</Paragraph>
          <Heading>$29.99</Heading>
          <br />
          <Paragraph>Large pizza with 2 toppings and 10 wings</Paragraph>
          <Heading>$22.99</Heading>
        </Grid>
        <Grid size={4}>
          <Paragraph>Medium pizza with 2 toppings and 10 wings</Paragraph>
          <Heading>$21.99</Heading>
          <br />
          <Paragraph>2 Large pizza with 2 toppings and 20 wings</Paragraph>
          <Heading>$44.99</Heading>
        </Grid>
      </Grid>
    </Grid>
  </StarCard>
)

export const FamilySpecialCoupon = () => (
  <StarCard>
    <Grid textAlign="center" container flexDirection="column">
      <Heading>Family Special</Heading>
      <Paragraph>
        one large specialty pizza and one large 2-topping (add $3 for All the
        Way) for only
      </Paragraph>
      <Heading>$26.99</Heading>
      <Paragraph fontSize={12}>(add a jumbo salad for just $10.99)</Paragraph>
      <Heading fontSize={24}>OR</Heading>
      <Paragraph>
        one medium specialty and one medium 2-topping for only
      </Paragraph>
      <Heading>$21.99</Heading>
    </Grid>
  </StarCard>
)

export const MixAndMatchCoupon = () => (
  <StarCard>
    <Grid textAlign="center" container flexDirection="column">
      <Heading>Mix & Match Any 2!</Heading>
      <Paragraph>medium pizza with 1 topping </Paragraph>
      <Paragraph>gyro with fries</Paragraph>
      <Paragraph>8 wings</Paragraph>
      <Paragraph>10&quot; 3-cheese calzone with choice of 2 toppings</Paragraph>
      <Paragraph>3-cheese ravioli or spaghetti</Paragraph>
      <Paragraph>5 tenders with fries</Paragraph>
      <Paragraph>10&quot; subs (hot or cold) with fries or chips</Paragraph>
      <Heading>all for only $21.99!</Heading>
    </Grid>
  </StarCard>
)
