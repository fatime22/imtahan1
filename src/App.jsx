import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Admin from './pages/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/admin/' element={<Admin/>}>
          <Route></Route>

        </Route>
      </Routes>
      
    </>
  )
}

export default App
