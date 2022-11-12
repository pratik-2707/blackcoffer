
import React, { useState ,useEffect} from 'react';
import BarChart from './barchart';
import BarChart2 from './barchart2';
import BarChart3 from './barchart3';
import BarChart4 from './barchart4';
import BarChart5 from './barchart5';

import './App.css';

function App() {

  const [data,setdata] = useState([])

  const show = async (e) =>{
    const res =  await fetch("/api/dashboard", {
        method : "GET"  
    })

    const resdata = await res.json();
    console.log(resdata.data);
    setdata(resdata.data)  
  }


useEffect(()=>{
    show();
},[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>DASHBOARD</h1>
        <br />
        <br />
        <h1>Intensity vs relevance</h1>
        <br />
        <BarChart data={data} />
        <br />
        <h1>Intensity vs Country</h1>
        <br />
        <BarChart2 data={data} />
        <br />
        <h1>likelihood vs Country</h1>
        <br />
        <BarChart3 data={data} />
        <br />
        <h1>likelihood vs topic</h1>
        <br />
        <BarChart4 data={data} />
        <br />     
        <h1>Intensity vs region</h1>
        <br />
        <BarChart4 data={data} />
        <br />     
      </header>
    </div>
  );
}

export default App;
