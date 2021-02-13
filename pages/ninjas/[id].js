//[id].js 로 이름을 만들어서 아이디 부분이 바뀌는 부분이라는 걸 명시한다

//getStaticPath 메소드를 이용하여 빌드타임에 데이터 아이디가 전해지게 해야한다.  
//BUILD TIME에 run
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json(); //async 니까 awiat

  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() }//id int니까 
    }
  })

  return {
    paths, //paths:paths
    fallback: false//fallback page 랑 관련,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  //아이템 10개니까 10번 호출됨
   //await 까먹어서 res.json error 계속 났음 
  const res = await fetch('https://jsonplaceholder.typicode.com/users/'+ id);

  const data = await res.json();

  return {
     props: { ninja: data }
  }
}
const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
}

export default Details;