import React from "react";

const FilterProduct = (props) => {
  return (
    <div className="flex justify-center absolute -top-11 -right-2">
      <div className="mb-3 w-72">
        <select
          className="form-select appearance-none block w-1/3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          onChange={props.changeValue}
        >
          <option defaultValue>همه برندها</option>
          <option value="apple">Apple</option>
          <option value="samsung">Samsung</option>
          <option value="xiaomi">Xiaomi</option>
          <option value="huawei">Huawei</option>
        </select>
      </div>
    </div>
  );
};

export default FilterProduct;
