import React from 'react';
import {Link} from 'react-router-dom';

interface ErrorProps {
  message?: string;
}

const Error: React.FC<ErrorProps> = ({message = 'Something went wrong'}) => {
  return (
    <div className="min-h-[200px] flex flex-col items-center justify-center">
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
        <p className="text-red-600">{message}</p>
      </div>
      <div className="text-center">
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-600 transition-colors">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
 