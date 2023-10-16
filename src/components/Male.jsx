import { useEffect , useState} from "react"



function Male() {
    const [characters, setcharacters] = useState ([]); 

    useEffect(() => {
        async function fetchdata() {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json()
            const genderMale = data.results.filter(character => character.gender === "Male");
            setcharacters(genderMale);
        }
        fetchdata()
    },[]) 
    
    return (
        <>
            <ul className="cards">
            {characters.map(characters=>{
                return(
                    <li>                  
                        <img src={characters.image}  />
                        <h2>{characters.name}</h2>
                        <h3>Genero : {characters.gender}</h3>
                        <h3>Origen : {characters.origin.name}</h3>
                        <h3>Specie : {characters.species}</h3>
                        <h3>Status : {characters.status}</h3>
                    </li>  
                )
            })}
            </ul>
        </>
    )
}

export default Male