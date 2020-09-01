import React from 'react';
import './css/App.css';
import Home from './components/Home';
import Axios from "axios";



function App() {

  Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
