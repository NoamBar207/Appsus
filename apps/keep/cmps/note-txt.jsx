


export class NoteTxt extends React.Component {
    // console.log(props)
    state = {
        editing: false,
        // ** Initialize "text" property with empty string here
        text: ''
    }

    titleCheck() {
        const title = this.props.note.info.title
        if (title) return title
    }

    render() {
        const txt = this.props.note.info.txt
        return <section className={this.props.note.id}>
            <h1>{this.titleCheck()}</h1>
            <div className='note-txt'>
                <h3 onClick={this.props.onTextClick}>{txt}</h3>
            </div>
        </section>
    }
}
// onTextClick={this.onTextClick}