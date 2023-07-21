import './Mlp.css'


export default function Mlp({name, type, description, pet, ponyImgSrc, openModal, pony}) {

    return (
        <div className='pony'>
            <h2>{name}</h2>
            <img className='img' src={require(`../../images/${ponyImgSrc}.jpeg`)} alt={name} onClick={() => (openModal({pony, ponyImgSrc}))}></img>
            <p className='moreDetails'>*Click pony for more details</p>
            {/* <ul>
                <li>{description}</li> 
                <li>Her pet is called {pet}</li>           
                <li>She is {type} pony.</li>
            </ul> */}

        </div>
    )
}
