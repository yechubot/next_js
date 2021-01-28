import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    //js 번들이 해당 페이지로 갈때만 작동한다
    //처음에 해당 페이지를 갈 때 생긴다. 
    //각 페이지는 해당 js 번들이 있다. 
    //navbar, footer를 지웠어도 Layout으로 감싸줬기 때문에 다 나오는 것임 
    <div>
    
      <h2>Homepage</h2>
      <p>consuetudium lectorum. Mirum ninja est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem ninja ipsum modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in ninja futurum.</p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
   
    </div>

  )
}
