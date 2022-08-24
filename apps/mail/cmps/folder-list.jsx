import { mailService } from "../mail-services/mail-service.js"
export function FolderList({onUpdateCritiriaCategory, onToggleFolder ,inputRef, onUpdateCritiriaStatus, onUpdateCritiriaBooolian }) {

    const readPrecentage = mailService.ReadPrecentage()

    const style={width:`${readPrecentage}%`}

   
    
    return <section className="list-container main-layout flex column" >
     
        <ul className="folder-list flex column">
            <li className="flex align-center" onClick={() => onUpdateCritiriaStatus('inbox')}><div className="inbox-img-container flex align-center "></div><div className="inbox ">Inbox</div></li>
            <li className="flex align-center" onClick={() => onUpdateCritiriaBooolian('isStarred')}><div className="starred-img-container flex "></div><div className="starred ">Starred</div></li>
            <li className="flex align-center" onClick={() => onUpdateCritiriaStatus('sent')}><div className="sent-img-container flex "></div><div className="sent ">Sent</div></li>
            <li className="flex align-center" onClick={() => onUpdateCritiriaStatus('draft')}><div className="draft-img-container flex  "></div><div className="draft ">Draft</div></li>
            <li className="flex align-center" onClick={() => onUpdateCritiriaStatus('trash')}><div className="trash-img-container flex "></div><div className="trash ">Trash</div></li>
            <li className="categories flex align-center" onClick={onToggleFolder} ><div className="category-img-container"></div><div>Categories</div></li>
            <section className="categories-content clean-list flex column" ref={inputRef}>
                <li className="family flex align-center" onClick={()=>onUpdateCritiriaCategory('family')}><div className="family-img-container flex "></div><div>Family</div></li>
                <li onClick={()=>onUpdateCritiriaCategory('friends')} className="friends flex align-center"><div className="friends-img-container flex "></div><div >Friends</div></li>
                <li onClick={()=>onUpdateCritiriaCategory('promotions')} className="promotions flex align-center"><div className="promotions-img-container flex "></div><div >Promotions</div></li>
                <li onClick={()=>onUpdateCritiriaCategory('spam')} className="spam flex align-center"><div className="spam-img-container flex "></div><div >Spam</div></li>

            </section>
        </ul>
        <div className="read-quant">
            <div className="precentage" style={style}>{`${readPrecentage.toFixed(3)}%`}</div>
        </div>
    </section>
}