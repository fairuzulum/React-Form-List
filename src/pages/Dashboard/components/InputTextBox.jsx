import React from "react";

const InputTextBox = ({textId, textHeading, textValue, textOnChange, placeholder}) => {
  return (
    <div class="mb-5">
      <label
        for={textId}
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {textHeading}
      </label>
      <input
        type="text"
        id={textId}
        name={textId}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        value={textValue}
        onChange={textOnChange}
        required
      />
    </div>
  );
};

export default InputTextBox;
