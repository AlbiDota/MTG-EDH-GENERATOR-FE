export async function apiCall(param) {
    // const url = process.env.url || "http://localhost:3001/deckbuilder"
    const url = "http://localhost:3001/deckbuilder"
    // const url = "http://mtg-backend-env.eba-ngp9ifxe.eu-north-1.elasticbeanstalk.com/deckbuilder"
    // const url = "https://mtg-backend-bert.com/deckbuilder"
    // const url = "https://mtg-backend-bert.elasticbeanstalk.com/deckbuilder"
    try {
        const res = await fetch(`${url}/${decodeURIComponent(param)}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        });
        const result = await res.json();
        console.log(result);
        return result;
    } catch(err) {
        alert(err);
        console.error(err);
    }
}