// src/List.js
import React from 'react';

const data = [
  { id: 25, name: "Amanda Henry", role: "User Researcher", phone: "07700 107123", email: "amanda.henry@example.com", project: "NHS", status: "Active", date: "12/10/2023" },
  { id: 26, name: "Bessie Cooper", role: "QA Engineer", phone: "07700 900123", email: "bessi@example.com", project: "NHS", status: "Active", date: "11/15/2020" },
  { id: 27, name: "Jenny Wilson", role: "QA Engineer", phone: "07740 506178", email: "jenny@example.com", project: "NHS", status: "Active", date: "12/09/2022" },
  { id: 28, name: "John Wilson", role: "User Researcher", phone: "07790 206321", email: "john@example.com", project: "NHS", status: "Active", date: "12/09/2022" },
  { id: 29, name: "Robert Fox", role: "Innovation Manager", phone: "07790 206321", email: "robert@example.com", project: "NHS", status: "Active", date: "11/15/2020" }
];

const ProfileList2 = () => {
  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Role</th>
            <th className="py-2">Phone no / Email</th>
            <th className="py-2">Project</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4">{person.id}</td>
              <td className="py-2 px-4 flex items-center">
                <img src={`https://i.pravatar.cc/150?img=${index + 1}`} alt="avatar" className="w-8 h-8 rounded-full mr-2"/>
                <div>
                  <div className="font-medium">{person.name}</div>
                  <div className="text-sm text-gray-500">{person.date}</div>
                </div>
              </td>
              <td className="py-2 px-4">{person.role}</td>
              <td className="py-2 px-4">
                <div>{person.phone}</div>
                <div className="text-sm text-gray-500">{person.email}</div>
              </td>
              <td className="py-2 px-4">{person.project}</td>
              <td className="py-2 px-4">
                <span className={`inline-block px-2 py-1 text-sm font-semibold leading-tight ${person.status === "Active" ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"} rounded-full`}>
                  {person.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileList2;
