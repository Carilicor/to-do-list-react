import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AddTask from './components/AddTask.jsx';
import ToDoList from './components/ToDoList.jsx';

 

function App() {
  return (
<>
<Header />
<BrowserRouter>
<Routes>
<Route path='/' element={<ToDoList/>}/>
<Route path='/add' element={<AddTask />}/>
</Routes>

</BrowserRouter>
<Footer />
</>





  );
}

export default App;
