export const Square = ({ index, updateBoard, children }: { index: number, updateBoard: (index: number) => void, children?: React.ReactNode }) => {
    const handleClick = () => {
        updateBoard(index);
    }

    return (
        <div className="square" onClick={handleClick}>
            {children}
        </div>
    )
}

