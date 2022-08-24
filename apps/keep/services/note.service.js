
import { NoteData } from "./note.data.js"
import { storageService } from "../../../services/storage.service.js"


const NOTE_KEY = 'notesDB'


export const noteService = {
    query,
    deleteNote,
    createNote,
    add,
    dupNote,
    setBGC,
    pinnedDown,
    todoClick,
    deleteTodo,
    addTodo,

}

function query(type, val) {
    let notes = _loadFromStorage()
    if (!notes) {
        notes = NoteData.getNotes()
        _saveToStorage(notes)
    }
    if (type === undefined) type = 'all'
    if (val || val === '' && type === 'txt') {
        notes = notes.filter(note => {
            if (note.type === 'note-todos') {
                note.info.todos.find(obj => {
                    if (obj.txt.includes(val)) return note
                })
            }
            else if (note.type === 'note-txt') {
                if (note.info.txt.includes(val)) return note
            }
            if (note.info.title) {
                if (note.info.title.includes(val)) return note
            }
        });
    }
    else if (type !== 'all') {
        notes = notes.filter(note => {
            return (note.type === type)
        })
    }
    return Promise.resolve(notes)
}

function deleteNote(noteId) {
    let notes = _loadFromStorage()
    notes = notes.filter(note => note.id !== noteId)
    _saveToStorage(notes)
    return Promise.resolve()
}


function add(noteToAdd, type) {
    // console.log(noteToAdd)
    let notes = _loadFromStorage()
    const lastId = notes[notes.length - 1].id
    let newId = getNewId(lastId)
    noteToAdd.id = newId;
    noteToAdd.type = type;
    if (!noteToAdd.isPinned) noteToAdd.isPinned = false;
    if (!noteToAdd.style) noteToAdd.style = { backgroundColor: 'green' }
    notes = [...notes, noteToAdd]
    _saveToStorage(notes)
}

function getNewId(bookId) {
    bookId = bookId + 1;
    return bookId
}

function _update(noteToUpdate) {
    let notes = _loadFromStorage()
    // console.log(noteToUpdate)
    _add(noteToUpdate)
    _saveToStorage(notes)
    return Promise.resolve()
}

function dupNote(noteId) {
    let copyNote = _findNote(noteId)
    add(copyNote, copyNote.type);
}

function setBGC(noteId, color, field) {
    let notes = _loadFromStorage()
    let newColor
    notes = notes.map(note => {
        if (note.id === noteId) {
            if (!note.style) {
                newColor = { backgroundColor: '', color: '' }
                note.style = newColor
            }
            note.style[field] = color;
        }
        return note
    })
    _saveToStorage(notes)
}

function pinnedDown(noteId, bool) {
    let notes = _loadFromStorage();
    notes.find((note) => {
        if (note.id === noteId && bool !== undefined) {
            note.isPinned = !bool
        }
        else if (note.id === noteId && bool === undefined) {
            note.isPinned = !note.isPinned
        }
    })
    _saveToStorage(notes)
}


function createNote(id, type, title, txt) {
    let note = {
        id,
        type,
        title,
        txt,
    }
    return _update(note)
}

function todoClick(noteId, todo) {
    let notes = _loadFromStorage();
    let newNotes = notes.map((note) => {
        if (note.id === noteId && note.type === 'note-todos') {
            note.info.todos.forEach(todoA => {
                if (todoA.txt === todo.txt && todoA.doneAt) todoA.doneAt = null
                else if (todoA.txt === todo.txt && !todoA.doneAt) todoA.doneAt = + new Date
            })
        }
        return note
    })
    _saveToStorage(newNotes)
}

function addTodo(noteId, todo) {
    let notes = _loadFromStorage();
    let newNotes = notes.map((note) => {
        if (note.id === noteId && note.type === 'note-todos') {
            note.info.todos.push(todo);
        }
        return note
    })
    _saveToStorage(newNotes)

}

function deleteTodo(noteId, todo, todoIdx) {
    let notes = _loadFromStorage();
    let newNotes = notes.map((note) => {
        if (note.id === noteId && note.type === 'note-todos') {
            note.info.todos.splice(todoIdx, 1);
        }
        return note
    })
    _saveToStorage(newNotes)
}

function _findNote(noteId) {
    let notes = _loadFromStorage()
    let resNote = notes.find(note => (note.id === noteId))
    return resNote
}



function _saveToStorage(notes) {
    storageService.saveToStorage(NOTE_KEY, notes)
}
function _loadFromStorage() {
    return storageService.loadFromStorage(NOTE_KEY)
}