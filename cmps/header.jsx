const { NavLink} = ReactRouterDOM

export function Header(){
    return <header className="main-header  flex space-between align-center">
        <h1 className="logo main-layout">Appsus<span className="dot">.</span></h1>
        <nav className="main-nav flex align-center main-layout">
            <NavLink to="/">Home</NavLink>
            {/* <NavLink to="/Book">Miss Books</NavLink> */}
            <NavLink to="/Mail">Mister Mail</NavLink>
            <NavLink to="/Keep">Miss Keep</NavLink>
            {/* <NavLink to="/About">About</NavLink> */}
        </nav>
    </header>
}