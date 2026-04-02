import { useLocation } from "react-router-dom";
import DeckGrid from "../components/outputs/DeckGrid";


function Deck() {
    // console.log(useLocation())

    return (
        <div>
            <DeckGrid />
        </div>
    )
}

export default Deck;