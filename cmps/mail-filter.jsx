// export class MailFilter extends React.Component {

//     state = {
       

//     }

//     onFilter = (ev) => {
//         ev.preventDefault()
//         this.props.onSetFilter(this.state.filterBy)
//         console.log(this.state.filterBy)
//     }

//     handleChange = ({ target }) => {
//         console.log('bookfilterstate', this.state)
//         const value = (target.type === 'number') ? +target.value : target.value
//         const field = target.name
//         this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
//             this.props.onSetFilter(this.state.filterBy)

//         })

//     }



//     render() {
//         let { title, price } = this.state.filterBy
//         return <section className="book-filter">
//             <form onSubmit={this.onFilter}>
//                 <label htmlFor="by-title">title</label>
//                 <input type="text" id="by-title" placeholder="by title" name="title"
//                     value={title} onChange={this.handleChange} />

//                 <label htmlFor="by-price">price</label>
//                 <input type="number" id="by-minSpeed" placeholder="by max price" name="price"
//                     value={price} onChange={this.handleChange} />
//                 <button>submit</button>
//             </form>
//         </section>

//     }




// }