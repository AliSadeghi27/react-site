import React from "react";

const NotFound = () => {
  return (
    <div style={{minHeight: '80vh'}}>
      <div className="mx-auto w-11/12 lg:w-10/12 border-4 border-dashed border-blue-900 h-96">
        <h2 className="text-7xl md:text-9xl text-blue-900 justify-center flex mt-8">
          404
        </h2>
        <span className="text-xl md:text-3xl text-blue-900 justify-center flex mt-4">
          صفحه مورد نظر یافت نشد!
        </span>
      </div>
    </div>
  );
};

export default NotFound;
