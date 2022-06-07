export function Card(props) {
    
    function check() {
        const card = document.querySelector(".card")

        card.classList = "card check"
    }

    return( 
        <div className="card">
            <div className="card-content">
                <p>{props.name}</p>
            </div>
            <div className="actions">
                <a href="#" className="check" onClick={check}>
                    Marcar como feita
                </a>
                <a href="#" className="delete">
                    Excluir
                </a>
            </div>
        </div>
    )
}