export function SortMails({onSort}){

    return <select className="sort" onChange={onSort}>
        <option name="date" value="date">Date</option>
        <option name="subject" value="subject">Subject</option>
    </select>
}

