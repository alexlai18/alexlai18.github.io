import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import NavBar from './components/NavBar';
import AboutMePage from './pages/AboutMePage';
import ProjectsPage from './pages/ProjectsPage';
import SocialsPage from './pages/SocialsPage';

function App () {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='/aboutme' element={<AboutMePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/socials' element={<SocialsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
