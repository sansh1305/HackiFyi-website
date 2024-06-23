import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './Pages/Landing'
import SponserUs from './Pages/SponserUs'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sponsor" element={<SponserUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
