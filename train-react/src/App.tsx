import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AddTrain } from './pages/AddTrain';
import { Login } from './pages/Login';
import { MainSite } from './pages/MainSite';
import { UpdateTrain } from './pages/UpdateTrain';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<MainSite/>}></Route>
        <Route path='/add'element={<AddTrain/>}></Route>
        <Route path='/update' element={<UpdateTrain/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
