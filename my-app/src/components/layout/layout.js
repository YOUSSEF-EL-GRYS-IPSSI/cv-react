const Layout = ({ children }) => {
    return (
        <>
            <header>

                {/* <p>Je suis un header</p> */}
                
            </header>

            <main className="skills">
                <p>{children}</p>
            </main>

            <footer>
                {/* <p>Je suis le footer</p> */}
            </footer>
        </>
    )
}

export default Layout