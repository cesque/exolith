import styles from './TarotGrid.module.scss'

import data from '@/data/tarotDecks'

function Image({ caption, src }) {
    return <figure className={ styles.imageContainer }>
        <img className={ styles.image } src={ src } />

        <figcaption className={ styles.caption }>{ caption }</figcaption>
    </figure>
}

export default function TarotGrid() {
    return <div className={ styles.grid }>
        { data.map(deck => <Image caption={ deck.name } src={ deck.landscapeCardImage ?? deck.cardImage } />) }
    </div>
}