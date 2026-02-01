import styled from "styled-components"

export const StyledNavBarItem = styled.a<{ $currentpage: string }>`
  padding: 0.75em 1em;
  font-family: var(--font-kadwa);
  ${(props) =>
    props.$currentpage === "true"
      ? `color: var(--primary-color);`
      : `color: var(--default-text-color);`}

  text-transform: uppercase;
`
