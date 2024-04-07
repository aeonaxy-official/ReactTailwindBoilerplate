import Login from '../Pages/Login.main'
import Profile from '../Pages/Login.profile'
import LoginVerification from '../Pages/Login.verification'
import { Routes, Route } from "react-router-dom"
import Moto from "../Pages/Login.moto"


const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/moto' element={<Moto />} />
      <Route path='/email-verify' element={<LoginVerification />} />
    </Routes>
  )
}

export default Main