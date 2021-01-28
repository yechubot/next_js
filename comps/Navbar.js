import Link from 'next/link';
const Navbar = () => {
    return (
        //링크를 사용하여 해당 페이지로 이동한다.
        // /ninjas 는 폴더의 기본 루트가 되는 ninjas/index로 이동함 
        <nav>
            <div className="log">
                <h1>Ninja List</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href = "/ninjas"><a>Ninja Listing</a></Link>
        </nav>
    );
}

export default Navbar;