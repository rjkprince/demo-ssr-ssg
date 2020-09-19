import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <Link href='/ssr'>
        <a className={styles.Btn}>SSR</a>
      </Link>
      <Link href='/ssg'>
        <a className={styles.Btn}>SSG</a>
      </Link>
    </div>
  );
}
