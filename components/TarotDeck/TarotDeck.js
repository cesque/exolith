import styles from './TarotDeck.module.scss'

export default function TarotDeck({ deck: { name, type, deckImage, cardImage } }) {
    if (deckImage == cardImage) {
        console.log({ name })
    }
    return <div className={ styles.deck }>
        <h3 className={ styles.name }>{ name }</h3>

        <div className={ styles.images }>
            { deckImage ? <img className={ styles.image } src={ deckImage } /> : <p className={ styles.noDeckBox }>(no deck box)</p> }
            <img className={ styles.image } src={ cardImage } />
        </div>
    </div>
}