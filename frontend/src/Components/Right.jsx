import React from 'react';
import Markdown from "react-markdown"

const Right = ({ review }) => {
  return (
    <div className='h-screen w-1/2 bg-gray-900 flex justify-center items-center'>
      <div className='h-[95%] w-[95%] bg-black rounded-2xl text-white p-4 overflow-auto'>
        <h2 className='text-xl font-semibold mb-4'>Code Review</h2>
        <pre className='whitespace-pre-wrap'><Markdown>{review}</Markdown></pre>
      </div>
    </div>
  );
};

export default Right;
