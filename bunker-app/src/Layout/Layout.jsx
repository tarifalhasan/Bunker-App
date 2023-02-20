import React, { useState } from 'react';
import Header from '../partials/Header';
import Sidebar from '../partials/Sidebar';
const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex pt-10 h-screen ">
        {/*  Sidebar */}

        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        {children}
      </div>
    </>
  );
};
export default Layout;
