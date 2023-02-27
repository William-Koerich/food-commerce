import { Routes, Route } from 'react-router-dom'
import  BurgersPage  from './pages/Burgers'
import PizzasPage from './pages/Pizzas'
import DrinksPage from './pages/Drinks'
import IceCreamsPage from './pages/IceCreams'

import MainPage from './pages/Main'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurgersPage />} />
        <Route path='pizzas' element={<PizzasPage />} />
        <Route path='drinks' element={<DrinksPage />} />
        <Route path='ice-creams' element={<IceCreamsPage />} />
      </Route>
    </Routes>
  )
}
