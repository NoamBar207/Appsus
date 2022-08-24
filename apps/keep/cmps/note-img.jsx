

export function NoteImg (props){

    const title = props.note.info.title
    const url = props.note.info.url
    const type = props.note
    function titleCheck(){
        if(title) return <h1>{title}</h1>
    }


    return <React.Fragment>
        <img src={url}/>
        {titleCheck()}
    </React.Fragment>
}