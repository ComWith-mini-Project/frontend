import Link from 'next/link';

import styles from 'styles/component.module.css';

const List = ({ title, href }: { title: string; href: string }) => {
  return (
    <li>
      <Link className={styles.nav_link} href={href}>
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default function NavBar() {
  return (
    <nav>
      <ul className="gap-4">
        <List title="기본정보" href="/career/profile" />
        <List title="소개" href="/career/introduce" />
        <List title="업무경험" href="/career/experience" />
        <List title="포트폴리오" href="/career/portfolio" />
        <List title="전문분야" href="/career/field" />
        <List title="학력" href="/career/education" />
        <List title="자격증" href="/career/certificate" />
        <List title="수상경력" href="/career/award" />
      </ul>
    </nav>
  );
}
