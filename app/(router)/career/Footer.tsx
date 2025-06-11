import Globe from '@/public/globe.svg';

import styles from 'styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.footer_inner}>
        <div className="h-[inherit]">
          <Globe />
          <button className={`${styles.footer_button} ${styles.web}`}>내 커리어 프로필</button>
        </div>
        <button className={`${styles.footer_button} ${styles.save}`}>프로필 저장</button>
      </div>
    </footer>
  );
}
