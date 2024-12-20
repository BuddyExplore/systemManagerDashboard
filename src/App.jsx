import { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Trips from "./pages/Trips";
import TourGuideApprovals from "./pages/approval/tourGuide";
import VehicleOwnerApprovals from "./pages/approval/vehicleOwner";
import HotelMApprovals from "./pages/approval/hotelManager";
import ActivityPApprovals from "./pages/approval/activityProvider";
import ShopMApprovals from "./pages/approval/shopManager";
import VehicleBreakdowns from "./pages/VehicleBreakdowns";
import Transactions from "./pages/Transactions";
import TravelInfo from "./pages/TravelInfo";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import Complains from "./pages/Complains";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";

const MyContext = createContext();

function App() {
  const values = {};
  

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
      <section className="main flex">
      <div className="w-full">
      <Routes>
              <Route path="/login" exact={true} element={<Login />} />
              <Route path="/forgotPassword" exact={true} element={<ForgotPassword />} />
              <Route path="/newPassword" exact={true} element={<NewPassword />} />
              </Routes>
              </div></section>

        <section className="main flex">
          <div className="sidebarWrapper w-[17%]">
            <Sidebar />
          </div>
          <div className="content_Right w-[100%] px-10" style={{backgroundColor:"white"}}>
            <Header />
            <div className="space"></div>
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/dashboard" exact={true} element={<Dashboard />} />
              <Route path="/users" exact={true} element={<Users />} />
              <Route path="/trips" exact={true} element={<Trips/>} />

              <Route path="/approval/tourGuide" exact={true} element={<TourGuideApprovals/>} />
              <Route path="/approval/vehicleOwner" exact={true} element={<VehicleOwnerApprovals/>} />
              <Route path="/approval/hotelManager" exact={true} element={<HotelMApprovals/>} />
              <Route path="/approval/activityProvider" exact={true} element={<ActivityPApprovals/>} />
              <Route path="/approval/shopManager" exact={true} element={<ShopMApprovals/>} />

              <Route path="/vehicleBreakdowns" exact={true} element={<VehicleBreakdowns/>} />
              <Route path="/transactions" exact={true} element={<Transactions/>} />
              <Route path="/travelInfo" exact={true} element={<TravelInfo/>} />    
              <Route path="/notifications" exact={true} element={<Notifications/>} />        
              <Route path="/messages" exact={true} element={<Messages/>} />
              <Route path="/complains" exact={true} element={<Complains/>} />
              <Route path="/analytics" exact={true} element={<Analytics />} />
              <Route path="/settings" exact={true} element={<Settings/>} />
              </Routes>
          </div>
        </section>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
