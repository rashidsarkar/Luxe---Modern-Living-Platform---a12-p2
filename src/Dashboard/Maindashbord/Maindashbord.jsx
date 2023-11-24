import { useState } from "react";
import { AiOutlineMenu, AiOutlineGithub } from "react-icons/ai";
import { FaHome, FaUser } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { IoMdClose, IoMdMegaphone } from "react-icons/io";
function MainDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSettingsPanelOpen, setSettingsPanelOpen] = useState(false);

  const toggleSidebarMenu = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleSettingsPanel = () => {
    setSettingsPanelOpen(!isSettingsPanelOpen);
  };
  const dashLink = (
    <>
      <li>
        <NavLink
          to="/dashboard/userProfile"
          className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
        >
          <span>
            <FaUser className="w-6 h-6 text-gray-400" />
          </span>
          <span className={!isSidebarOpen ? "lg:hidden" : ""}>My Profile</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/UserAnnouncements"
          className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
        >
          <span>
            <IoMdMegaphone className="w-6 h-6 text-gray-400" />
          </span>
          <span className={!isSidebarOpen ? "lg:hidden" : ""}>
            Announcements
          </span>
        </NavLink>
      </li>
    </>
  );
  const navlink = (
    <li>
      <NavLink
        to="/"
        className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
      >
        <span>
          <FaHome className="w-6 h-6 text-gray-400" />
        </span>
        <span className={!isSidebarOpen ? "lg:hidden" : ""}>Home</span>
      </NavLink>
    </li>
  );

  return (
    <div>
      <div className="flex min-h-screen overflow-y-hidden bg-white">
        {/* Sidebar backdrop */}
        <div
          className={`fixed inset-0 z-10 bg-black bg-opacity-20 lg:hidden ${
            isSidebarOpen ? "block" : "hidden"
          }`}
          style={{
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        ></div>

        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform bg-white border-r shadow-lg lg:z-auto lg:static lg:shadow-none ${
            !isSidebarOpen ? "-translate-x-full lg:translate-x-0 lg:w-20" : ""
          }`}
        >
          {/* Sidebar header */}
          <div className="flex items-center justify-between flex-shrink-0 p-2">
            <span className="p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap">
              <img src="https://i.ibb.co/qnfmDWY/logo.png" alt="" />
              <span className={!isSidebarOpen ? "lg:hidden" : ""}></span>
            </span>
            <button
              onClick={toggleSidebarMenu}
              className="p-2 rounded-md lg:hidden"
            >
              <AiOutlineMenu className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Sidebar links */}
          <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
            <ul className="p-2 overflow-hidden">
              {dashLink}
              {/* Add more sidebar links here */}
            </ul>
            <div className="divider">--</div>

            <ul className="p-2 overflow-hidden">
              {navlink}
              {/* Add more sidebar links here */}
            </ul>
          </nav>

          {/* Sidebar footer */}
          <div className="flex-shrink-0 p-2 border-t max-h-14">
            <button className="flex items-center justify-center w-full px-4 py-2 space-x-1 font-medium tracking-wider uppercase bg-gray-100 border rounded-md focus:outline-none focus:ring">
              <span>
                <MdSettings className="w-6 h-6" />
              </span>
              <span className={!isSidebarOpen ? "lg:hidden" : ""}>Logout</span>
            </button>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex flex-col flex-1 h-full overflow-hidden">
          {/* Navbar */}
          <header className="flex-shrink-0 border-b">
            <div className="flex items-center justify-between p-2">
              {/* Navbar left */}
              <div className="flex items-center space-x-3">
                <span className="p-2 text-xl font-semibold tracking-wider uppercase lg:hidden">
                  <img src="https://i.ibb.co/qnfmDWY/logo.png" alt="" />
                </span>
                <button
                  onClick={toggleSidebarMenu}
                  className="p-2 rounded-md focus:outline-none focus:ring"
                >
                  <AiOutlineMenu
                    className={`w-4 h-4 text-gray-600 ${
                      isSidebarOpen
                        ? "transform transition-transform -rotate-180"
                        : ""
                    }`}
                  />
                </button>
              </div>
              {/* Add more Navbar content here */}
            </div>
          </header>

          {/* Main content header */}
          <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
            <h1 className="text-2xl font-semibold whitespace-nowrap">
              User Dashboard
            </h1>
            {/* Add more content or components here */}
          </div>

          {/* Start Content */}
          {/* Add your content here */}

          <div className="mt-6 text-xl">{<Outlet />}</div>
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;
