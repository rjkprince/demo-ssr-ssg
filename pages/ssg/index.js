import styles from '../../styles/Ssg.module.css';
import Link from 'next/link';
export default function Ssg({ data }) {
  return (
    <div>
      <Link href='/ssg'>
        <a className={styles.Btn}>SSG</a>
      </Link>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <h2>{item.email}</h2>
            <p>{item.phone}</p>
          </div>
        );
      })}
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  return { props: { data } };
}
