import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Button from "@mui/material/Button";
import {
  MdOutlineDashboard,
  MdOutlineMessage,
  MdNotificationsNone,
  MdOutlineSettings,
  MdOutlineTravelExplore,
  MdCardTravel,
} from "react-icons/md";
import { FaAngleRight, FaCarCrash } from "react-icons/fa";
import { IoDocumentAttachOutline, IoAnalyticsOutline } from "react-icons/io5";
import { GrTransaction, GrDocumentMissing } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi2";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (tabIndex, route) => {
    if (tabIndex === 3 || tabIndex === 10) {
      // Toggle the submenu for Approvals and Complains
      setActiveTab(tabIndex);
      setIsToggleSubmenu(!isToggleSubmenu);
    } else {
      // Direct navigation for other menu items
      setActiveTab(tabIndex);
      setIsToggleSubmenu(false);
      navigate(route);
    }
  };

  const handleSubmenuClick = (route) => {
    navigate(route);
  };

  return (
    <div className="sidebar fixed top-0 left-0 z-[100] w-[15%]" style={{ height: "100vh", overflowY: "auto", overflowX: "hidden", color: "red" }}>
      <Link to="/">
        <div className="logoWrapper flex justify-center items-center py-3 px-4">
          <img src={Logo} className="w-50 h-20 object-contain" />
        </div>
      </Link>

      <div className="sidebarTabs px-2 mt-4">
        <ul className="flex gap-3 flex-col" style={{ paddingRight: "10px" }}>
          {/*dashboard*/}
          <li>
            <Button className={`w-full flex items-center ${activeTab === 0 ? "active" : ""}`} onClick={() => handleButtonClick(0, "/dashboard")}>
              <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
                <MdOutlineDashboard />
              </span>
              Dashboard
            </Button>
          </li>

          {/*users*/}
          <li>
            <Button className={`w-full flex items-center ${activeTab === 1 ? "active" : ""}`} onClick={() => handleButtonClick(1, "/users")}>
              <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
                <HiOutlineUserGroup />
              </span>
              Users
            </Button>
          </li>

          {/*trips*/}
          <li>
            <Button className={`w-full flex items-center ${activeTab === 2 ? "active" : ""}`} onClick={() => handleButtonClick(2, "/trips")}>
              <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
                <MdCardTravel />
              </span>
              Trips
            </Button>
          </li>

          {/*approvals*/}
          <li>
            <Button className={`w-full flex items-center ${activeTab === 3 ? "active" : ""}`} onClick={() => handleButtonClick(3, "")}>
              <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
                <IoDocumentAttachOutline />
              </span>
              Approvals
              <span className={`arrow ml-auto w-[25px] h-[25px] flex items-center justify-center ${activeTab === 3 && isToggleSubmenu ? "rotate" : ""}`}>
                <FaAngleRight />
              </span>
            </Button>

            {activeTab === 3 && isToggleSubmenu && (
              <div className="submenuWrapper colapse">
                <div className="submenu">
                  <Button className="w-full flex items-center" onClick={() => handleSubmenuClick("/approvals/tourGuides")}>
                    Tour Guides
                  </Button>
                  <Button className="w-full flex items-center" onClick={() => handleSubmenuClick("/approvals/vehicleOwners")}>
                    Vehicle Owners
                  </Button>
                  <Button className="w-full flex items-center" onClick={() => handleSubmenuClick("/approvals/hotelManagers")}>
                    Hotel Managers
                  </Button>
                  <Button className="w-full flex items-center" onClick={() => handleSubmenuClick("/approvals/activityProviders")}>
                    Activity providers
                  </Button>
                </div>
              </div>
            )}
          </li>

          {/*vehicle breakdowns*/}
          <li>
            <Button className={`w-full flex items-center ${activeTab === 4 ? "active" : ""}`} onClick={() => handleButtonClick(4, "/vehicleBreakdowns")}>
              <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
                <FaCarCrash />
              </span>
              Vehicle Breakdowns
            </Button>
          </li>

          {/*transactions*/}
          <li>
            <Button className={`w-full flex items-center ${activeTab === 5 ? "active" : ""}`} onClick={() => handleButtonClick(5, "/transactions")}>
              <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
                <GrTransaction />
              </span>
              Transactions
            </Button>
          </li>

          {/*travel info*/}
          <li>
            <Button className={`w-full flex items-center ${activeTab === 6 ? "active" : ""}`} onClick={() => handleButtonClick(6, "/travelInfo")}>
              <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
                <MdOutlineTravelExplore />
              </span>
              Travel Info
            </Button>
          </li>

          {/*messages*/}
          <li>
            <Button className={`w-full flex items-center ${activeTab === 7 ? "active" : ""}`} onClick={() => handleButtonClick(7, "/messages")}>
              <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
                <MdOutlineMessage />
              </span>
              Messages
            </Button>
          </li>

          {/*notfications*/}
          <li>
            <Button className={`w-full flex items-center ${activeTab === 8 ? "active" : ""}`} onClick={() => handleButtonClick(8, "/notifications")}>
              <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
                <MdNotificationsNone />
              </span>
              Notifications
            </Button>
          </li>

          {/*complains*/}           
          <li>
            <Button className={`w-full flex items-center ${activeTab === 9 ? "active" : ""}`} onClick={() => handleButtonClick(9, "/complains")}>
              <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
                <GrDocumentMissing />
              </span>
              Complains
            </Button>

          </li>

          {/*analytics*/}
          <li>
            <Button className={`w-full flex items-center ${activeTab === 10 ? "active" : ""}`} onClick={() => handleButtonClick(10, "/analytics")}>
              <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
                <IoAnalyticsOutline />
              </span>
              Analytics
            </Button>
          </li>

          {/*settings*/}
          <li>
            <Button className={`w-full flex items-center ${activeTab === 11 ? "active" : ""}`} onClick={() => handleButtonClick(11, "/settings")}>
              <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
                <MdOutlineSettings />
              </span>
              Settings
            </Button>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
