import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { v4 } from 'uuid'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  // Check and set the locale cookie if it doesn't exist
  if (!request.cookies.has('locale')) {
    response.cookies.set('locale', 'en')
  }
  // Check and set the user cookie if it doesn't exist
  if (!request.cookies.has('user')) {
    response.cookies.set('user', `${process.env.APP_ID}_${v4()}`)
  }
  return response
}
