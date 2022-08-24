import { MailPreview } from "./mail-preview.jsx";

export function MailList({onUpdateMailCategory, onUpdateMailStatus, mails, onUpdateReadState, onUpdateStarredState, onDelete}){
    return <div className="mail-list-container flex column">
    {mails.map(mail=> <MailPreview onUpdateMailCategory={onUpdateMailCategory} onUpdateMailStatus={onUpdateMailStatus} onDelete={onDelete} onUpdateStarredState={onUpdateStarredState} onUpdateReadState={onUpdateReadState} mail={mail} key={mail.id} />)}
    </div>
}