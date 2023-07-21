import './Reset.css'
import './App.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Quiz from './pages/Quiz/Quiz'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Data from './data.json'
import SelectedPony from './components/SelectedPony/SelectedPony';
import { useState } from 'react';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function handleModal(pony){
    setShowModal(!showModal)
    setModalContent(pony)

  }
  function closeModal(pony){
    setShowModal(!showModal)
    setModalContent(pony)
  }
  

  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home openModal={handleModal} modalContent={modalContent} data={Data}/>}></Route>
        {/* <Route path='/' element={<Home openModal={handleModal} modalContent={modalContent} data={Data}/>}></Route> */}
        <Route path='/about' element={<About/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
      </Routes>
      <Footer/>
      {showModal && <SelectedPony modalContent={modalContent} closeModal={closeModal} />}
    </div>
    </BrowserRouter>
  );
}

export default App;
