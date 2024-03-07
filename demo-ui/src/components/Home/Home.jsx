import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home/Home.css'

export default function Home() {
    const navigateTo  = useNavigate();
    
    const handleGetStarted = (e) => {
        e.preventDefault();
        navigateTo("/form");
      };

  return (
    <>
      <div className='home-container'>
        <h2 className='title'> Welcome To Iden's Demo! </h2>
        <button onClick={handleGetStarted} className='get-started-btn'> Get Started </button>
      </div>
    </>
  );
}
