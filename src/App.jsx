import { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Trips from "./pages/Trips";
import Approvals from "./pages/Approvals";
import VehicleBreakdowns from "./pages/VehicleBreakdowns";
import Transactions from "./pages/Transactions";
import Cards from "./pages/Cards";
import TravelInfo from "./pages/TravelInfo";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Complains from "./pages/Complains";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

const MyContext = createContext();

function App() {
  const values = {};

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
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
              <Route path="/approvals" exact={true} element={<Approvals/>} />
              <Route path="/vehicleBreakdowns" exact={true} element={<VehicleBreakdowns/>} />
              <Route path="/transactions" exact={true} element={<Transactions/>} />
              <Route path="/cards" exact={true} element={<Cards/>} />
              <Route path="/travelInfo" exact={true} element={<TravelInfo/>} />            
              <Route path="/messages" exact={true} element={<Messages/>} />
              <Route path="/notifications" exact={true} element={<Notifications/>} />
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
