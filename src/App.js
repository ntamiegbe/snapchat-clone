import React from 'react';
import './index.css';
import Webcamera from './components/Webcam';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Preview from './components/Preview';
import Chats from './components/Chats';
import ViewPost from './components/ViewPost';

function App() {
  return (
    <div className="container flex flex-col items-center justify-center bg-snapchat h-screen w-full">
      <Router>
        <div className="drop-shadow-md rounded-lg">
          <Routes>
            <Route exact path='/' element={<Webcamera />} />
            <Route path='/preview' element={<Preview />} />
            <Route path='/chats' element={<Chats />} />
            <Route path='/chats/view' element={<ViewPost />} />
          </Routes>
        </div>
      </Router>


    </div>
  );
}

export default App;
