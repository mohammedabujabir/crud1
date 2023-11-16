import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './components/users/Index.jsx';
import Create from './components/users/Create.jsx';
import Details from './components/users/Details.jsx';
import Edit from './components/users/Edit.jsx';
import {Route,Routes} from 'react-router-dom';
function App() {
  return (
   <Routes>
   <Route path='/'element={<Index/>}/>
   <Route path='/user/index' element={<Index/>}/>
   <Route path='/user/create'element={<Create/>}/>
   <Route path='/user/:id'element={<Details/>}/>
   <Route path='/user/edit/:id'element={<Edit/>}/>
   <Route path='*'element={<h2>user not found</h2>}/>
   </Routes>
  )
}

export default App
