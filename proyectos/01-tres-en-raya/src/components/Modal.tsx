export const Modal = ({ winner, resetGame }: { winner: string | false, resetGame: () => void }) => {
    return (
        <section className="winner">
            <h2>{winner === false ? 'Empate' : 'Ganador'}</h2>

            <div className="square">
                <span>{winner === false ? '😎' : winner}</span>
            </div>

            <button onClick={resetGame}>Reiniciar juego</button>
        </section>
    )
}