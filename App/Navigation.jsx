import React, { useEffect } from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Home from "../src/pages/Home";
import Profile from "../src/pages/Profile";
import Login from "../src/components/Login";
import "../src/sass/App.scss"; // SCSS global
import Index from "../src/pages/Index";
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../redux/userActions';

const Navigation = () => {
    const dispatch=useDispatch()
     const {token}=useSelector(state=>state.user)
     useEffect(()=>{
const tokenFromStorage = localStorage.getItem("token")
if (tokenFromStorage) {
getProfile(tokenFromStorage,dispatch)
}
     },[])
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Page d'accueil */}
          <Route path="/index" element={<Index />} /> {/* Page Index */}
          <Route path="/login" element={token?<Navigate replace to="/"/>:<Login />} /> {/* Page de connexion */}
          <Route path="/profile" element={token?<Profile />:<Navigate replace to="/login"/>} /> {/* Page Profil */}
          <Route path="/*" element={<Navigate replace to="/"/>} /> {/* Page Profil */}
          {/* Page Sign-In */}
        </Routes>
        <Footer /> {/* Affiche le footer sur toutes les pages */}
      </Router>
  )
}

export default Navigation