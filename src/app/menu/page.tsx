"use client"

import {
  Base,
  Category,
  Heading,
  MenuItem,
  MenuItems,
  Paragraph,
} from "@/src/components"
import { useMenu } from "@/src/utils/hooks/useMenu"
import { Grid } from "@mui/material"
import bouncingCircles from "@/public/bouncing-circles.svg"
import Image from "next/image"
import { useBreakpoints } from "@/src/utils/hooks"

export default function Page() {
  const { getCategory, loading } = useMenu()
  const { isMobile } = useBreakpoints()

  const appetizers = getCategory("Appetizers")
  const pizzas = getCategory("Pizzas")
  const specialtyPizzas = getCategory("Specialty Pizza")
  const veganPizzas = getCategory("Vegan Pizzas")
  const salads = getCategory("Salads")
  const pasta = getCategory("Pasta")
  const coldSubs = getCategory("Cold Subs")
  const hotSubs = getCategory("Oven Baked Hot Subs")
  const wraps = getCategory("Wraps")
  const calzones = getCategory("Calzones")
  const wings = getCategory("Wings")
  const dessertsDrinks = getCategory("Desserts & Drinks")

  const menuItems: Record<Exclude<Category, "Catering">, MenuItem[]> = {
    Appetizers: appetizers,
    Pizzas: pizzas,
    "Specialty Pizza": specialtyPizzas,
    "Vegan Pizzas": veganPizzas,
    Salads: salads,
    Pasta: pasta,
    "Cold Subs": coldSubs,
    "Oven Baked Hot Subs": hotSubs,
    Wraps: wraps,
    Calzones: calzones,
    Wings: wings,
    "Desserts & Drinks": dessertsDrinks,
  }

  return (
    <Base>
      <Grid container flexDirection="column">
        {Object.keys(menuItems).map((menuItemKey, i) => (
          <Grid key={i} padding="8px">
            <Grid style={{ marginLeft: isMobile ? 0 : "24px" }}>
              <Heading>{menuItemKey}</Heading>
            </Grid>
            {menuItemKey === "Pizzas" && (
              <Paragraph
                style={{
                  paddingBottom: "12px",
                  marginLeft: isMobile ? 0 : "24px",
                }}
              >
                <i>
                  Toppings include: pepperoni, sausage, ham, beef, meatballs,
                  chicken, red onion, green pepper, mushroom, artichokes,
                  jalapeño peppers, black olives, bacon, banana peppers,
                  pineapple, tomatoe, garlic, fresh spinach, green olives, feta
                  cheese, broccoli, anchovies (not included in coupon specials),
                  eggplant, cheddar cheese
                </i>
              </Paragraph>
            )}
            <Grid>
              {loading ? (
                <Image height={48} src={bouncingCircles} alt="Loading" />
              ) : (
                <MenuItems
                  items={
                    menuItems[menuItemKey as Exclude<Category, "Catering">]
                  }
                />
              )}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Base>
  )
}
