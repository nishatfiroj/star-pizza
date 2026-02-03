"use client"

import { Base, Heading } from "@/src/components"
import { useMenu } from "@/src/utils/hooks/useMenu"
import { Grid } from "@mui/material"
import { Category, MenuItem, MenuItems } from "./MenuItems"

export default function Page() {
  const { getCategory } = useMenu()

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

  console.log(salads)

  return (
    <Base>
      <Grid container flexDirection="column">
        {Object.keys(menuItems).map((menuItemKey, i) => (
          <Grid key={i} padding="8px">
            <Grid>
              <Heading>{menuItemKey}</Heading>
            </Grid>
            <Grid>
              <MenuItems
                items={menuItems[menuItemKey as Exclude<Category, "Catering">]}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Base>
  )
}
