import classNames from 'classnames'
import styles from './Footer.module.scss'

export default function Footer({ slug, info, meta }) {
    function getCode() {
        let n = +info.inode
        let normalClasses = classNames(styles.codePart)
        let longClasses = classNames(styles.codePart, styles.codePartLong)

        return <>
            <span className={ longClasses }>{ (n * 7919003).toString(16) }</span>
            <span className={ longClasses }>{ (n * 51).toString(16) }</span>
            <span className={ normalClasses }>{ n.toString(16) }</span>
        </>
    }

    function getTags() {
        let links = meta.tags.map(tag => {
            return <a href={ `/~/${ tag }` } className={ styles.tag }>{ tag }</a>
        })

        return links.reduce((p, c) => {
            return [p, '.', c]
        })
    }

    let hasTags = meta.tags && meta.tags.length > 0

    return <div className={ styles.footer }>
        {/* <div className={ styles.row }>
            { `pub{` }<span className={ styles.rowData }>{ info.created }</span>{ `}` }
        </div>
        <div className={ styles.row }>
            { `upd{` }<span className={ styles.rowData }>{ info.modified }</span>{ `}` }
        </div> */}
        { hasTags && <div className={ styles.row }>tags/{ getTags() }</div> }
        <div className={ styles.row }>© <a href="https://tech.lgbt/@cesque">cesque</a> 2022</div>
        <div className={ classNames(styles.row, styles.rowWrap) }>{ getCode() }/{ slug }</div>
    </div>
}
