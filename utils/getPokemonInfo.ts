import {pokeApi} from "../api";
import {Pokemon} from "../interfaces";

export const getPokemonInfo = async (nameOrId: string): Promise<object> => {

    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }

}