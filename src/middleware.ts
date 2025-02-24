import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const authPaths = ["/auth"];
const privatePaths = ["/chats"];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const sessionToken = request.cookies.get("token")?.value;
    if (
        privatePaths.some((path) => pathname.startsWith(path)) &&
        !sessionToken
    ) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    if (authPaths.some((path) => pathname.startsWith(path)) && sessionToken) {
        return NextResponse.redirect(new URL("/chats", request.url));
    }
    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/auth/:path*", "/chats/:path*"],
};
