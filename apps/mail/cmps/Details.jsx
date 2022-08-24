import { mailService } from "../mail-services/mail-service.js";
const { Route, NavLink } = ReactRouterDOM

export class Details extends React.Component {
    state = {
        mail: null
    }

    componentDidMount() {
        this.loadMail()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.mailId !== this.props.match.params.mailId) {
            this.loadMail()
        }
    }

    loadMail = () => {
        const { mailId } = this.props.match.params
        mailService.getById(mailId)
            .then(mail => {
                if (!mail) return this.props.history.push('/mail')
                this.setState({ mail })
            })
    }
    render() {

        const { mail } = this.state
        if (!mail) return <div>Loading..</div>

        const to = mail.to === 'user@appsus.com' ? 'Me' : mail.to
       
        return <article className="details flex column ">
                
                <section className="subject-status flex">
                    <div className="avatar-img-container"></div>
                    <span className="details-subject">{mail.subject}</span>
                    <span className="details-status">{mail.status}</span> 
                </section>
                <p className="details-from">{mail.from}</p>
                <p className="details-to">{to}</p>
                <p className="details-body">{mail.body}</p>
            </article>
    
    }
}

