import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import AdminForm from './Component/AdminForm';
import ManageData from './Component/ManageData';
import Sidebar from './Component/Sidebar';
import { useEffect, useState } from 'react';
import LoginPage from './Component/LoginPage';

function App() {

  const [login, setlogin] = useState(false)

  useEffect(() => {
    setlogin((localStorage.getItem("login")))
  }, [login])


  return (
    <BrowserRouter>
      <div className="main_form d-flex">
        {
          login ?
            <>
              <Sidebar />
              <div className="main-content p-4 p-lg-5 flex-grow-1">
                <Routes>
                  <Route path="/" element={<AdminForm setlogin={setlogin} />} />
                  <Route path="/add-data" element={<AdminForm setlogin={setlogin} />} />
                  <Route path="/manage-data" element={<ManageData />} />
                </Routes>
              </div>
            </>
            :
            <>
              <div className="main_login p-2 p-lg-5 flex-grow-1">
                <Routes>
                  <Route path="/" element={<LoginPage setlogin={setlogin} />} />
                  <Route path="*" element={<LoginPage setlogin={setlogin} />} />
                </Routes>
              </div>
            </>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;