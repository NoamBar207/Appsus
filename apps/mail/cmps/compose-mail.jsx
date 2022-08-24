import { mailService } from "../mail-services/mail-service.js"
import { eventBusService } from "../../../services/event-bus-service.js"

export class Compose extends React.Component {

   state={
       to:'',
       subject:'',
       body:''
   }

    // onAddMail = (ev) => {
    //     console.log(ev.submitValue)
    //     ev.preventDefault()

    //     const { target } = ev

    //     const to = target[0].value
    //     const subject = target[1].value
    //     const body = target[2].value
    //     mailService.addMail(to, subject, body)
    //     this.props.history.push('/mail')
        
    // }

    onAddMail=(ev,statusDraft)=>{
        ev.preventDefault()
        
            const {to,subject,body}= this.state
          
            if(statusDraft){
                mailService.addMail(to, subject, body,statusDraft)
            }  else mailService.addMail(to, subject, body)
            this.props.history.push('/mail')
    }

    handleChange = ({ target }) => {
        const value = target.value
        const field = target.name
        this.setState({[field]:value})

    }
 


    inputRef2 = React.createRef()
    inputRef3 = React.createRef()
    componentDidMount() {
        const urlSrcPrm = new URLSearchParams(this.props.location.search)
        let subject;
        subject = !urlSrcPrm.get('subject') ? '' : urlSrcPrm.get('subject')
        let body;
        body = !urlSrcPrm.get('body') ? '' : urlSrcPrm.get('body')
        this.inputRef2.current.value = subject
        this.inputRef3.current.value = body

    }

    


    render() {
     
        return <div className="compose-mail flex column">
            <div className="new-email flex " >New Email</div>
            <form onSubmit={this.onAddMail} className="mail-form flex column">
                <input onChange={this.handleChange} className="to" type="email" placeholder="To" name="to" />
                <input onChange={this.handleChange} ref={this.inputRef2} className="subject" type="text" placeholder="subject" name="subject" />
                <textarea onChange={this.handleChange} ref={this.inputRef3} className="body" type="text" name="body" />
                <button  className="send">Send</button>
                <button onClick={(ev)=>this.onAddMail(ev,'draft')} value="btnn" className="to-draft">✖</button>
            </form>
        </div>
  
    }


}