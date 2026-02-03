"use server"

import { google } from "googleapis"
import keys from "../spreadsheet-keys.json"

export async function getMenu() {
  try {
    const auth = await google.auth.getClient({
      projectId: keys.project_id,
      credentials: {
        type: "service_account",
        private_key: keys.private_key,
        client_email: keys.client_email,
        client_id: keys.client_id,
        token_url: keys.token_uri,
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
