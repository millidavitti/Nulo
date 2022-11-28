import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

async function getCities() {
 const { data } = await axios.post('/api/hotels')
 return data
}

function useCities() {
 const [cities, setCities] = useState()

 const cties = useCallback(async () => {
  const data = await getCities()
  setCities(data)
 }, [])

 useEffect(() => {
  cties()
 }, [cties])

 return cities
}

export default getCities
/**
 import axios from 'axios'
	import { useCallback, useEffect, useState } from 'react'

	async function pollEndpoint(method, url, options) {
	const { data } = await axios.post(url, options)
	return data
	}

	function usePoll() {
	const [result, setResult] = useState()

	const unWrap = useCallback(async () => {
	const data = await pollEndpoint()
	setResult(data)
	}, [])

	useEffect(() => {
	unWrap()
	}, [unWrap])

	return result
	}

	export default usePoll

 */
