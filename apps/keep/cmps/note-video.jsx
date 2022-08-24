

// import LiteYouTubeEmbed from "react-lite-youtube-embed";

export function NoteVideo(props) {
    const title = props.note.info.title
    const url = props.note.info.url
    function titleCheck() {
        // console.log(url)
        if (title) return <h1>{title}</h1>
    }

    return <React.Fragment>
        <iframe className='youtube-video' width="100%" height="250"
            src={url}>
        Try Using Emeded Tag</iframe>
        {titleCheck()}
    </React.Fragment>
}