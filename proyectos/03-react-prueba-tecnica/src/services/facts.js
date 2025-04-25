const ENDPOINT_FACT = "https://catfact.ninja/fact";

export const getRandomFact = async () => {
	const res = await fetch(ENDPOINT_FACT);
	const data = await res.json();
	const { fact } = data;
	return fact;
};
