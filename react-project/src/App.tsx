import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import CharPage from './pages/CharacterPage';

function App(): React.JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="/char" element={<CharPage />} />
      </Route>
    </Routes>
  );
}

export default App;
