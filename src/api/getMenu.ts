"use server"

import { google } from "googleapis"
import { env } from "../utils/loadEnv"

export async function getMenu() {
  const auth = await google.auth.getClient({
    projectId: env.PROJECT_ID,
    credentials: {
      type: "service_account",
      private_key: env.PRIVATE_KEY,
      client_email: env.CLIENT_EMAIL,
      client_id: env.CLIENT_ID,
      token_url: env.TOKEN_URI,
      universe_domain: env.UNIVERSE_DOMAIN,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })
  const sheets = google.sheets({ version: "v4", auth })
  const data = await sheets.spreadsheets.values.get({
    spreadsheetId: "1ZGRiAGbfDv6svazP0T-Y1qF5oOI-f1s9PdSDWBb0Bj0",
    range: "menu!A:E",
  })
  return data.data.values
  // } catch (e) {
  //   console.log(e)
  //   return
  // }
}
