import styles from './Header.module.scss'

export default function Header({ slug }) {
    return <header className={ styles.header }>
        <h1>
            <a className={ styles.home } href="/">exolith</a>
            <span className={ styles.separator }>/</span>
            <a className={ styles.slug } href={ `/${ slug }` }>{ slug }</a>
        </h1>
    </header>
}