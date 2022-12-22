import React, { useEffect } from 'react';
import './index.css';
import Webcamera from './components/Webcam';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Preview from './components/Preview';
import Chats from './components/Chats';
import ViewPost from './components/ViewPost';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import Login from './components/Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid
          })
        )
      } else {
        dispatch(logout())
      }
    })
  }, [])
  return (
    <div className="container flex flex-col items-center justify-center bg-snapchat h-screen w-full">
      <Router>
        {!user ? (
          <Login />
        ) : (
            <div className="flex flex-col items-center justify-center">
            <img src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt="" className='h-[90px] object-contain' />
            <Routes>
              <Route exact path='/' element={<Webcamera />} />
              <Route path='/preview' element={<Preview />} />
              <Route path='/chats' element={<Chats />} />
              <Route path='/chats/view' element={<ViewPost />} />
            </Routes>
          </div>
        )}
      </Router>


    </div>
  );
}

export default App;
