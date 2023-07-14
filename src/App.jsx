import './App.css'
import Page from './Page'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Login } from './Login'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Page />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </>
  )
}

export default App
