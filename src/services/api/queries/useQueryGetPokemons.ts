import { useQuery } from "react-query";
import { fetchGetPokemons } from "../requests/Pokemons";

export function useQueryGetPokemons() {
    const onError = () => {};
    const query = useQuery("apiPokemons", () => fetchGetPokemons(), { onError });
    return query;
}
