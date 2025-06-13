import clsx from 'clsx';
import Link from 'next/link';

import Globe from '@/public/globe.svg';
import PDF from '@/public/pdf.svg';

import styles from 'styles/footer.module.css';

const { wrapper, inner, l_inner, button, l, r, web, pdf, ani } = styles;

export default function Footer() {
  // random id for the profile link
  // This is a placeholder and should be replaced with actual logic to generate or retrieve a profile ID.
  const randomId = Math.floor(Math.random() * 1000);
  const id = randomId.toString();

  return (
    <footer className={wrapper}>
      <div className={inner}>
        <div className={l_inner}>
          <Link href={`/w/${id}`} className={clsx(button, l, web, ani)}>
            <Globe width="2.5rem" />
            <span>내 커리어 프로필</span>
          </Link>
          <button className={clsx(button, l, pdf, ani)}>
            <PDF width="2.5rem" />
            <span>PDF로 저장</span>
          </button>
        </div>
        <button className={clsx(button, r)}>프로필 저장</button>
      </div>
    </footer>
  );
}
