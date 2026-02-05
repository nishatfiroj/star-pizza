import styled from "styled-components"

export const ConfirmedEmailSnackBarContainer = styled.div`
  @keyframes snackbar {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  z-index: 7;
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -19em;
  animation-name: snackbar;
  animation-duration: 3s;
  animation-timing-function: linear;

  @media (min-width: 1200px) {
    bottom: 2em;
  }
`

export const ConfirmedEmailSnackBar = styled.div`
  z-index: 7;
  color: var(--default-text-color);

  padding: 1em 4em;

  text-align: center;
  text-transform: none;
  border-radius: 8px;
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
