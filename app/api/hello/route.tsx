import { NextResponse } from "next/server";

export async function GET(request: Request, response: NextResponse) {
  return NextResponse.json({ hello: "test api" });
}
