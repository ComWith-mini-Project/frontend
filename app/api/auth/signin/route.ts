import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    console.log('로그인 요청:', { email, password });

    const baseUrl = req.nextUrl.origin;
    const response = NextResponse.redirect(`${baseUrl}/career/profile`);

    response.cookies.set('access_token', 'dummy_token', {
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60,
    });

    return response;
  } catch (error) {
    console.error('[LOGIN ERROR]', error);
    return NextResponse.json(
      { message: '서버 내부 오류입니다. 나중에 다시 시도해주세요.' },
      { status: 500 },
    );
  }
}
