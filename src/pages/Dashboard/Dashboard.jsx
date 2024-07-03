import React from "react";
import ProfileList from "../../pages/components/ProfileList";
import { useState } from "react";
import Drawer from "../components/Drawer";
import ProfileList2 from "../components/ProfileList2";

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/";
  };
  const email = localStorage.getItem("email");

  // Initial state of profiles
  const [profiles, setProfiles] = useState([]);

  // Add profile
  const addProfile = (profile) => {
    setProfiles([...profiles, profile]);
  };

  // Trigger sidebar
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div>
      <div className="nav flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <button
          onClick={toggleDrawer}
          className="ml-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          type="button"
        >
          Add employees
        </button>
        <button
          onClick={handleLogout}
          type="button"
          className="ml-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Logout
        </button>
      </div>
      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} addProfile={addProfile}/>
      <ProfileList2 />
      {/* <ProfileList profiles={profiles} /> */}
    </div>
  );
};

export default Dashboard;
