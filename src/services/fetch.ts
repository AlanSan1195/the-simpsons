const url = "https://thesimpsonsapi.com/api/characters"


interface Characters {
    id: number;
    name: String;
    portrait_path: String;
    age?: number;
    phrases?: String[];
}
export async function fetchSimpsons(): Promise<Characters[]> {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        return data.results || [];
    } catch(error) {
        console.error("Error:", error);
        return [] as Characters[];
    }
}

