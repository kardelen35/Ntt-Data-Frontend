import React from 'react';
import './App.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import ListUser from './components/User/listUser';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CreateUser from './components/User/CreateUser';
import UpdateUser from './components/User/UpdateUser';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/users" element={<ListUser />}/>
            <Route path="/add-user" element={<CreateUser />}/>
            <Route path="/update-user/:id" element={<UpdateUser/>}/>
          </Routes>
          <ToastContainer />
        </div>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
