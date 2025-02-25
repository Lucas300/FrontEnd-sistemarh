import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/home/Home"
import CardColaborador from './components/colaborador/cardscolaborador/CardColaborador'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import Sobre from './pages/sobre/Sobre'

function App() {
  return (
    <BrowserRouter>
          <NavBar />
          <div className="min-h-80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/colaborador" element={<CardColaborador />} />
              <Route path="/sobre" element={<Sobre />} />

            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
  )
}

export default App
