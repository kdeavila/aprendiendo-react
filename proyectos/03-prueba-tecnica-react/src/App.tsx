import { useCatFact } from "./hooks/useCatFact"
import { useCatImage } from "./hooks/useCatImage"

export function App() {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact: fact || null })
    console.log(imageUrl)

    return (
        <main>
            {fact && (
                <div>
                    <p>{fact}</p>
                    <img style={{ maxWidth: '400px' }} src={imageUrl} alt={fact} />
                </div>
            )}

            <button type="button" onClick={refreshFact}>
                New fact
            </button>
        </main>
    )
}
