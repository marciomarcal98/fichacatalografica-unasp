import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CatalogSheet } from './pages/CatalogSheet'
import { Instructions } from './pages/Instructions'
import { PDFPage } from './pages/PDFPage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<CatalogSheet />} />
        <Route path="/instructions" element={<Instructions />} />
      </Route>
      <Route path="/pdfpage" element={<PDFPage />}/>
    </Routes>
  )
}