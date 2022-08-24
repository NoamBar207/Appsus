import { NotePreview } from './note-preview.jsx'
import { eventBusService } from '../../../services/event-bus-service.js';
import { noteService } from '../services/note.service.js';

export class NoteList extends React.Component {
state={
        isPinned:false,
        noteFromMail:null,
        id:0,
    }
    removeEvent;

    componentDidMount() {
        this.removeEvent = eventBusService.on('get-note', (note) => {
            // debugger
            this.setState((prevState) => ({ noteFromMail: { ...prevState, noteFromMail: note } }))
            this.props.onCreate(note, 'note-txt')
            this.removeEvent()
        })
    }

    handleDragStart = (ev,note) => {
        // ev.preventDefault();
        const id = note.id
        const bool = note.isPinned
        ev.dataTransfer.setData("obj" , {id,bool})
        // id=note.id
        // console.log(this.id)
    }

    handleDragOver = (ev)=> {
        ev.preventDefault();
    }

    handleOnDrop= (e,note)=>{
        e.preventDefault();
        let obj=e.dataTransfer.getData("obj")
        noteService.pinnedDown(obj.id,note.isPinned)
        this.props.loadNotes();
    }

    render() {
        return <section className="note-list grid main-layout">
        {/* Hello */}
        {this.props.notes.map(note => {
            if(this.props.isPinned===note.isPinned)
            return <NotePreview handleDragStart={this.handleDragStart} onDrop= {this.handleOnDrop} onDragOver={(event)=>this.handleDragOver()} loadNotes={this.props.loadNotes} note={note} key={note.id} onDupNote={this.props.onDupNote} onDeleteNote={this.props.onDeleteNote}/>
        })}
    </section>
    }
}