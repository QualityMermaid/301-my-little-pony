import './Mlp.css'
// import images from "../../images/pinkiepie.png"

export default function Mlp({name, type, description, pet, ponyImg}) {

    

    return (
        <div className='pony'>
            <h2>{name}</h2>
            <img className='img' src={ponyImg} alt={name}></img>
            <p>Who is she? {description}</p> 
            <p>Her pet is called {pet}</p>           
            <p>She is {type} pony.</p>
        </div>
    )
}
