import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const result = await sql`
    CREATE TABLE Accounts (
        Id serial PRIMARY KEY,
        Username varchar(255) UNIQUE,
        Password varchar(255));`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
