import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const user = searchParams.get("user");
  const pass = searchParams.get("pass");

  try {
    if (!user || !pass) throw new Error("username and password required");
    await sql`INSERT INTO accounts (username, password) VALUES (${user}, crypt(${pass}, gen_salt('md5')));`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const accounts = await sql`SELECT * FROM accounts;`;
  return NextResponse.json({ accounts }, { status: 200 });
}
