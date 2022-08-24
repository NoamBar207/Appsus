
const { withRouter } = ReactRouterDOM;


class _MailHeader extends React.Component {

    state = {


    }

    onGoToMain = () => {
        this.props.history.push('/mail')
    }


    render() {
        return <header className="mail-header  flex space-between align-center main-layout">
            <section className="gmail-logo flex"><img className="gmail-logo-img" src="../../img/gmail-logo.png"/><h1 onClick={this.onGoToMain} className="mail-logo ">BMail</h1></section>
            <section className="header-content flex"><input onChange={this.props.handleChange} name="txt" className="search" type="search" placeholder="search mail by text" />
            <select className="filter-by-read" name="isRead" onChange={this.props.handleChange}>
                <option value='all'>All</option>
                <option value={true}>Read Emails</option>
                <option value={false}>Unread Emails</option>
            </select></section>
            <div className="user-sign main-layout flex center">b</div>
        </header>
    }

}

export const MailHeader = withRouter(_MailHeader);