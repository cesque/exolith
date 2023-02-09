import styles from './Ink.module.scss'

import inks from '@/data/inks'

export default function Ink(props) {
    let inkData = null

    if(props.ink) {
        inkData = inks.find(x => x.id == props.ink) || { name: 'Unknown ink!', color: 'red' }
    } else {
        inkData = {
            name: props.name,
            color: props.color,
            sheen: props.sheen,
            shimmer: props.shimmer,
        }
    }

    

    let style = {
        '--ink-color': inkData.color,
        '--ink-sheen': inkData.sheen ?? inkData.color,
        '--ink-shimmer': inkData.shimmer ?? 'transparent',
    }

    return <span className={ styles.ink } style={ style }>
        <div className={ styles.swatch } />
        <span className={ styles.name }>{ inkData.name }</span>
    </span>
}