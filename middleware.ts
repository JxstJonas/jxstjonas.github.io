import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "./lib/auth";

export async function middleware(request: NextRequest) {
    const url = request.nextUrl;    

    const auth = await isAuthenticated(request);

    if(!auth && url.pathname != '/login') {
        return NextResponse.redirect(new URL('/login', request.url));
    } 
    
    if(url.pathname == '/login' && auth) {
        return NextResponse.redirect(new URL('/stats/web', request.url));
    }
}

export const config = {
    matcher: ['/stats/:path*', '/login' , '/'],
}