import React, { ReactNode } from "react"
import { externalLinks, musicFolder } from "./index"
import Link from "../components/Link"

export interface MusicProps {
    groupName: string
    type: string
    description: string | ReactNode
    image: string
    publicationDate: string
}

export const musics: MusicProps[] = [
    {
        groupName: "Oulitsa",
        type: "Chants tsiganes et russes",
        description: <div>
            Oulitsa, ce n’est ni plus ni moins que trois musiciens qui vous feront voyager à travers
            un répertoire d’airs populaires des contrées d’Europe de l’Est. <br/>
            Pour les curieux c’est ici 👇🏼 <br/>
            <Link src={ externalLinks.music.oulitsa }>{ externalLinks.music.oulitsa }</Link>
        </div>,
        image: `${ musicFolder }/oulitsa`,
        publicationDate: "30"
    },
    {
        groupName: "54",
        type: "Rap, trap, jazz, pop",
        description: <div>
            54 c’est un duo choletais qui promet de nous offrir un retour aux sources au travers de
            mélodies saisissantes et de textes qui marquent les esprits. <br/><br/>
            Une courte pause dans le temps pour contempler la divinité de la nature, mais aussi sa
            cruauté. A la croisée du hip/hop et de la chanson, le piano est le véritable chef
            d’orchestre. Un concert unique qui fait repenser le monde comme ils veulent le voir…
        </div>,
        image: `${ musicFolder }/54`,
        publicationDate: "30"
    },
    {
        groupName: "Félix Hardouin Quartet",
        type: "Jazz",
        description: <div>
            Fondé autour des deux frères Félix Hardouin et Jean Hardouin (batterie), ce quartet
            intègre les excellents Levi Harvey (piano) et Alexis Denis Callier (contrebasse). <br/>
            Deux set de compositions énergiques et dynamiques, teintées de jazz et de musique latine
            !
        </div>,
        image: `${ musicFolder }/felix_hardouin_quartet`,
        publicationDate: "31"
    },
    {
        groupName: "Wugo",
        type: "Pop",
        description: <div>
            On ne peut pas faire plus local, artiste lyonnais qui a grandi juste à côté de
            Mazé-Milon, on est très contentes de pouvoir inviter Wugo, que nous suivons depuis
            de nombreuses années. <br/>Sa pop synthétique sillonne les parois du rêve et nous
            emmène dans les méandres de l’esprit du jeune artiste où tempêtes et rayons de soleil 
            font bon ménage. <br/>
            Pour découvrir sa musique c’est ici 👇🏼 <br/>
            <Link src={ externalLinks.music.wugo }>https://youtu.be/wc3LAkClt0k</Link>
        </div>,
        image: `${ musicFolder }/wugo`,
        publicationDate: "31"
    }
]