export async function apiCall(param) {
    // const url = process.env.url || "http://localhost:3001/deckbuilder"
    const url = "http://localhost:3001/deckbuilder"
    try {
        const res = await fetch(`${url}/${param}`, {
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