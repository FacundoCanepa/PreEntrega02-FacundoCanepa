import { Routes , Route } from "react-router-dom"
import Personajes from "./Personajes"
import Alive from "./Alive"
import Dead from "./Dead"
import Female from "./Female"
import Male from "./Male"
import Human from "./Human"
import Alien from "./Alien"



const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/All" element={Personajes()} />
                <Route path="/Dead" element={Dead()} />
                <Route path="/Alive" element={Alive()} />
                <Route path="/Female" element={Female()} />
                <Route path="/Male" element={Male()} />
                <Route path="/Human" element={Human()} />
                <Route path="/Alien" element={Alien()} />
            </Routes>
        </main>
    )
}
export default Main 