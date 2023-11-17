import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import{
//     BrowserRouter as Router,
//     Route,
//     Routes
// } from "react-router-dom"

function App() {
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);
    
    const showAlert = (message, type)=>{
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 3000);
    }
    const toogleMode=()=>{
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#503e3e';
            showAlert("Dark mode has been enabled", "success");
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success")
        }
    }
    return (
        <>
            {/* <Router> */}
                <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toogleMode={toogleMode} />
                <Alert alert={alert}/>
                <div className="container my-3">
                    {/* <Routes> */}
                        {/* <Route exact path='/about' element={<About/>} /> */}
                    {/* </Routes> */}
                    {/* <Routes> */}
                        {/* <Route exact path='/' element={} /> */}
                    {/* </Routes> */}
                    <TextForm showAlert={showAlert} heading="Enter text here to start analyzing" mode={mode} />
                </div>
            {/* </Router> */}
        </>
    );
}

export default App;
