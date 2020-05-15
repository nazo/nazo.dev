import React from "react";
import Head from 'next/head'

const Layout: React.FC = ({ children }) => (
  <div>
    <Head>
      <title>nazo</title>
    </Head>
    <div className="antialiased text-gray-900 flex items-center justify-center min-h-screen">
      { children }
    </div>
  </div>
);

export default Layout;
