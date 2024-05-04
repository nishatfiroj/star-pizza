import styled from "styled-components"
import { SharedGridMain } from "../../utils/shared/styled"

export const HomeMain = styled(SharedGridMain)`
  grid-template-areas:
    "ticker"
    "pizza"
    "content";
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 1fr);
`
export const TickerSection = styled.section`
  grid-area: ticker;
`
export const PizzaSection = styled.section`
  grid-area: pizza;
`
export const ContentSection = styled.section`
  grid-area: content;
`
