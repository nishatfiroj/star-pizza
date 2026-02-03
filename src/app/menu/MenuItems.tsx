import { Paragraph } from "@/src/components"
import { useBreakpoints } from "@/src/utils/hooks"
import { Grid } from "@mui/material"

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
    <Grid>
      {items.map((item, i) => (
        <Grid key={i}>
          <Paragraph
            container
            flexDirection="row"
            justifyContent="space-between"
            borderBottom="1px solid var(--secondary-color)"
            marginBottom="8px"
          >
            <Grid size={isMobile ? 6 : 4}>
              {item.item} {item.size}
            </Grid>
            <Grid size={isMobile ? 6 : 8}>
              {item.price} {item.notes}
            </Grid>
          </Paragraph>
        </Grid>
      ))}
    </Grid>
  )
}
