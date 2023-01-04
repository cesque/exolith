import styles from './Footer.module.scss'

export default function SimpleFooter() {
    return <div className={ styles.footer }>
        <div className={ styles.row }>© <a href="https://twitter.com/cesque">cesque</a> 2022</div>
    </div>
}
