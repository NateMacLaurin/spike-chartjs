import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import BarChart from '../BarChart/BarChart.jsx'
import LineGraph from '../LineGraph/LineGraph.jsx'
import PieChart from '../PieChart/PieChart.jsx'
import RadarChart from '../RadarChart/RadarChart.jsx'
import './App.css';

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
    })
  }, []);
  

  return (
    <>
      <Header />
      <BarChart data={data} />
      <LineGraph data={data} />
      <PieChart data={data} />
      <RadarChart data={data} />
    </>
  );
}

export default App;
