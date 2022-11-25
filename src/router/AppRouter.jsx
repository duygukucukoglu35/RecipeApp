import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "../components/nav/Navbar"

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route>
    </Route>

    </Routes>


    </BrowserRouter>
  )
}

export default AppRouter