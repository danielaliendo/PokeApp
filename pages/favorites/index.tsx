import {NextPage} from 'next'
import {Layout} from "../../components/layouts";
import {NoFavorites, Favorites} from "../../components/ui";
import {useEffect, useState} from "react";
import {localFavorites} from "../../utils";

const FavoritesPage: NextPage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons());
    }, []);

    return (
        <Layout title='Favoritos'>
            {favoritePokemons.length === 0
                ? (<NoFavorites/>)
                : (<Favorites favoritePokemons={favoritePokemons}/>)
            }

        </Layout>
    );

};

export default FavoritesPage
