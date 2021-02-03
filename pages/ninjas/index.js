import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'
//export 해야함 
export const getStaticProps = async() => {
 //이 함수는 브라우저에서 작동하지 않는다. 빌드 타임에서만 작동한다

 const res = await fetch('https://jsonplaceholder.typicode.com/users');
 
 //json 메소드 
 const data = await res.json();
//value를 받는다 
 return {
     props: {ninjas: data}//이제 이 데이터를 컴포넌트에 쓸 수 있다.
 }
}
// ---- this runs before component is rendered

const Ninjas = ({ninjas}) => {
  //리액트의 경우 useEffect 안에서 fake json 을 가져왔지만, 넥스트 js는 이미 브라우저에 도달할 때 렌더링이 끝나있다. 즉 그 전에 데이터를 받아야 한다. next js 의 특정함수를 이용해서 할 수 있다. 
    return ( 
        <div> 
            <h1>All Ninjas</h1>
            {ninjas.map(ninja => (
                <Link href = {'/ninjas/'+ninja.id}key ={ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                        <h4>{ninja.email}</h4>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default Ninjas;