import {Grid} from "@nextui-org/react";
import {FC} from "react";
import {FavoriteCardPokemon} from "../pokemon";

interface Props {
    favoritePokemons: number[]
}

export const Favorites: FC<Props> = ({favoritePokemons}) => {

    return (
        <Grid.Container
            gap={2}
            direction='row'
            justify='flex-start'
        >
            {favoritePokemons.map(id => (
                <FavoriteCardPokemon key={id} id={id}/>
            ))}
        </Grid.Container>
    )
}