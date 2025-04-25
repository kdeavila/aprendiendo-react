export const getImageUrl = async (fact) => {
	const threeFirstWords = fact.split(" ", 3).join(" ");

	return fetch(
		`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&json=true`,
	)
		.then((res) => res.json())
		.then((data) => {
			const { url } = data;
			return url;
		});
};
