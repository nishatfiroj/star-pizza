import { loadEnvConfig } from "@next/env"

const projectDir = process.cwd()
loadEnvConfig(projectDir)

const required = [
  "PROJECT_ID",
  "PRIVATE_KEY",
  "CLIENT_EMAIL",
  "CLIENT_ID",
  "TOKEN_URI",
  "UNIVERSE_DOMAIN",
]

const missing = required.filter((k) => !process.env[k])
if (missing.length) {
  throw new Error(`Missing required env vars: ${missing.join(", ")}`)
}

// Normalize private key newlines if the key was stored with escaped \n sequences
process.env.PRIVATE_KEY = process.env.PRIVATE_KEY!.replace(/\\n/g, "\n")

export const env = {
  PROJECT_ID: process.env.PROJECT_ID!,
  PRIVATE_KEY: process.env.PRIVATE_KEY!,
  CLIENT_EMAIL: process.env.CLIENT_EMAIL!,
  CLIENT_ID: process.env.CLIENT_ID!,
  TOKEN_URI: process.env.TOKEN_URI!,
  UNIVERSE_DOMAIN: process.env.UNIVERSE_DOMAIN!,
} as const

export default env
