import { Paragraph } from "@/src/components"
import { Grid } from "@mui/material"
import { useBreakpoints } from "../utils/hooks"

export type MenuItem = {
  item: string
  size?: string
  price: string
  notes?: string
}
export type Category =
  | "Appetizers"
  | "Catering"
  | "Pizzas"
  | "Specialty Pizza"
  | "Vegan Pizzas"
  | "Salads"
  | "Pasta"
  | "Cold Subs"
  | "Oven Baked Hot Subs"
  | "Wraps"
  | "Calzones"
  | "Wings"
  | "Desserts & Drinks"

export const MenuItems = ({ items }: { items: MenuItem[] }) => {
  const { isMobile } = useBreakpoints()

  return (
    <Grid paddingBottom="20px">
      {items.map((item, i) => (
        <Grid key={i}>
          <Paragraph
            container
            flexDirection="row"
            justifyContent="space-between"
            borderBottom="1px solid var(--secondary-color)"
            marginBottom="8px"
          >
            <Grid style={{ marginLeft: isMobile ? 0 : "24px" }}>
              {item.item} {item.size}
            </Grid>
            <Grid style={{ marginRight: isMobile ? 0 : "24px" }}>
              {item.price} {item.notes}
            </Grid>
          </Paragraph>
        </Grid>
      ))}
    </Grid>
  )
}
