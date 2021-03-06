import { http } from "helpers/Http";

export async function fetchGetPokemons(): Promise<any> {
    const url = "pokemon?limit=10&offset=0";
    const data = http.get(url).then((response) => response.data);
    return data;
}