import { noteService } from "./services/note.service.js"
export class Keep extends React.Component{
    state= {
        notes:[]
    }

    componentDidMount() {
        setTimeout(this.loadNotes,1000)
    }

    loadNotes=() =>{
        noteService.query()
        .then(notes =>{
            return this.setState({notes})
        })
    }

    render(){
        const notes=this.state.notes;
        if(!notes.length) return <h1>Loading...</h1>
        return <section>
            <h1>Lets GO</h1>
            <React.Fragment>
                    {/* <BookSearch addNewBook={this.addNewBook} books={books} /> */}
                    {/* <BookFilter onSetFilter={this.onSetFilter} /> */}
                    {/* <BookList books={books} /> */}
                </React.Fragment>
        </section>
    }
}