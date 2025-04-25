import { useEffect, useState } from "react";
import { getImageUrl } from "../services/images";

export function useCatImage({ fact }) {
	const [imageUrl, setImageUrl] = useState();

	useEffect(() => {
		getImageUrl(fact).then((url) => {
			setImageUrl(url);
		});
	}, [fact]);

	return { imageUrl };
}
