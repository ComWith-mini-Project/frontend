'use client';
import { useRouter } from 'next/navigation';

import styles from 'styles/home.module.css';

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.home_wrapper}>
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-8xl font-bold">간편한 커리어 관리</h1>
        <h3 className="text-3xl text-gray-400">내 커리어를 정리하는 가장 쉬운 방법</h3>
        <button
          type="button"
          onClick={() => router.push('/career/profile')}
          className={`${styles.btn} text-3xl py-5 px-10 my-10`}
        >
          시작하기
        </button>
      </div>
    </div>
  );
}
