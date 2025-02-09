import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import CharPage from './pages/CharacterPage';
import NotFoundPage from './pages/NotFoundPage'; 

function App(): React.JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="/char/:id" element={<CharPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* 404 Route */}
      </Route>
    </Routes>
  );
}

export default App;
