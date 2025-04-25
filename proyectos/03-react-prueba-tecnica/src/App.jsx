import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";
import "./style.css";

export function App() {
	const { fact, refreshFact } = useCatFact();
	const { imageUrl } = useCatImage({ fact });

	const handleClick = async () => {
		refreshFact();
	};

	return (
		<main>
			<h1>App de gatos</h1>
			<button onClick={handleClick} type="button">
				Get new fact
			</button>
			{fact && <p>{fact}</p>}
			{imageUrl && (
				<img
					src={imageUrl}
					alt="Imagen sacada de los tres primeras palabras del hecho de la API gato"
				/>
			)}
		</main>
	);
}
