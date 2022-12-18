import styles from './Header.module.scss'

export default function Header() {
    return <header className={ styles.header }>
        <h1>
            <a href="/">Blog</a>
        </h1>
    </header>
}