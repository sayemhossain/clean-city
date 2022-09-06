import React from "react";

const Basic = () => {
  return (
    <div>
      <h3
        className="text-xl md:px-20 mt-5 text-center "
        style={{ fontFamily: "Teko" }}
      >
        Basic Subcribtion
      </h3>
      <hr />
      <div class="drawer drawer-mobile pb-10  bg-primary">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center mt-5"></div>
      </div>
    </div>
  );
};

export default Basic;
