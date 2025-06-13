import clsx from 'clsx';

import Globe from '@/public/globe.svg';
import PDF from '@/public/pdf.svg';

import styles from 'styles/footer.module.css';

const { wrapper, inner, l_inner, button, l, r, ani } = styles;

export default function Footer() {
  return (
    <footer className={wrapper}>
      <div className={inner}>
        <div className={l_inner}>
          <button className={clsx(button, l, ani)}>
            <Globe width="2.5rem" />
            <span>내 커리어 프로필</span>
          </button>
          <button className={clsx(button, l, ani)}>
            <PDF width="2.5rem" />
            <span>PDF로 저장</span>
          </button>
        </div>
        <button className={clsx(button, r)}>프로필 저장</button>
      </div>
    </footer>
  );
}
