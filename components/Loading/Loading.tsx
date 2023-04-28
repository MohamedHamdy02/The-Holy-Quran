import React from "react";

const Loading = () => {
  return (
    <div className=" absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4">
      <div className="lds-heart">
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
