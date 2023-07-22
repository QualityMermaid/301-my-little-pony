import { useState } from 'react';
import './SelectedPony.css'
import AlicornImage from '../../images/twilightsparkle-alacorn.png'

export default function SelectedPony({modalContent, closeModal}) {

    

    const [alicornImg, setAlicornImg] = useState(require(`../../images/${modalContent.ponyImgSrc}.jpeg`))    
    const [type, setType] = useState(modalContent.pony.type)    



    function alicorn(){
        modalContent.pony.newType === "an alicorn" ? setAlicornImg(AlicornImage) : setAlicornImg(require(`../../images/${modalContent.ponyImgSrc}.jpeg`));

    console.log(modalContent.pony.newType)
    }

    function changeType(){
        modalContent.pony.newType === "an alicorn" ? setType(modalContent.pony.newType) : setAlicornImg(modalContent.pony.type);

    }


  return (
    <>
        <div className='modal'>
            <div className='pony-modal'>
            <h2>{modalContent.pony.name}</h2>
                <img className='img' src={alicornImg} alt={modalContent.pony.name} onClick={() => (alicorn() + changeType())}></img>
                {/* <img className='img' src={require(`../../images/${modalContent.ponyImgSrc}.jpeg`)} alt={modalContent.pony.name} onClick={() => (alicorn())}></img> */}
                <ul>
                    <li>{modalContent.pony.description}</li> 
                    <li>Her pet is called {modalContent.pony.pet}</li>           
                    <li>She is {type} pony.</li>
                </ul>
                <button className='close-button' onClick={closeModal}>X</button>
            </div>

        </div>
    </>
  )
}
