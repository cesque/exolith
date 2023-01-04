import Link from 'next/link'
import React from 'react'
import styles from './GameRecommendation.module.scss'

export function GameRecommendationList({ data }) {
    return <ul className={ styles.list }>
        { data.map(game => {
            return <GameRecommendation isInList="true" {...game} />
        })}
    </ul>
}

export function GameRecommendation({id, name, description, link, isInList, imageOverride}) {
    function getImageURL() {
        return imageOverride || `https://cdn.cloudflare.steamstatic.com/steam/apps/${ id }/header_292x136.jpg`
    }

    let Tag = isInList ? 'li' : 'div'

    return <Tag className={ styles.game }>
        <a className={ styles.link } href={ link }>
            <img className={ styles.image } src={ getImageURL() } />

            <div className={ styles.content }>
                <h3 className={ styles.name }>{ name }</h3>
                <p className={ styles.description }>{ description }</p>
            </div>
        </a>
    </Tag>
}