import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log({
    method: request.method,
    url: request.url,
    headers: request.headers,
    body: request.body,
  });
  return NextResponse.json({
    count: 100,
  });
}
