export function Card(props) {
    return( 
        <div className="card">
            <div className="card-content">
                <p>{props.name}</p>
            </div>
            <div className="actions">
                <a>
                    <img></img>
                    Marcar como feita
                </a>
                <a>
                    <img></img>
                    Excluir
                </a>
            </div>
        </div>
    )
}