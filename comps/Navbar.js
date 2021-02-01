import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        //링크를 사용하여 해당 페이지로 이동한다.
        // /ninjas 는 폴더의 기본 루트가 되는 ninjas/index로 이동함 
        <nav>
            <div className="logo">
                {/*Image 태그로 로고 이미지를 넣음 width, height는 필수이고,
                   html보다 나은점은 볼때만 이미지가 로딩되서 로딩 속도 개선됨? */}
                <Image src="/autumn.png" width={100} height={90} />

            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninja Listing</a></Link>
        </nav>
    );
}

export default Navbar;