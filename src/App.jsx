import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import GetDonar from './GetDonar'
import Register from './Register'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route path='/' element={<Register />} />
           <Route path='/getblood' element={<GetDonar />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App