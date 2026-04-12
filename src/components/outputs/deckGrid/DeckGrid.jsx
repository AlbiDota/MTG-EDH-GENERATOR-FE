import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { apiCall } from "./apiCall";
import "./DeckGrid.css"


function DeckGrid() {

    const path = useLocation();
    // const pathSearch = new URLSearchParams(path.search);
    const param = path.search;
    // console.log(param);

    const [filter, setFilter] = useState(null);


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
        return <div className="loading"style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"200px"}}> HOOOOOOOOOOLD!!!! </div>
    }

    const commander = deck?.[0];
    const the99 = deck?.slice(1) || [];


    let basics = [];
    the99.forEach(card => {
        if (card.type.includes("Basic Land")) {
            const index = basics.findIndex(i=>i[card.name]!=undefined);

            if (index==-1) {
                basics.push({[card.name]:1});
            } else {
                basics[index][card.name] +=1;
            }
            
        }
    });

    
    // filter logic
    let filteredDeck = the99;
    if (filter) {
        if (filter=="other") {
            filteredDeck = the99.filter(card => 
                !card.type.toLowerCase().includes("sorcery") &&
                !card.type.toLowerCase().includes("instant") &&
                !card.type.toLowerCase().includes("enchantment") &&
                !card.type.toLowerCase().includes("artifact") &&
                !card.type.toLowerCase().includes("land") &&
                !card.type.toLowerCase().includes("creature")
            );
        } else {
            filteredDeck = the99.filter(card => card.type.toLowerCase().includes(filter))
        }
    }


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
                ) : (<div className="commander"><p>I'm sorry it didn't work :(<br/>Might be hardware overload or poor exception handling on my backend :((</p><img src="/empty_card.gif" className="commander" draggable={false}/></div>)}
            </div>
            <div className="filter-panel">
            {!loading ? (<>
                <button className={`filter-button ${filter==null?"selected":""}`} onClick={()=>setFilter(null)}>All</button>
                <button className={`filter-button ${filter=="sorcery"?"selected":""}`} onClick={()=>setFilter("sorcery")}>Sorceries</button>
                <button className={`filter-button ${filter=="instant"?"selected":""}`} onClick={()=>setFilter("instant")}>Instants</button>
                <button className={`filter-button ${filter=="enchantment"?"selected":""}`} onClick={()=>setFilter("enchantment")}>Enchantments</button>
                <button className={`filter-button ${filter=="artifact"?"selected":""}`} onClick={()=>setFilter("artifact")}>Artifacts</button>
                <button className={`filter-button ${filter=="creature"?"selected":""}`} onClick={()=>setFilter("creature")}>Creatures</button>
                <button className={`filter-button ${filter=="land"?"selected":""}`} onClick={()=>setFilter("land")}>Lands</button>
                {/* <button className="filter-button" onClick={()=>setFilter("other")}>Other?</button> */}
            </>):(<></>)}
            </div><br/>
            
            <div className="deck-grid">
                {filteredDeck.map((card, index) => (
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
                {deck.map((card, index) => !card.type.includes("Land") ? <p key={card.name} style={{margin:"-0.5px"}}>1 {card.name}</p>:<></>)}
                <br/>{deck.map((card, index) => card.type.includes("Land")&& !card.type.includes("Basic Land") ? <p key={card.name} style={{margin:"-0.5px"}}>1 {card.name}</p>:<></>)}
                {/* {basics.map((land, index) => <p key={land.name} style={{margin:"-0.5px"}}>{card.name}</p>)} */}
                {basics.map((land, index) => {const [name, count] = Object.entries(land)[0]; return(<p key={name}style={{margin:"-0.5px"}}>{count} {name}</p>)})}
            </div>
        </div>
    )
}

export default DeckGrid;