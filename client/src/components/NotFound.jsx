import { Route, Routes } from 'react-router-dom'

export const NotFound = () => {
  return (
    <Routes>
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
  )
}
