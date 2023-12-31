import { Outlet } from "react-router-dom";
import Navbar from "./sheard/navbar/Navbar";
import Footer from "./sheard/footer/Footer";


const App = () => {
  return (
    <div>
     <Navbar></Navbar>
     <div className="min-h-screen">
      <Outlet></Outlet>
     </div>
     <Footer></Footer>
    </div>
  );
};

export default App;