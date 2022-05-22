import {SmallPokemon} from "../../interfaces";
import {FC} from "react";
import {Card, Grid, Row, Text} from "@nextui-org/react";
import {useRouter} from "next/router";

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({pokemon}) => {

    const router = useRouter();

    const onClick = async () => {
        router.push(`/name/${pokemon.name}`)
    }

    return (
        <Grid onClick={onClick} key={pokemon.id} xs={6} sm={3} md={2}>
            <Card hoverable clickable>
                <Card.Body css={{p: 1}}>
                    <Card.Image
                        src={pokemon.img}
                        width='100%'
                        height={140}
                    />
                    <Card.Footer>
                        <Row justify='space-between'>
                            <Text transform='capitalize'>{pokemon.name}</Text>
                            <Text>#{pokemon.id}</Text>
                        </Row>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </Grid>
    )
}