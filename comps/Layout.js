import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  //layout 안에 있는거 children 임

  return ( 
    <div className="content">
      <Navbar/>
      {children}
      <Footer/>
    </div>
   );
}
 
export default Layout;