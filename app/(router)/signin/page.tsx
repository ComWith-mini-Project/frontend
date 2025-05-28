import Link from 'next/link';

import { Container } from '@/app/_components';

import styles from 'styles/login.module.css';

export default function Signin() {
  return (
    <div className="center_wrapper">
      <Container className={styles.container}>
        <h1 className={styles.title}>Welcome Back</h1>
        <form action="/career/profile" method="post">
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
