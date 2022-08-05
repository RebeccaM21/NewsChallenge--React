import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import mockNewsData from './mockNewsData.json'; 
import HeadlineMain from './Components/HeadlineMain';
import SummaryMain from './Components/SummaryMain';

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
    <div className="App">
      <HeadlineMain headlines={headlineData} />
      < SummaryMain headlines={headlineData} />
    </div>
  );
}

export default App;
