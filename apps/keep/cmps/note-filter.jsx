

export class NoteFilter extends React.Component {

    state = {
        filterBy: {
            type: 'all',
            txt: ''
        },
    }

    // onFilterButton = (type) => {
    //     this.setState({type})
    // }
    handleChange = ({ target }) => {
        const value = target.value
        const field = target.name
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => this.props.onSerchFiter({ target }))
    }



    render() {
        const { type } = this.state.filterBy
        return <section>
            <section className="header flex">
                {/* <button name='type' onClick={this.renderFilterOpt}>By Type</button>
            <button name='isPinned' onClick={this.renderFilterOpt}>By Pin</button> */}
                <div className='flex align-center'>
                <img src='../../img/keep.png' />
                <span className='keep-write-logo'>Keep</span>
                </div>
                <div className='note-filter-head'>
                    <div className='note-filter'>
                        <input onChange={(event) => this.handleChange(event)} name="txt" className="search" type="search" placeholder="Search Note By Text" />
                        <label>
                            <select className='note-filter-opt' onChange={(event) => this.props.onFilter(event)} >
                                <option value='all' name='all'>All Notes</option>
                                <option value='note-txt' name='note-txt'>Text Notes</option>
                                <option value='note-img' name='note-img'>Note Image</option>
                                <option value='note-todos' name='note-todos'>TODOs</option>
                                <option value='note-video' name='note-video'>Video Notes</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="user-sign main-layout flex center" style={{'margin-right':"10px"}} >b</div>
                {/* <button >FILTER!</button> */}
            </section>
            <hr />
        </section>
    }
}