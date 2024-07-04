import React, { useState, useEffect } from "react";
import InputTextBox from "../Dashboard/components/InputTextBox";

const Drawer = ({ isOpen, toggleDrawer, addProfile, updateProfile, currentProfile }) => {
  const [form, setForm] = useState({
    fullName: "",
    gender: "",
    role: "",
    phoneNo: "",
    email: "",
    project: "",
    status: "",
  });

  useEffect(() => {
    if (currentProfile) {
      setForm(currentProfile);
    } else {
      setForm({
        fullName: "",
        gender: "",
        role: "",
        phoneNo: "",
        email: "",
        project: "",
        status: "",
      });
    }
  }, [currentProfile]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentProfile) {
      updateProfile(currentProfile.index, form);
    } else {
      addProfile(form);
    }
    toggleDrawer();
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      ></div>
      <div
        id="drawer-example"
        className={`fixed top-0 left-0 z-50 h-screen p-4 overflow-y-auto transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white w-80 dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-label"
      >
        <h4 className="text-2xl font-bold dark:text-white">Welcome back!</h4>
        <p className="text-base pb-5 text-gray-900 dark:text-white">
          How about filling some of your details first?
        </p>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <InputTextBox
            textId="fullName"
            textHeading="Full Name"
            textValue={form.fullName}
            textOnChange={handleChange}
            placeholder="Dasha Taran"
            required
          />
          <InputTextBox
            textId="gender"
            textHeading="Gender"
            textValue={form.gender}
            textOnChange={handleChange}
            placeholder="Male or Female"
            required
          />
          <InputTextBox
            textId="role"
            textHeading="Role"
            textValue={form.role}
            textOnChange={handleChange}
            placeholder="Senior Fullstack Developer"
            required
          />
          <InputTextBox
            textId="phoneNo"
            textHeading="Phone Number"
            textValue={form.phoneNo}
            textOnChange={handleChange}
            placeholder="081234567890"
            required
          />
          <InputTextBox
            textId="email"
            textHeading="Email Address"
            textValue={form.email}
            textOnChange={handleChange}
            placeholder="dasha@example.com"
            required
          />
          <InputTextBox
            textId="project"
            textHeading="Project"
            textValue={form.project}
            textOnChange={handleChange}
            placeholder="JSON Web Token"
            required
          />
          <InputTextBox
            textId="status"
            textHeading="Status"
            textValue={form.status}
            textOnChange={handleChange}
            placeholder="On track"
            required
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-100 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {currentProfile ? "Update Data" : "Submit Data"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Drawer;
