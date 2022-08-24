const { Link } = ReactRouterDOM
import { NoteTxt } from "./note-txt.jsx";
import { NoteImg } from "./note-img.jsx";
import { NoteToDo } from "./note-todo.jsx";
import { NoteVideo } from "./note-video.jsx";
import { noteService } from "../services/note.service.js";
import { eventBusService } from "../../../services/event-bus-service.js";
// import React from 'react';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPalette } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const { withRouter } = ReactRouterDOM;
 class _NotePreview extends React.Component {
    state = {
        note: null,
        type: 'x',
        noteStyle: {
            backgroundColor: '',
            color: '',
            // fonstSize: '',
        },
        mailFromNote:''
    }

    removeEvent;

    // handleStyleChange = (field, value) => {
    //     this.setState((prevState) => ({ footerStyle: { ...prevState.footerStyle, [field]: value } }))
    // }

    componentDidMount() {

        eventBusService.on('get-note', (note) => {
            // console.log('str from header', str)
            // this.setState({ noteFromMail:note },()=>{
            //     console.log('cdsishvkjebnfewnsssd')
            // })
            this.props.onCreate(note, 'note-txt')
        })


    }
    componentWillUnmount() {
        // this.removeEvent()
    }

    componentDidUpdate() {
        // console.log(this.state)
    }

    onSendNoteToMail = (note) => {
 
        let mail
        if(note.type ==='note-txt'){
            mail= {  subject: note.info.title, body: note.info.txt }

        }  
        else return
        this.props.history.push(`/mail/compose?subject=${mail.subject}&body=${mail.body}`)
        

    }

    setColor = (noteId) => {
        const color = event.target.value
        const field = event.target.name
        noteService.setBGC(noteId, color, field)
        this.props.loadNotes();
    }

    onPinNote = (noteId) => {
        noteService.pinnedDown(noteId);
        this.props.loadNotes();
    }


    onTextClick = (ev, bookId) => {
        event.path[0]='';
        let todo={txt:val,doneAt:null}
        noteService.addTodo(noteId, todo);
        event.target[0].value='';
        this.props.loadNotes();
    }

    // handleStyleChange = (field, value) => {
    //     this.setState((prevState) => ({ footerStyle: { ...prevState.footerStyle, [field]: value } }))
    // }




    render() {
        const note = this.props.note
        let style = { backgroundColor: note.style.backgroundColor, color: note.style.color }
        const { type, noteStyle } = note;

        // console.log(this.props.note)
        return <section style={style} className="note-preview"  >
            <section draggable className="note" onDragStart={(event)=>this.props.handleDragStart(event,note)} >
                <DynamicCmp onTextClick={(ev) => this.onTextClick(note)} loadNotes={this.props.loadNotes} onDeleteNote={this.props.onDeleteNote} note={this.props.note} type={type} />
            </section>
            <div className='note-preview-btn'>
                <label className="palette-bgc" title="Set BGC Color">
                    <input type="color" name="backgroundColor" className="input-color" onChange={(ev) => this.setColor(note.id)} />
                    <i className="fa-solid fa-palette"></i>
                </label>
                <label className="palette-txt" title="Set Text Color">
                    <input type="color" name="color" className="input-color" title="Set Text Color" onChange={(ev) => this.setColor(note.id)} />
                    <i className="fa-solid fa-palette"></i>
                </label>
                <label className="dup-note" title="Duplicate">
                    <button onClick={() => this.props.onDupNote(note.id)} ></button>
                    <i className="fa-solid fa-copy"></i>
                </label>
                <label className="note-to-mai0l" title="To Mail">
                    <button onClick={() => this.onSendNoteToMail(note)} ></button>
                    <i className="fa-solid fa-copy"></i>
                </label> 
                <label className="pin-note" title="Pin Up">
                    <button onClick={() => this.onPinNote(note.id)} ></button>
                    <i className="fa-solid fa-thumbtack"></i>
                    {/* <label className="edit-note" title='Edit'>
                        <button onClick={() => this.onEditNote(note.id)} ></button>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </label> */}
                </label>
                <label className="delete-note" title="Delete">
                    <button onClick={() => this.props.onDeleteNote(note.id)}  ></button>
                    <i className="fa-solid fa-trash"></i>
                </label>
            </div>
            {/* HERE */}
        </section>

    }
}


function DynamicCmp(props) {
    // console.log(props.type)
    switch (props.type) {
        case 'note-txt': {
            // console.log(props.note)
            return <NoteTxt onTextClick={props.onTextClick} onDeleteNote={props.onDeleteNote} note={props.note} />
        }
        case 'note-img': {
            return <NoteImg  onDeleteNote={props.onDeleteNote} note={props.note} />
        }
        case 'note-todos': {
            return <NoteToDo loadNotes={props.loadNotes} onDeleteNote={props.onDeleteNote} note={props.note} />
        }
        case 'note-video': {
            return <NoteVideo onDeleteNote={props.onDeleteNote} note={props.note} />
        }
    }
}

export const NotePreview = withRouter(_NotePreview);