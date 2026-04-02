import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { apiCall } from "./apiCall";

// export async function apiCall(param) {
//     // const url = process.env.url || "http://localhost:3001/deckbuilder"
//     const url = "http://localhost:3001/deckbuilder"
//     try {
//         const res = await fetch(`${url}/${param}`, {
//             method: "GET",
//             headers: {"Content-Type": "application/json"}
//         });
//         const result = await res.json();
//         console.log(result);
//         return result;
//     } catch(err) {
//         alert(err);
//         console.error(err);
//     }
// }
function DeckGrid() {

    const path = useLocation();
    // const pathSearch = new URLSearchParams(path.search);
    const param = path.search;
    console.log(param);

    // api call
    let deck = [];
    useEffect(() => {
        // const res = apiCall(param);

    },[param]);


    // vil gjøre noe sånn while deck.length==0 spill trommevirvel or smth
    let playing = true;
    useEffect(() => {
        playing=false;
        audio.pause();
        audio.currentTime = 0; // rewind!
    },[deck]);

    const audio = new Audio("/trommevirvel.mp3");
    // audio.play();



    return (
        <div>
            <div className="commander">

            </div>
            <div className="deck-grid">

            </div>
        </div>
    )
}

export default DeckGrid;