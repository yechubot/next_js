import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
  //global.css를 변경해서 스타일을 주거나
  //있는 모듈.css를 쓰기 위해서는 다음과 같이 접근한다. 이미 위에 module.css는 import 된 상태기 때문에 다음과 같이 원하는 클래스 이름을 style. 로 접근하여 사용하면 된다.
//또한 다른 곳에 같은 클래스의 모듈을 사용해도 scope이 달라서 상관없다. 어디서나 같은 클래스 이름으로 사용할 수 있다.
    <div>
    
      <h2 className={styles.title}>Homepage</h2>
      <p className={styles.text}>consuetudium lectorum. Mirum ninja est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem ninja ipsum modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in ninja futurum.</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
   
    </div>

  )
}
