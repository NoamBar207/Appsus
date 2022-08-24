

const { Link, NavLink, withRouter } = ReactRouterDOM



export function SideBar() {

    return <section className='side-bar'>
        <nav>
            <div className='div-home'>
                <NavLink to="/" exact>
                    <label className="dup-note" title="Home">
                        <i className="fa-solid fa-house"></i>
                    </label></NavLink>
            </div>
            <div className='div-keep'>
                <NavLink to="/keep"><label className="dup-note" title="Keep Home">
                    <i className="fa-solid fa-book"></i>
                </label></NavLink>
            </div>
            <div className='div-mail'>
                <NavLink to="/mail" activeClassName="my-active"><i className="fa-solid fa-at"></i></NavLink>
            </div>
        </nav>

    </section>
}