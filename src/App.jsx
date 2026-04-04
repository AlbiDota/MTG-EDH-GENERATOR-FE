import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import Deck from './pages/Deck';
/**
* MTG commander deck generator frontend
* 
* 
* @author Albert Einarssønn
*/
function App() {

  return (
    <BrowserRouter>
    
        <Routes className="main">
            <Route element={<MainLayout />}>
                <Route path={"/"} element={<Home/>} />
                <Route path={"/deck"} element={<Deck/>} target="_blank" rel="noopener noreferrer"/>
            </Route>
        </Routes>
    
    </BrowserRouter>
  )
}

export default App;