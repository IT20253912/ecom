import {BrowserRouter, Route, Routes} from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../Pages/Home/Home"
import User from "../Pages/User/User"


const Approuter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout/>}>
               <Route index element={<Home />} />
               <Route path="user" element={<User />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Approuter