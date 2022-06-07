export function Card(props) {
    const check = (e) => {
        e.nativeEvent.path[2].className = "card check"
    }

    const deleteTodo = (e) => {
        e.nativeEvent.path[2].remove()
    }

    return( 
        <div className="card">
            <div className="card-content">
                <p>{props.name}</p>
            </div>
            <div className="actions">
                <button href="#" className="check" onClick={check}>
                    Check
                </button>
                <button href="#" className="delete" onClick={deleteTodo}>
                    Delete
                </button>
            </div>
        </div>
    )
}