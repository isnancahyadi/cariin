import { NextResponse } from "next/server";

export default function middleware(req) {
  const { cookies } = req;
  const url = req.url;

  const token = cookies.get(process.env.NEXT_PUBLIC_TOKEN_NAME);

  if (url.includes("/profile") || url.includes("/jobs")) {
    if (token === undefined) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  if (url.includes("/login") || url.includes("/register")) {
    if (token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}
