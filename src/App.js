import { Route, Routes } from 'react-router-dom';
import './App.css';
import About1 from './components/About1/About1';
import Contact from './components/Contact/Contact.jsx'
import Home from './components/Home/Home';
import Menu1 from './components/Menu1/FullMenu.jsx';
import BookingTable from './components/BookingTable/Booking'
// import LoginRegister from './components/LoginRegister/Login.jsx';
import Login from './components/LoginRegister/Login.jsx';
import Register from './components/LoginRegister/Register.jsx';
// import AdminLogin from './components/AdminPage/AdminLogin.jsx';
// import DashBoardHeader from './components/DashBoard/AppHeader.jsx';
// import DashBoardRoutes from './components/DashBoard/AppRoutes.jsx';
// import DashBoardConrent from './components/DashBoard/PageContent.jsx';
// import DashBoard from './components/DashBoard/SideMenu.jsx';
function App() {
  return (
    <>
    <div>
            <Routes>
            {/* <Route exact path = "/" element={<AdminLogin/>}/>  */}
            <Route exact path = "/" element={<Home/>}/>
            <Route exact path = "/about" element={<About1/>}/>
             <Route exact path = "/menu" element={<Menu1/>}/> 
            <Route exact path = "/contact" element={<Contact/>}/>
            <Route exact path = "/bookingTable" element={<BookingTable/>}/>
            <Route exact path = "/login" element={<Login/>}/>
            {/* <Route exact path = "/login1" element={<Login/>}/> */}
            <Route exact path = "/register" element={<Register/>}/>

            {/* <Route exact path = "/login" element={<AdminLogin/>}/> */}


            {/* <Route exact path = "/dashBoard" element={<DashBoard/>}/> */}
            </Routes>
      </div>
    </>
  );
}

export default App;
