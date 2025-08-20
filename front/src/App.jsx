import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage' // ajuste o caminho conforme sua pasta
import SignUpPage from './pages/SignUpPage' // ajuste o caminho conforme sua pasta
import LoginPage from './pages/LoginPage' // ajuste o caminho conforme sua pasta

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
