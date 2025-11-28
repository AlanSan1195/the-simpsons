const url = "https://thesimpsonsapi.com/api/characters"
async function fetchSimpsons() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results || [];
    } catch(error) {
        console.error("Error:", error);
        return [];
    }
}

export default fetchSimpsons;