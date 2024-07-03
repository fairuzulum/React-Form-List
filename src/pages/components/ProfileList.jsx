import React from "react";
import ProfileCard from "../Dashboard/components/ProfileCard";

function ProfileList({ profiles }) {
  return (
    <div>
      <h4 class="text-2xl font-bold dark:text-white">Profile List</h4>
      <p class="text-base pb-5 text-gray-900 dark:text-white">
        See the details of your customers.
      </p>
      
      <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {/* Map by profiles */}
        {profiles.map((profile, index) => (
          <li key={index} class="pb-3 sm:pb-4 pt-4">
              <ProfileCard
                fullName={`${profile.fullName}`}
                birthDate={`${profile.birthDate}`}
                gender={`${profile.gender}`}
                address={`${profile.address}`}
                ktpNumber={`${profile.ktpNumber}`}
              />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileList;
