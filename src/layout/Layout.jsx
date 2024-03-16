import styles from './Layout.module.css'
function Layout({children}) {
    return ( <>
        <header className={styles.header}>
            Crypto App
        </header>
        {children}
        <footer className={styles.footer}>
            <p>Developed by Morteza</p>
        </footer>
    </> );
}

export default Layout;