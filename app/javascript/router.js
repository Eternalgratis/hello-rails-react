import React from 'react';
import {
    Routes,
    Route,
  } from 'react-router-dom';
  import Greetings from './components/greeting';
  const Router = () => (
    <>
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </>
  
  );

  export default Router;
