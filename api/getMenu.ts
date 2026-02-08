"use server"

import { google } from "googleapis"

export async function getMenu() {
  try {
    const auth = await google.auth.getClient({
      projectId: process.env.project_id,
      credentials: {
        type: "service_account",
        private_key: process.env.private_key,
        client_email: process.env.client_email,
        client_id: process.env.client_id,
        token_url: process.env.token_uri,
        universe_domain: "googleapis.com",
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })
    const sheets = google.sheets({ version: "v4", auth })
    const data = await sheets.spreadsheets.values.get({
      spreadsheetId: "1ZGRiAGbfDv6svazP0T-Y1qF5oOI-f1s9PdSDWBb0Bj0",
      range: "menu!A:E",
    })
    return data.data.values
  } catch (e) {
    console.log(e)
    return
  }
}
