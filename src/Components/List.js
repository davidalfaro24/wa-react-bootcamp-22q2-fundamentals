
const List = (props ) => { 
    return (
        <ul>
            {props.completeList.map((action) => { 
                <li key={action}>{action} </li>      
        })}
        </ul>
        
    )
}

export default List