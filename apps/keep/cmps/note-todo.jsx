import { noteService } from "../services/note.service.jsx"


export class NoteToDo extends React.Component {
    state = {
        todos: [],
        currToDo: { txt: '', doneAt: null }
    }


    titleCheck() {
        const title = this.props.note.info.title
        if (title) return title
    }

    // toDoCheck = (todo) => {
    //     if (!todo.doneAt) return todo.txt
    //     return todo.txt
    // }

    handleCheck = () => {

    }

    clickTodo = (todo) => {
        let noteId = this.props.note.id
        noteService.todoClick(noteId, todo);
        this.props.loadNotes();
    }

    onDeleteTodo = (todo, id, ev) => {
        let noteId = this.props.note.id
        let todoIdx = ev.target.value
        noteService.deleteTodo(noteId, todo, todoIdx);
        this.props.loadNotes();
    }

    onAddToDo = (noteId) => {
        event.preventDefault()
        let val=event.target[0].value;
        let todo={txt:val,doneAt:null}
        noteService.addTodo(noteId, todo);
        event.target[0].value='';
        this.props.loadNotes();
    }
    // markLine = (idx) => {
    // console.log("sqin")
    // }
    render() {
        // console.log(this.props.note.info)
        const todos = this.props.note.info.todos
        const id = this.props.note.id
        return <section className='todo'>
            <h1>{this.titleCheck()}</h1>
            <ul key={`todo ${id}`}>
                <div className='li-to-scroll'>
                {todos.map((todo, idx) => {
                    return <li className='todo-li flex' key={`line-${idx}`}>
                        <span className='todo-txt' onClick={() => this.clickTodo(todo, id)} style={{ textDecoration: todo.doneAt ? "line-through" : "none" }} >
                            {todo.txt}
                        </span>
                        <label className='todo-delete' title='Delete Line'>
                            <i className="fa-solid fa-circle-minus"></i>
                            <button onClick={(event) => this.onDeleteTodo(todo, id, event)} value={idx}  ></button>
                        </label>
                    </li>
                })}
                </div>
                <li className='todo-li flex'>
                    <form onSubmit={() => this.onAddToDo(id)}>
                        <input type='text' placeholder='Add Todo...'/>
                    </form>
                </li>
            </ul>
        </section>
    }
}