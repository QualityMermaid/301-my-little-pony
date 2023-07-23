import React, { useState } from 'react'
import './Quiz.css'
import { Helmet } from 'react-helmet-async'

// (require(`../../images/${data.ponyImgSrc}.jpeg`)

export default function Quiz(data) {

    const [pony, setPony] = useState("pony")
    const [pet, setPet] = useState("pet")
    const [petImgSrc, setPetImgSrc] = useState(require(`../../images/ponypets.png`))    


    function handlePonySearch(event){
        let ponyName = event.target.value
        setPony(ponyName)
        console.log(pony)
    }

    function handlePetSearch(event){
        let petName = event.target.value
        setPet(petName)
        console.log(pet)
    }

    function submitPonyPet(event){
        event.preventDefault()
        pet === pony ? setPetImgSrc(require(`../../images/${pet}.jpeg`)) : setPetImgSrc(require(`../../images/ponypets.png`));
    }
    
    return (
        <>
            <Helmet>
                <title>My Little Website Quiz Page</title>
                <meta name='description' content='This is the quiz page for my little website'></meta>
            </Helmet>
            <main className='quiz'>
                <h2>Quiz</h2>
                <form className='ponyPet-form' onSubmit={submitPonyPet}>
                    <legend>Pony Pet Match</legend>
                    <label>Pony:
                    <select name='selectPony' id='pony' onChange={handlePonySearch}>
                    <option value={""}>Select a Pony</option>
                    <option value={"gummy"}>Pinkie Pie</option>
                    <option value={"winona"}>Applejake</option>
                    <option value={"angel"}>Fluttershy</option>
                    <option value={"opal"}>Rarity</option>
                    <option value={"tank"}>Rainbow Dash</option>
                    <option value={"owlowiscious"}>Twilight Sparkle</option>
                    </select>
                    </label>
                    <label>Pet:
                    <select name='selectPet' id='pet' onChange={handlePetSearch}>
                    <option value={""}>Select a Pet</option>
                    <option value={"tank"}>Tank</option>
                    <option value={"angel"}>Angel</option>
                    <option value={"gummy"}>Gummy</option>
                    <option value={"winona"}>Winona</option>
                    <option value={"opal"}>Opal</option>
                    <option value={"owlowiscious"}>Owlowiscious</option>
                    </select>
                    </label>
                    <button typeof='submit'> Submit</button>
                </form>

                <img className="quizImg" src={petImgSrc} alt={"pony and pet"}></img>

                </main>
        </>
    )
}
