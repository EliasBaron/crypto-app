import React from 'react';
import { Link } from 'react-router-dom';

const Error404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-[#181A20]">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400">Page Not Found</p>
      <Link to="/" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Go back to Home
      </Link>
    </div>
  );
};

export default Error404;