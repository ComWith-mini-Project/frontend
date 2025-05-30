'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Container } from '@/app/_components';

import styles from 'styles/login.module.css';

export default function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // /api/auth/signin
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const baseURL = process.env.NEXT_PUBLIC_GATEWAY_URL;
    const res = await fetch(`${baseURL}/api/auth/signin`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      router.push('/career/profile');
    } else {
      alert('로그인 실패');
    }
  };

  return (
    <div className="center_wrapper">
      <Container className={styles.container}>
        <h1 className={styles.title}>Welcome Back</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-[2.4rem]">
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              // required
              className={styles.input}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-[2.4rem]">
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              // required
              className={styles.input}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.button}>
            Sign In
          </button>
        </form>
        <Link href={'/signup'} className={styles.footer_link}>
          계정이 없으신가요? <strong>회원가입</strong>
        </Link>
      </Container>
    </div>
  );
}
