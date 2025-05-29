import { NextRequest, NextResponse } from 'next/server';

import { getCookie } from '@/utils/cookie';

export const config = {
  matcher: ['/:path*'], // 모든 경로에서 일단 진입
};

const PUBLIC_PAGES = ['/', '/signin', '/signup'];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 정적 파일 및 Next.js 내부 경로 무시
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname === '/favicon.ico' ||
    pathname.includes('.') // .js, .png, .css 등
  ) {
    return NextResponse.next();
  }

  const accessToken = req.cookies.get('access_token')?.value;
  const isPublic = PUBLIC_PAGES.includes(pathname);

  // case 1: 공개 페이지인데 로그인 한 경우 → /career/profile로 리다이렉트
  if (isPublic && accessToken) {
    return NextResponse.redirect(new URL('/career/profile', req.url));
  }

  // case 2: 보호된 페이지인데 로그인 안 한 경우 → /signin으로 리다이렉트
  const isProtectedPage = !isPublic;
  if (isProtectedPage && !accessToken) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }

  return NextResponse.next();
}
