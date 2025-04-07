import Dishes from "./Dishes/Dishes"
import React from "react"
import { Route, Routes } from "react-router"
import Restaurants from "./Restaurants/Restaurants"
import Restaurant from "./Restaurant/Restaurant"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Restaurants />} />
      <Route path="/restaurants/:slug" element={<Restaurant />} />
      <Route path="/dishes" element={<Dishes />} />
    </Routes>
  )
}

export default App
