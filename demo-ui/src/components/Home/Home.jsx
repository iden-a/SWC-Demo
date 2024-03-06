import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigateTo  = useNavigate();
    
    const handleGetStarted = (e) => {
        e.preventDefault();
        navigateTo("/form");
      };

  return (
    <>
      <div>
        <h1> Welcome To Iden's Demo! </h1>
        <button onClick={handleGetStarted}> Get Started </button>
      </div>
    </>
  );
}
