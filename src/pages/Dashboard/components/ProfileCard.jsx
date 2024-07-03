import React from "react";

const ProfileCard = ({ fullName, birthDate, gender, address, ktpNumber }) => {
  return (
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
          {fullName}
        </p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
          {birthDate} - {ktpNumber}
        </p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
          {address}
        </p>
      </div>
      <div class="flex-shrink-0">
        <img
          class="w-8 h-8 rounded-full"
          src={gender == "Female" ? "/images/female.svg" : "/images/male.svg"}
          alt="profile_picture"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
