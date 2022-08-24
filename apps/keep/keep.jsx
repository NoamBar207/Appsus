import { noteService } from "./services/note.service.js"
import { NoteList } from './cmps/note-list.jsx'
import { AddNote } from '../keep/cmps/note-add.jsx'
import { eventBusService } from '../../services/event-bus-service.js'
// import { NotePreview } from "./cmps/note-preview.jsx"
import { NoteFilter } from './cmps/note-filter.jsx'
import { SideBar } from './cmps/side-bar.jsx'
import {UserMsg} from '../../cmps/user-msg.jsx'
'use strict'


export class Keep extends React.Component {
    state = {
        filterBy: null,
        notes: [],
        inputType: 'txt',
        type: 'all',
    }

    componentDidMount() {
        setTimeout(this.loadNotes, 1000)
 
     

    }

    loadNotes = (type,val) => {
        noteService.query(type,val)
            .then(notes => {
                return this.setState({ notes })
            })
    }

    onDeleteNote = (noteId) => {
        noteService.deleteNote(noteId)
            .then(() => {
                this.loadNotes();
                eventBusService.emit('user-msg', {
                    type: 'success', txt: 'Deleted car successfully'
                })
            })
            .catch(() => {
                eventBusService.emit('user-msg', {
                    type: 'danger', txt: 'Could not delete car :('
                })
            })
    }

    onCreate = (note, type) => {
        // console.log(note)
        noteService.add(note, type)
        this.loadNotes();
    }

    onDupNote = (bookId) => {
        noteService.dupNote(bookId);
        this.loadNotes()
    }

    onFilter = ({ target }) => {
        const val = target.value;
        this.setState({ type: val })
        this.loadNotes(val);
    }
    
    onSerchFiter=({target})=>{
        const val = target.value;
        const type = target.name
        this.setState({type:type})
        this.loadNotes(type,val)
    }

    onPinNote = (bookId) => {
        noteService.pinnedDown(bookId);
        this.loadNotes()
    }

   

    render() {
        const { notes, inputType } = this.state;
        return <section className='app-notes'>
            <section className='upper flex column'>
                <NoteFilter onFilter={this.onFilter} onSerchFiter={this.onSerchFiter} />
                <AddNote onCreate={this.onCreate} />
            </section>
            <SideBar/>

            <section className='notes main-layout'>
                <h1 className='notes-title-pin'>Pinned</h1>
                <section className='note-list-pinned'>
                    <NoteList isPinned={true} onPinNote={this.onPinNote} loadNotes={this.loadNotes} notes={notes} onDupNote={this.onDupNote} onDeleteNote={this.onDeleteNote} history={this.props.history} />
                </section>
                <h1 className='notes-title-pin not'>Others</h1>
                <section className='note-list-not-pinned '>
                    <NoteList isPinned={false} onCreate={this.onCreate} onPinNote={this.onPinNote} loadNotes={this.loadNotes} notes={notes} onDupNote={this.onDupNote} onDeleteNote={this.onDeleteNote} history={this.props.history} />
                </section>
            </section>

            <UserMsg />
        </section>
    }
}