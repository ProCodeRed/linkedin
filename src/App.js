import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Feed from './Component/Feed';
import Header from './Component/Header';
import Login from './Component/Login';
import Sidebar from './Component/Sidebar';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser)

  return (
    <div className="app">
      <Header />
      { !user ? <Login /> : (
              <div className="app__body">
              <Sidebar />
              <Feed />
              {/* widges */}
            </div>
      )}
    </div>
  );
}

export default App;
