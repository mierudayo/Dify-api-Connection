import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // check if the locale cookie exists
  if (request.cookies.has('locale')) {
    // if it does, return the next response
    return NextResponse.next()
  } else {
    // if it doesn't, set the locale cookie to 'en' and return the next response
    const response = NextResponse.next()
    response.cookies.set('locale', 'en')
    return response
  }
}
