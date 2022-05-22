import {FC, ReactNode} from "react";
import Head from "next/head";
import {Navbar} from "../ui";

interface Props {
    children: ReactNode,
    title?: string
}

const hostname = (typeof window === 'undefined') ? '' : window.location.origin
export const Layout: FC<Props> = ({children, title = 'PokeApp'}: Props) => {

    return (
        <>
            <Head>
                <title>{title}</title>

                <meta name='author' content='Daniela Liendo'/>
                <meta name='description' content={`Información sobre el pokémon ${title}`}/>
                <meta name='keywords' content={`${title}, pokemon, pokedex`}/>

                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta es la página sobre ${title}`} />
                    <meta property="og:image" content={`${hostname}/img/banner.png`} />
            </Head>

            <Navbar/>

            <main>
                {children}
            </main>

        </>
    )
}