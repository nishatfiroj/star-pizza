"use client"

import { Base } from ".."
import { ContentSection, HomeMain, PizzaSection, TickerSection } from "./styled"

export default function Home() {
  return (
    <Base>
      <HomeMain>
        <TickerSection>Fresh pizza!</TickerSection>
        <PizzaSection>Fresh pizza!</PizzaSection>
        <ContentSection>Fresh pizza!</ContentSection>
      </HomeMain>
    </Base>
  )
}
