import React, { useState, useEffect } from "react";
import ProfileList from "../../pages/components/ProfileList";
import Loading from "../components/Loading";

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/";
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const email = localStorage.getItem("email");
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="nav flex justify-between h-20 bg-blue-600 text-white items-center px-10">
            <img src="images/logo.png" alt="logo" width={"120px"} />
            <div className="flex items-center">
              <span className="mr-4">{email}</span>
              <button
                onClick={handleLogout}
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Log Out
              </button>
            </div>
          </div>
          <ProfileList />
        </div>
      )}
    </>
  );
};

export default Dashboard;
