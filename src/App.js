import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AddTask from './components/AddTask.jsx';
import ToDoList from './components/ToDoList.jsx';
import Login from './security/Login.jsx'
import Profile from './security/Profile.jsx'


 

export default function App() {
  const [user, setUser] = useState()
  const [token, setToken] = useState()
  return (
<>
<Header />
<BrowserRouter>
<Routes>
{user
        ? <Route path='/profile' element={<Profile token={token} setUser={setUser} user={user} />} />
        : <>
          <Route path='/' element={<Login setToken={setToken} setUser={setUser} />} />
        </>
      }
<Route path='/' element={<ToDoList/>}/>
<Route path='/add' element={<AddTask />}/>

</Routes>

</BrowserRouter>
<Footer />
</>
          





  );
}


