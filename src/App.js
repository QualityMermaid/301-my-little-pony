import './Reset.css'
import './App.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Quiz from './pages/Quiz/Quiz'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Data from './data.json'

function App() {
  let ponyData = Data
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home data={ponyData}/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
