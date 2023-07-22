import React from 'react'
import Logo from '../../images/mylittleponylogo.png'
import './Home.css'
import Mlp from '../../components/Mlp/Mlp'
import { Helmet } from 'react-helmet-async'
import ThreeTypes from '../../images/ponycrystals.jpeg'
import MlpOpeningMusic from '../../audio/My Little Pony - Friendship is Magic - Opening.mp3'

export default function Home({data, openModal, modalContent}) {
    
    function playMusic(){
        let audio = new Audio(MlpOpeningMusic)
        audio.play()
        // console.log("music")
    }


    return (
        <>
            <Helmet>
                <title>My Little Website Home Page</title>
                <meta name='description' content='This is the home page for my little website'></meta>
            </Helmet>
            <main>
                <img className="img" src={Logo} alt={"logo"} onClick={playMusic}></img>
                <div className='pony-info'>
                <h2> What are the Pony types?</h2>
                <h3>There are 3 main types of Ponies:</h3>
                <ul className='threeTypes'>
                    <li>Earth</li>
                    <ol>
                        <li>G1, G2, G3: Dominant pony type and were the original type introduced. </li>
                        <li>G4: Equally distributed with the other three main types. Earth ponies shown to have connection to nature and have a very agriculture-based society.</li>
                        <li>G5:Earth ponies Terrestrial magic is introduced.</li> 
                    </ol>
                    <li>Unicorn</li>
                    <ol>
                        <li>G1: Horn that emerges from their foreheads which enables them to cast magic. They possess different magical abilities and have the common ability to "wink out" where they dissapear from one location and reappear in another.</li>
                        <li>G2: Have their own different magic abilities</li>
                        <li>G3: Unicorn ponies all live in Unicornia. </li>
                        <li>G4: They live everywhere and all possess teleport magic "wink out"</li>
                        <li>G5: At the beginning Unicorn magic was absent and they are very superstitious.Unicorn horns now have ornate markings on them, unique to each type.</li>
                    </ol>
                    <li>Pegasus</li>
                    <ol>
                        <li>G1: Feathered wings which enables them to fly though the air.</li>
                        <li>G2: Wings only appear when wished upon</li>
                        <li>G3: Back to being born with wings</li>
                        <li>G4: With wings and have the ability to fly, walk on clouds and controle the weather. They live everywhere but their main city is Cloudsdale up in the clouds.</li>
                        <li>G5: At the beginning Pegasus ponies had lost the ability to fly. Pegasus ponies live in Zephyr Heights a metropolis built atop a mountain. </li>
                    </ol>
                </ul>
                <img className="img" src={ThreeTypes} alt={"three main pony types"}></img>

                <h3>There are many other types of ponies and creaturs. These include:</h3>
                <ul>
                    <li>Alicorns</li>
                    <li>Sea Ponies</li>
                    <li>Dragons</li>
                    <li>Flutter Ponies</li>
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
