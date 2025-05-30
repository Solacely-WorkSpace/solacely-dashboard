
import { NextResponse } from "next/server";

export const middleware = (request) => {


    const token = request.cookies.get("token")?.value;

    const protectedRoute = request.nextUrl.pathname.startsWith("/admin");


    if (protectedRoute && !token) {
        return NextResponse.redirect(new URL("/", request.url))
    }


    
    
    return NextResponse.next()
};


export const config = {
    matcher: ["/admin", "/admin/:path*"]
}