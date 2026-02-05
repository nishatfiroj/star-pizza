import { Stack } from "@mui/material"
import styled from "styled-components"

export const ContactStatus = styled(Stack)<{ $status: string }>`
  font-weight: bold;
  color: var(--default-white);
  padding: 4px 8px;
  border-radius: 8px;

  ${(props) =>
    props.$status === "success"
      ? `background-color: var(--secondary-color);`
      : `background-color: var(--primary-color);`}
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2em;
  border: var(--default-text-color);
  height: auto;
`

export const Input = styled.input`
  font-size: 1.5em;
  font-family: var(--font-arvo);
  background-color: transparent;
  border: none;
  width: 100%;
  color: var(--default-text-color);
`

export const MessageInput = styled.textarea`
  background-color: transparent;
  border: 1px solid #c4c4c4;
  width: 100%;
  height: 200px;
  color: var(--default-text-color);
  font-family: var(--font-arvo);
  font-weight: 200;
  padding: 8px;
  font-size: 1.5em;
  border-radius: 4px;
`

export const InputContainer = styled.div`
  display: flex;
  gap: 1em;
  align-items: flex-end;
  flex: 1;
`

export const SubmitButton = styled.button`
  font-size: 20px;
  border-radius: 100px;
  font-weight: bold;
  background-color: var(--secondary-color);
  color: var(--default-white);
  padding: 4px 16px;
  width: 400px;
`
