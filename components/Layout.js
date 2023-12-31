import React from "react";
import Header from "./Header";

const Layout = (props) => (
  <>
    <Header user={props.user} />
    <div className="min-h-screen">
      <div className="max-w-screen-lg mx-auto px-6">
        {props.children}
      </div>
    </div >
  </>
);

export default Layout;
