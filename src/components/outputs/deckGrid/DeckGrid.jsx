import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { apiCall } from "./apiCall";
import "./DeckGrid.css"


function DeckGrid() {

    const path = useLocation();
    // const pathSearch = new URLSearchParams(path.search);
    const param = path.search;
    console.log(param);

    // api call
    const [loading, setLoading] = useState(true);
    const [deck, setDeck] = useState([]);
    useEffect(() => {
        async function getDeck() {
            setLoading(true);

            const res = await apiCall(param);

            if (res?.rawDeck) {
                setDeck(res.rawDeck);
            } else {
                setDeck([]);
            }

            setLoading(false);
        }
        
        getDeck();
    },[param]);

    if (loading) {
        return <div className="loading"style={{display:"flex", flexDirection:"column", alignItems:"center"}}> HOOOOOOOOOOLD!!!! </div>
    }

    const commander = deck?.[0];
    const the99 = deck?.slice(1) || [];





    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div className="commander">
                {commander ? (
                    <a href={commander.uri} draggable={false} target="_blank" rel="noopener noreferrer">
                        <img
                            src={commander.image}
                            alt={commander.name}
                            draggable={false}
                            content="userScalable: no"
                            onMouseEnter={(e) => e.preventDefault()}
                            onMouseLeave={(e) => e.preventDefault()}
                            
                        />
                    </a>
                ) : (<img src="/empty_card.gif" draggable={false}/>)}
            </div>
            <div className="deck-grid">
                {the99.map((card, index) => (
                    <a href={card.uri} draggable={false} target="_blank" rel="noopener noreferrer">
                        <img 
                            className="card"
                            key={index}
                            src={card.image}
                            alt={card.name}
                            draggable={false}
                            onMouseEnter={(e) => e.preventDefault()}
                            onMouseLeave={(e) => e.preventDefault()}
                            
                        />
                    </a>
                ))}
            </div>
            <div className="deck-list">
                <br/><br/><br/><br/>
                {deck.map((card, index) => !card.type.includes("Basic Land") ? <p key={card.name} style={{margin:"-0.5px"}}>{card.name}</p>:<></>)}
                {deck.map((card, index) => card.type.includes("Basic Land") ? <p key={card.name} style={{margin:"-0.5px"}}>{card.name}</p>:<></>)}
            </div>
        </div>
    )
}

export default DeckGrid;