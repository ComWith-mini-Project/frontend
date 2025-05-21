import type { Metadata } from 'next';

import { Container } from 'components/Container';
import NavBar from './Nav';

import styles from 'styles/career.module.css';

export const metadata: Metadata = {
  title: 'Career',
  description: 'manage your career profile',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-[4rem]">
      <div className="career-page-wrapper">
        <div className="flex justify-center">
          <div className={`${styles.container} flex gap-5`}>
            <main className="w-full">{children}</main>
            <Container className="min-w-[27rem]">
              <NavBar />
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}
