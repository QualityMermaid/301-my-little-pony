import React from 'react'
import Logo from '../../images/mylittleponylogo.png'
import './Home.css'
import Mlp from '../../components/Mlp/Mlp'
import { Helmet } from 'react-helmet-async'
import ThreeTypes from '../../images/ponycrystals.jpeg'

export default function Home({data, openModal, modalContent}) {
    
    function playMusic(){
        // console.log("music")
    }


    return (
        <>
            <Helmet>
                <title>My Little Website Home Page</title>
                <meta name='description' content='This is the home page for my little website'></meta>
            </Helmet>
            <main>
                <img className="img" src={Logo} alt={"logo"} onClick={() => (playMusic())}></img>
                <div className='pony-info'>
                <h2> What are the Pony types?</h2>
                <h3>There are 3 main types of Ponies:</h3>
                <ul className='threeTypes'>
                    <li>Earth</li>
                    <ol>
                        <li>G1</li>
                        <li>G2</li>
                        <li>G3</li>
                        <li>G4</li>
                        <li>G5</li>
                    </ol>
                    <li>Unicorn</li>
                    <ol>
                        <li>G1</li>
                        <li>G2</li>
                        <li>G3</li>
                        <li>G4</li>
                        <li>G5</li>
                    </ol>
                    <li>Pegasus</li>
                    <ol>
                        <li>G1</li>
                        <li>G2</li>
                        <li>G3</li>
                        <li>G4</li>
                        <li>G5</li>
                    </ol>
                </ul>
                <img className="img" src={ThreeTypes} alt={"three main pony types"}></img>

                <h3>There are many other types of ponies and creaturs. These include:</h3>
                <ul>
                    <li>Alicorns</li>
                    <li>Seaponies</li>
                    <li>Dragons</li>
                </ul>
                <h2> Who are the Mane6?</h2>
                <p> In Gen4 there is a group of ponies called the Mane6. They are:</p>
                </div>
                <div className='mane6'>
                    
                    {data.map((pony)=>{
                        return(
                        <Mlp 
                        pony={pony}
                        name={pony.name}
                        key={pony._id}
                        type={pony.type}
                        ponyImgSrc = {pony.imgSrc}
                        pet={pony.pet}
                        description={pony.description}
                        openModal={openModal}
                        modalContent={modalContent}
                        />
                        )}
                    )}
                </div>
                
            </main>
    </>
    )
}
