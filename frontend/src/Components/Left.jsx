import React, { useEffect, useState } from 'react';
import prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-tomorrow.css';
import Editor from 'react-simple-code-editor';
import axios from 'axios';
const Left = ({ setReview }) => {
  const [code, setCode] = useState(`const sum = () => {
  return 1 + 1;
};`);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  const ReviewCode = async () => {
    try {
      const response = await axios.post('http://localhost:8000/ai/get-review', { code });
      console.log('Response:', response.data);

      setReview(response.data.review || JSON.stringify(response.data, null, 2));
    } catch (error) {
      console.error(error);
      setReview('Error while fetching review.');
    }
  };

  return (
    <div className='h-screen w-1/2 bg-gray-500 flex justify-center items-center'>
      <div className='h-[95%] w-[95%] bg-black rounded-2xl text-amber-50 relative p-4'>
        <Editor
          value={code}
          onValueChange={(newCode) => setCode(newCode)}
          highlight={(code) => prism.highlight(code, prism.languages.jsx, 'jsx')}
          padding={10}
          className='h-[90%] w-full bg-black font-mono text-[15px]
          rounded-2xl outline-none border border-gray-700'
        />

        <div className='absolute bottom-4 right-4'>
          <button
            className='bg-blue-950 text-amber-50 h-12 px-6 rounded-2xl hover:bg-blue-800 transition'
            onClick={ReviewCode}
          >
            Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
