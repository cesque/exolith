'use client'

import classNames from 'classnames'
import { useState } from 'react'
import styles from './TagsList.module.scss'

export default function TagsList({ tags, selected }) {
    let [showTags, setShowTags] = useState(selected != null)
    
    function getTags() {
        if(!tags || tags.length == 0) return null
    
        let links = tags.map(tag => {
            let classes = classNames(styles.tag, {
                [styles.tagSelected]: selected == tag
            })
    
            return <a href={ `/~/${ tag }` } className={ classes }>{ tag }</a>
        })
    
        return links.reduce((p, c) => {
            return [p, '.', c]
        })
    }

    if(showTags) {
        return <ul className={ styles.tags }>
            { getTags() }
        </ul>
    } else {
        return <a className={ styles.openTags } onClick={ () => setShowTags(true) }>tags</a>
    }
}