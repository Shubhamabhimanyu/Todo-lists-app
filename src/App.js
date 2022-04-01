
import './App.css';
import { useState, useEffect } from "react";


import Home from './Home';
import Navbar from './component/Navbar';


function App() {



  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 3000);

  }, []);






  return (

    <>

      {
        spinner ?
          <div style={{ textAlign: "center", alignItems: "center", display: "flex", justifyContent: "center", width: "100%", height: "100vh" }}>
            <div className="spinner-border" role="status" >
            </div>
          </div>
          :
          <>
            <Navbar />
            <Home />
          </>
      }
    </>
  );
}

export default App;
