import Link from 'next/link'
import {useEffect} from 'react'// to use useEffect 
import {useRouter} from 'next/router'// to use router

const NotFound = () => {

  const router = useRouter();

  useEffect(()=>{
    setTimeout(()=> {
     // router.go(1)// go to history back and forth 
     //go to homepage
     router.push('/')// router name 
     //redirect to homepage
    },3000)// after 3s, redirect to homepage 

    console.log('use effect ran')
  },[])// When [] is empty only fire function once 
  return ( 
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>That page cannot be found.</h2>
      <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
    </div>
   );
}
 
export default NotFound;