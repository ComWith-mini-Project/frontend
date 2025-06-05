import styles from 'styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.footer_inner}>
        <div></div>
        <button className={styles.footer_button}>프로필 저장</button>
      </div>
    </footer>
  );
}
