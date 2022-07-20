import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Pdf } from './pages/Pdf'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pdf" element={<Pdf />}/>
    </Routes>
  )
}