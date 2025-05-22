'use client';

import { usePathname } from 'next/navigation';
import { Routing, RoutingList } from '@/constants/type';
import Link from 'next/link';

import styles from 'styles/component.module.css';

const List = ({ title, href, className }: { title: string; href: string; className?: string }) => {
  return (
    <li>
      <Link className={`${styles.nav_link} ${className}`} href={href}>
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default function NavBar() {
  const pathname = usePathname();

  const navItem: RoutingList = [
    { title: '기본정보', href: '/career/profile' },
    { title: '소개', href: '/career/introduce' },
    { title: '업무경험', href: '/career/experience' },
    { title: '포트폴리오', href: '/career/portfolio' },
    { title: '전문분야', href: '/career/field' },
    { title: '학력', href: '/career/education' },
    { title: '자격증', href: '/career/certificate' },
    { title: '수상경력', href: '/career/award' },
  ];

  return (
    <nav>
      <ul className="gap-4">
        {navItem.map(({ title, href }: Routing) => (
          <List
            key={href}
            title={title}
            href={href}
            className={pathname === href ? styles.nav_link_active : undefined}
          />
        ))}
      </ul>
    </nav>
  );
}
