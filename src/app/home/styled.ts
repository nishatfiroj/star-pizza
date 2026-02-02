import { Grid } from "@mui/material"
import styled, { keyframes } from "styled-components"

export const RotatingContainer = styled(Grid)`
  border: 1px solid var(--secondary-color);
  border-radius: 60px;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  font-family: var(--font-bebas-neue);
  font-size: 24px;
  display: flex;
  box-sizing: content-box;
`

export const Rotator = styled.div`
  height: 30px;
  overflow: hidden;
  text-align: center;
`

const spin_words = keyframes`
    10%{
        transform: translateY(-112%);
    }
    25%{
        transform: translateY(-100%);
    }
    35%{
        transform: translateY(-212%);
    }
    50%{
        transform: translateY(-200%);
    }
    60%{
        transform: translateY(-312%);
    }
    75%{
        transform: translateY(-300%);
    }
    85%{
        transform: translateY(-412%);
    }
    100%{
        transform: translateY(-400%);
    }
`

export const RotatingItem = styled.div`
  display: block;
  height: 100%;
  padding-left: 10px;
  color: var(--default-text-color);
  animation: ${spin_words} 8s infinite;
`
