import {Spacer, Text, Link} from "@nextui-org/react";
import Image from "next/image";
import NextLink from 'next/link';

export const Navbar = () => {

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'start',
            padding: '0 20px',
            backgroundColor: '#111111',
        }}>
            <Image
                width={70}
                height={70}
                alt={'icono de la app'}
                src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'}
            />
            <NextLink href={'/'} passHref>
                <Link>
                    <Text color="white" h2>Pokémon</Text>
                </Link>
            </NextLink>
            <Spacer css={{flex: 1}}/>
            <NextLink href={'/favorites'}>
                <Link>
                    <Text color="white">Favoritos</Text>
                </Link>
            </NextLink>
        </div>
    )

}