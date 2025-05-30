import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    console.log('로그인 요청:', { email, password });

    const response = new NextResponse(null, { status: 200 });

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
    return NextResponse.json({ message: '서버 내부 오류입니다.' }, { status: 500 });
  }
}
