import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./sheard/navbar/Navbar";
import Footer from "./sheard/footer/Footer";


const App = () => {
  const location = useLocation()
   const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
  return (
    <div>
     {noHeaderFooter || <Navbar></Navbar>}
     <div className="min-h-screen">
      <Outlet></Outlet>
     </div>
     {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default App;