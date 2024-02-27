import { NextResponse } from "next/server"
import claim from "@/utils/claim"

const PRIVATE_KEY = process.env.PRIVATE_KEY
const PUBLIC_KEY = process.env.PUBLIC_KEY
const SECOND_PUBLIC_KEY = process.env.SECOND_PUBLIC_KEY
const SECOND_PRIVATE_KEY = process.env.SECOND_PRIVATE_KEY

export async function GET() {
  const transaction1 = await claim({ pub: PUBLIC_KEY, priv: PRIVATE_KEY })
  console.log("transaction1", transaction1)

  const transaction2 = await claim({
    pub: SECOND_PUBLIC_KEY,
    priv: SECOND_PRIVATE_KEY,
  })
  console.log("transaction2", transaction2)

  return new NextResponse()
}
