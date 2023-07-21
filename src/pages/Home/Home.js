import React from 'react'
import Logo from '../../images/mylittleponylogo.png'
import './Home.css'
import Mlp from '../../components/Mlp/Mlp'
import { Helmet } from 'react-helmet-async'
import pinkipie from "../../images/pinkiepie.png"


export default function Home({data}) {
    
    function playMusic(){
        console.log("music")
    }

    const ponyImages = [
        pinkipie,
    ]
    
    let ponyImg = pinkipie

    return (
        <>
            <Helmet>
                <title>My Little Website Home Page</title>
                <meta name='description' content='This is the home page for my little website'></meta>
            </Helmet>
            <main>
                <img className="img" src={Logo} alt={"logo"} onClick={() => (playMusic())}></img>
                <h2> What are the Pony types?</h2>
                <ul>
                    <li>Earth</li>
                    <li>Unicorn</li>
                    <li>Pegasus</li>
                    <li>Alicorn</li>

                </ul>
                <h2> Who are the Mane6?</h2>
                <div className='mane6'>
                    
                    {data.map((pony)=>{
                        return(
                        <Mlp 
                        name={pony.name}
                        key={pony._id}
                        type={pony.type}
                        ponyImgSrc = {pony.imgSrc}
                        ponyImg={ponyImg}
                        pet={pony.pet}
                        description={pony.description}/>
                        )}
                    )}
                </div>
                
            </main>
    </>
    )
}
