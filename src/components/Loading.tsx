import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="min-h-[200px] flex items-center justify-center">
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-sky-200 border-t-sky-600"></div>
      </div>
    </div>
  );
};

export default Loading;
