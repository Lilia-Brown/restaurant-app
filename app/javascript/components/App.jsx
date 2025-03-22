import React from "react"
import { Route, Routes } from "react-router"
import Restaurants from "./Restaurants/Restaurants"
import Restaurant from "./Restaurant/Restaurant"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Restaurants />} />
      <Route path="/restaurants/:slug" element={<Restaurant />} />
    </Routes>
  )
}

export default App
