export function ShortenTxt({ text }) {
 
    return <span className="body">{text.substring(0,50)}</span>
}