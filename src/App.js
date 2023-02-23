import { useState } from 'react';
import './App.css';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'

import Home from './pages/home';
import Materialadd from './pages/materialadd';
import Materialshow from './pages/materialshow';
import Materialedit from './pages/materialedit';
import Durablearticlesadd from './pages/durablearticlesadd';
import Durablearticlesshow from './pages/durablearticlesshow';
import Durablearticlesedit from './pages/durablearticlesedit';
import Moveroom from './pages/moveroom';

function App() {

  return (
    <BrowserRouter>
      <div class="sidenav">
        <a class="navbar-brand" ><NavLink to="/">Home</NavLink></a>
        <a><div class="dropdown">
          <button class="dropbtn">จัดการวัสดุ
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a class="nav-link active" aria-current="page"><NavLink to="/materialadd">เพิ่ม</NavLink></a>
            <a class="nav-link active" aria-current="page"><NavLink to="/materialshow">แสดง</NavLink></a>
          </div>
        </div></a>
        <a><div class="dropdown">
          <button class="dropbtn">จัดการครุภัณฑ์
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a class="nav-link active" aria-current="page"><NavLink to="/durablearticlesadd">เพิ่ม</NavLink></a>
            <a class="nav-link active" aria-current="page"><NavLink to="/durablearticlesshow">แสดง</NavLink></a>
          </div>
        </div></a>
        <a><div class="dropdown">
          <button class="dropbtn">จัดการใบเบิก
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a class="nav-link active" aria-current="page"><NavLink to="/">วัสดุ</NavLink></a>
            <a class="nav-link active" aria-current="page"><NavLink to="/">ครุภัณฑ์</NavLink></a>
          </div>
        </div></a>
        <a><div class="dropdown">
          <button class="dropbtn">จัดการคืน
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a class="nav-link active" aria-current="page"><NavLink to="/">ครุภัณฑ์</NavLink></a>
          </div>
        </div></a>
        <a><div class="dropdown">
          <button class="dropbtn">จัดการแจ้งซ่อม
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a class="nav-link active" aria-current="page"><NavLink to="/">ครุภัณฑ์</NavLink></a>
          </div>
        </div></a>
        <a><div class="dropdown">
          <button class="dropbtn">แจ้งย้ายห้อง
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a class="nav-link active" aria-current="page"><NavLink to="/moveroom">ครุภัณฑ์</NavLink></a>
          </div>
        </div></a>
        <a><div class="dropdown">
          <button class="dropbtn">ออกรายงาน
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a class="nav-link active" aria-current="page"><NavLink to="/">วัสดุ</NavLink></a>
            <a class="nav-link active" aria-current="page"><NavLink to="/">ครุภัณฑ์</NavLink></a>
          </div>
        </div></a>
      </div>
      <div class="content">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/materialadd' element={<Materialadd />}></Route>
          <Route path='/materialshow' element={<Materialshow />}></Route>
          <Route path='/materialedit' element={<Materialedit />}></Route>
          <Route path='/durablearticlesadd' element={<Durablearticlesadd />}></Route>
          <Route path='/durablearticlesshow' element={<Durablearticlesshow />}></Route>
          <Route path='/durablearticlesedit' element={<Durablearticlesedit />}></Route>
          <Route path='/moveroom' element={<Moveroom />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
