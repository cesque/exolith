import classNames from 'classnames'
import styles from './TTRPG.module.scss'

export default function TTRPGList({ data }) {
    return <ul className={ styles.list }>
        { data.map(ttrpg => <TTRPG { ...ttrpg } forID={ ttrpg.for } />)}
    </ul>
}

function TTRPG({ name, link, type, forID, played }) {
    let capitalisedType = type[0].toUpperCase() + type.slice(1).toLowerCase()
    let classes = classNames(styles.ttrpg, styles['ttrpg' + capitalisedType])
    return <li className={ classes }>
        <a className={ styles.link } href={ link }>
            <div className={ styles.name }>{ name }</div>
            <div className={ styles.info }>
                <div className={ styles.type }>{ type }</div>
                { forID && <div className={ styles.for }>{ forID }</div> }
                { played && <div className={ styles.played }>◆</div> }
            </div>
        </a>
    </li>
}