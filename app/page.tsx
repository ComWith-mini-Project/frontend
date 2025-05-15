import Container from 'components/Container';
import styles from 'styles/home.module.css';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-8xl font-bold">간편한 커리어 관리</h1>
      <h3 className="text-3xl text-gray-400">내 커리어를 정리하는 가장 쉬운 방법</h3>
      <button className={`${styles.btn} text-3xl py-5 px-10 m-8`}>시작하기</button>
    </div>
  );
}
