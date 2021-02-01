import Head from 'next/head'// 여기에 메타데이터 들어가 있음
// 이를 이용해서 메타 데이터.. 씀?
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (// 태그 1개만 있어야 함 -> 엠티 태그로 감쌈 
    <>
      <Head>
        <title>Ninja List | Home </title>
        <meta name ="keywords" content="ninjas"/>
      </Head>
      <div>

        <h2 className={styles.title}>Homepage</h2>
        <p className={styles.text}>consuetudium lectorum. Mirum ninja est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem ninja ipsum modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in ninja futurum.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
