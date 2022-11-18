import { NextRequest } from "next/server";

export async function isAuthenticated(request: NextRequest) {
    const protocol = process.env.NODE_ENV == 'production' ? 'https' : 'http' 
    const host = request.headers.get('host');
    const res = await fetch(`${protocol}://${host}/api/login`);
    const data = await res.json();

    if(!(request.cookies.has('session_id') && request.cookies.get('session_id') == data.password)) {
        return false;
    }

    return true;
}