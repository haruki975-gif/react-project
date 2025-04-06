import { useState } from 'react'
import './App.css'
import Header from './component/Common/Header/Header';
import Footer from './component/Common/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Common/Home/Home';
import Join from './component/Member/Join/Join';
import Login from './component/Member/Login/Login';
import { AuthProvider } from './component/context/AuthContext';
import Info from './component/Member/Info/Info';
import BoardList from './component/Board/BoardList';
import BoardForm from './component/Board/BoardForm';
import BoardDetail from './component/Board/BoardDetail';
import Map from './component/Ground/Map';
import BaseballMember from './component/Ground/BaseballMember';

function App() {
  return (
    <>
      <AuthProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/info" element={<Info />} />
          <Route path="/boards" element={<BoardList />} />
          <Route path="/boardForm" element={<BoardForm />} />
          <Route path="/boards/:id" element={<BoardDetail />} />
          <Route path="/map" element={<Map />} />
          <Route path="/baseballMember" element={<BaseballMember />} />
        </Routes>

        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
