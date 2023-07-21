import { useState } from 'react';
import './SelectedPony.css'

export default function SelectedPony({modalContent, closeModal}) {

    

    const [alicornImg, setAlicornImg] = useState()    
    console.log(alicornImg)
    console.log(modalContent.pony.newType)


    function alicorn(){
        modalContent.pony.newType === "an alicorn" ? setAlicornImg(modalContent.pony.newType) : setAlicornImg("no");

    console.log(modalContent.pony.newType)
    // return(
    //     <div>
    // <img className='alicorn' src={`../images/${modalContent.pony.newType}.jpeg`} alt='alicorn'></img>
    // </div>
    // )
    }
  return (
    <>
        <div className='modal'>
            <div className='pony-modal'>
            <h2>{modalContent.pony.name}</h2>
                <img className='img' src={require(`../../images/${modalContent.ponyImgSrc}.jpeg`)} alt={modalContent.pony.name} onClick={() => (alicorn())}></img>
                <ul>
                    <li>{modalContent.pony.description}</li> 
                    <li>Her pet is called {modalContent.pony.pet}</li>           
                    <li>She is {modalContent.pony.type} pony.</li>
                </ul>
                <button className='close-button' onClick={closeModal}>X</button>
            </div>

        </div>

        <div>
    <img className='alicorn' src={`../images/${modalContent.pony.newType}.jpeg`} alt='alicorn'></img>
    </div>
    </>
  )
}
