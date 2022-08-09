import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HeadlineMain from './Components/HeadlineMain';
import SummaryMain from './Components/SummaryMain';
import NavBar from './Components/NavBar';

function App() {

  const [headlineData, setHeadlineData] = useState([]); 

  useEffect(() => {
    const getHeadlines = async () => {
      const response = await axios.get('http://localhost:4000/response');
      const headlineData = response.data.results;
      setHeadlineData(headlineData);
    }
    getHeadlines();
  }, []); 


  return (
    <Router>
      <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HeadlineMain headlines={headlineData} />} />
        <Route path="/summary/" element={<SummaryMain headlines={headlineData} />} />
      </Routes>
        </>
  </Router> 
  );
}

export default App;
