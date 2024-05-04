import styled from "styled-components"

// shared grid base
export const SharedGridMain = styled.main`
  display: grid;

  min-height: 100vh;
  @supports (min-height: 100dvh) {
    min-height: 100dvh;
  }
`
