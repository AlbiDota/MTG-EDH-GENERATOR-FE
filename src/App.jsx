import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';

function App() {

  return (
    <BrowserRouter>
    
        <Routes className="main">
            <Route element={<MainLayout />}>
                <Route path={"/"} element={<Home/>} />

            </Route>
        </Routes>
    
    </BrowserRouter>
  )
}

export default App;