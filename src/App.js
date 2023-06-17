import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React,{useState} from 'react';
import Alert from './Components/Alert';

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)
  
  const showAlert = (message, type) =>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1000);
    }


  const toggleMode = ()=>{
      if(mode === 'light')
      {
        setmode('dark')
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        showAlert("Dark mode has been enabled.", "success")
      }
      else
      {
        setmode('light')
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        showAlert("Light mode has been enabled.", "success")
      }
  }

//__________________________________________________________________________
    

    

  return (
    <>
      <Navbar brand ="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-5">
        <Textform mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
      </div> 
      
    </>
  );
}

export default App;
