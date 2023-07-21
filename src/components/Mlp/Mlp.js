import './Mlp.css'
// import pinkiepie from "../../images/
import ponyImages from "../../PonyImages/PonyImages"

// export default function Mlp({name, type, description, pet, ponyImgSrc, ponyImages}) {
    export default function Mlp({name, type, description, pet, ponyImgSrc}) {

    console.log(ponyImgSrc)
    // console.log(name)
    console.log(ponyImages)


    // const ponyImgWithPath = ponyImages[ponyImgSrc]
    

    return (
        <div className='pony'>
            <h2>{name}</h2>
            <img className='img' src={require(`../../images/${ponyImgSrc}.jpeg`)} alt={name}></img>
            <p>Who is she? {description}</p> 
            <p>Her pet is called {pet}</p>           
            <p>She is {type} pony.</p>
        </div>
    )
}
