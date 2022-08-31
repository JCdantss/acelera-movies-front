import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/home/home'
// import { Login } from './pages/login/Login'
import { Movie } from './pages/movie/movie'
import { NewLogin } from './pages/newlogin/newLogin'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/log" element={<NewLogin />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/movie/:id" element={<Movie />} exact />
      </Routes>
    </BrowserRouter>
  )
}
