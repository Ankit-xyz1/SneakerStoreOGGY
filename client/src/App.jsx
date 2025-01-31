
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import Login from './pages/login.jsx'
import BuyCourse from './pages/BuyCourse'
import Profile from './pages/Profile.jsx'
import CreateProduct from './pages/CreateProduct.jsx'
import YourOrder from './pages/YourOrder.jsx'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/yourOrders' element={<YourOrder/>}></Route>
      <Route path="/buycourse/:id" element={<BuyCourse/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/createProduct" element={<CreateProduct/>} />
    </Routes>
   
    </>
  )
}

export default App
