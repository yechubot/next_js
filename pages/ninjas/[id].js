//[id].js 로 이름을 만들어서 아이디 부분이 바뀌는 부분이라는 걸 명시한다

//getStaticPath 메소드를 이용하여 빌드타임에 데이터 아이디가 전해지게 해야한다. 
export const getStaticPath = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json(); //async 니까 awiat

  const paths = data.map(ninja => {
    return {
      params:{id: ninja.id.toString()}
    }
  })
  return {
    paths, //paths:paths
    fallback:false//fallback page 랑 관련,
    
  }

}
const Details = () => {
  return ( 
    <div>
      <h1>Details Page</h1>
    </div>
   );
}
 
export default Details;