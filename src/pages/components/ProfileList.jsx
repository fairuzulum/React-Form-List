import React from "react";
import { useState } from "react";
import Drawer from "./Drawer";

function ProfileList() {
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
    <>
      <div className="col p-8 m-8 rounded-3xl bg-gradient-to-r from-blue-500 via-green-500 to-purple-600">
        <div>
          <h4 class="text-2xl font-bold text-white dark:text-white pb-1">Employee List</h4>
          <p class="text-base pb-5 text-gray-900 text-white dark:text-white">
            Here you can create and see the list of employees.
          </p>
        </div>
        <button
          onClick={toggleDrawer}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          type="button"
        >
          Add employees
        </button>
      </div>
      <Drawer
        isOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        addProfile={addProfile}
      />
      <div className="container mx-auto mt-8">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              {/* <th className="py-2">ID</th> */}
              <th className="py-2">Name</th>
              <th className="py-2">Role</th>
              <th className="py-2">Contact</th>
              <th className="py-2">Project</th>
              <th className="py-2">Status</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((person, index) => (
              <tr key={index} className="border-b">
                {/* <td className="py-2 px-4">{person.id}</td> */}
                <td className="py-2 px-4 flex items-center">
                  <img
                    src={`https://i.pravatar.cc/150?img=${index + 1}`}
                    alt="avatar"
                    className="w-8 h-8 rounded-full mr-2 me-5"
                  />
                  <div>
                    <div className="font-medium">{person.fullName}</div>
                    <div className="text-sm text-gray-500">{person.gender}</div>
                  </div>
                </td>
                <td className="py-2 px-4 text-center">{person.role}</td>
                <td className="py-2 px-4 text-center">
                  <div>{person.phoneNo}</div>
                  <div className="text-sm text-gray-500">{person.email}</div>
                </td>
                <td className="py-2 px-4 text-center">{person.project}</td>
                <td className="py-2 px-4 text-center">
                  <span
                    className={`inline-block px-2 py-1 text-sm font-semibold leading-tight ${
                      person.status === "Finished"
                        ? "text-green-700 bg-green-100"
                        : "text-red-700 bg-red-100"
                    } rounded-full`}
                  >
                    {person.status}
                  </span>
                </td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProfileList;
