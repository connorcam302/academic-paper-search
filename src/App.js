import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer.js';
import NotFound from './components/NotFound.js';
import HomePage from './components/HomePage.js';
import PaperPage from './components/PaperPage.js';
import AuthorPage from './components/AuthorPage.js';
import ReadingListPage from './components/ReadingListPage.js'
import Header from './components/Header.js';
import NavBar from './components/NavBar.js';



function App() {
  return (
    <BrowserRouter basename={"/kf6012/coursework/part2"}>
    <div className="App">
    <NavBar />
    
    <div className='pageContent'>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="papers" element={<PaperPage />} />
        <Route path="author" element={<AuthorPage />} />
        <Route path="readinglist" element={<ReadingListPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;