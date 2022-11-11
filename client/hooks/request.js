import axios from "axios";
import { useCallback, useEffect, useState } from "react";

async function getCities() {
	const { data } = await axios.get("/api/hotels");
	return data;
}

function useCities() {
	const [cities, setCities] = useState();

	const cties = useCallback(async () => {
		const data = await getCities();
		setCities(data);
	}, []);

	useEffect(() => {
		cties();
	}, [cties]);

	return cities;
}

export default useCities;
