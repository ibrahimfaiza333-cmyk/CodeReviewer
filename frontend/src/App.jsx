import React, { useState } from 'react';
import Left from './Components/Left';
import Right from './Components/Right';

const App = () => {
  const [review, setReview] = useState(''); 

  return (
    <div className="flex">
      <Left setReview={setReview} />
      <Right review={review} />
    </div>
  );
};

export default App;
