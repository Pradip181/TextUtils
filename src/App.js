
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes, 
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (type, msg) => {
    setalert({
      type: type,
      msg: msg
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('success', 'Dark Mode Enabled')
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('success', 'Light Mode Enabled')
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils"  about="About Text Utils"></Navbar> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert} />
      <div className="container my-3">
        <Router>
          <Routes>
            <Route path="/about" element={<About mode={mode} />} >

            </Route>
            <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
            }>

            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
