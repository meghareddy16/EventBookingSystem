
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventList from './components/EventList';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';
import EventDetail from './components/EventDetail'; 


const App = () => {
  return (
      <AuthProvider>
          
              <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/eventlist" element={<EventList />} />
                  <Route path="/events/:eventId" element={<EventDetail />} />          
              </Routes>
          
      </AuthProvider>
  );
};


export default App;
