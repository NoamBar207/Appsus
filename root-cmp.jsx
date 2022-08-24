import { Home } from "./pages/app-home.jsx"
import { About } from "./pages/app-about.jsx"
import { Header } from "./cmps/header.jsx"
import {Mail} from "./apps/mail/Mail.jsx"
import {Keep} from "./apps/keep/Keep.jsx"
import { Book } from "./apps/book/Book.jsx"


const Router = ReactRouterDOM.HashRouter
const {Route, Switch} = ReactRouterDOM

export function Main() {
    return <Router>
        <section className="all-content">
            <Header/>
        <section className="app">
            <main>
                <Switch>
                 
                    <Route path="/Book" component={Book} />
                    <Route path="/Mail" component={Mail} />
                    <Route path="/Keep" component={Keep} />
                    <Route path="/About" component={About} />
                    <Route path="/" component={Home} />
                   
                </Switch>
            </main>
        </section></section>
    </Router>
}

