import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/home/Home"
import CardColaborador from './components/colaborador/cardscolaborador/CardColaborador'


function App() {
  return (
    <BrowserRouter>
          <div className="min-h-80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/colaborador" element={<CardColaborador />} />
            </Routes>
          </div>
        </BrowserRouter>
  )
}

export default App
