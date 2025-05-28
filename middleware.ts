import { NextRequest, NextResponse } from 'next/server';

import { getCookie } from '@/utils/cookie';

export const config = {
  matcher: ['/:path*'], // 모든 경로에서 일단 진입
};

const PUBLIC_PAGES = ['/', '/signin', 'signup'];

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

  // case 1: 로그인한 사용자가 /signin 접근하면 홈으로 리디렉트
  if (isPublic && accessToken) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // case 2: 보호 페이지인데 로그인 안한 경우 → /signin
  const isProtectedPage = !isPublic;
  if (isProtectedPage && !accessToken) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }

  return NextResponse.next();
}
