/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React from "react"

import { validateEmail, sendEmail } from "@/src/utils/helpers"
import { Grid, Stack, TextField } from "@mui/material"
import {
  FormContainer,
  ConfirmedEmailSnackBarContainer,
  ConfirmedEmailSnackBar,
  MessageInput,
  SubmitButton,
  ContactStatus,
} from "./styled"
import { Base, Heading, Paragraph } from "@/src/components"

export type ContactRequest = {
  from_name: string
  reply_to: string
  subject: string
  message: string
}

const initialState: ContactRequest = {
  from_name: "",
  reply_to: "",
  subject: "Inquiry from StarPizza.com",
  message: "",
}

export default function Page() {
  const messageRef: React.Ref<any> = React.useRef(null)
  const [contactForm, setContactForm] =
    React.useState<ContactRequest>(initialState)
  const [showSnackbar, setShowSnackbar] = React.useState(false)
  const [emailState, setEmailState] = React.useState<
    "success" | "failure" | "formIncomplete"
  >("formIncomplete")

  const onTriggerSnackbar = () => {
    setShowSnackbar(true)

    // now set snackbar to false to make sure it is no longer rendered in dom
    setTimeout(() => {
      setShowSnackbar(false)
    }, 3000)
  }
  console.log({ contactForm })
  const onValidateForm = () => {
    if (
      contactForm.from_name.length > 0 &&
      contactForm.message.length > 0 &&
      contactForm.reply_to.length > 0 &&
      contactForm.subject.length > 0 &&
      validateEmail(contactForm.reply_to)
    ) {
      return true
    }

    return false
  }

  const onEmailAttempt = (success: boolean) => {
    if (success) {
      setEmailState("success")
    } else {
      setEmailState("failure")
    }
    onTriggerSnackbar()
  }

  const onSendEmail = (e: any) => {
    e.preventDefault()
    const validForm = onValidateForm()
    if (!validForm) {
      setEmailState("formIncomplete")
      onTriggerSnackbar()
    } else {
      sendEmail(contactForm)
        .then(() => onEmailAttempt(true))
        .catch(() => onEmailAttempt(false))
    }
  }

  return (
    <Base>
      <Grid padding={12} container flex={1} justifyContent="center">
        <FormContainer onSubmit={onSendEmail}>
          {showSnackbar && (
            <ContactStatus $status={emailState}>
              {emailState === "success" && "Successfully contacted Star Pizza!"}
              {emailState === "failure" && "Contact failed. Try again."}
              {emailState === "formIncomplete" && "Form invalid! "}
            </ContactStatus>
          )}

          <Grid textAlign="center">
            <Heading>Let&apos;s get in touch</Heading>
          </Grid>
          <Grid>
            <Paragraph>Name</Paragraph>
            <TextField
              fullWidth
              required
              onChange={(e) =>
                setContactForm({
                  ...contactForm,
                  from_name: e.currentTarget.value,
                })
              }
            />
          </Grid>
          <Grid>
            <Paragraph>Email</Paragraph>
            <TextField
              fullWidth
              type="email"
              required
              onChange={(e) => {
                setContactForm({
                  ...contactForm,
                  reply_to: e.currentTarget.value,
                })
              }}
            />
          </Grid>
          <Grid>
            <Paragraph>Message</Paragraph>
            <MessageInput
              required
              ref={messageRef}
              onChange={() =>
                setContactForm({
                  ...contactForm,
                  message: messageRef.current.value,
                })
              }
            />
          </Grid>
          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
              flex: 1,
              width: 400,
            }}
          >
            <SubmitButton onClick={onSendEmail}>Submit</SubmitButton>
          </Grid>
        </FormContainer>
      </Grid>
    </Base>
  )
}
