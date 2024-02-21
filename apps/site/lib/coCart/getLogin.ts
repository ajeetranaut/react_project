// NOTE: CoCart Login fetch API

/**
 * Get user login by username and password. Using CoCart API.
 * @param user
 * @param password
 */
export const getLogin = async (user: string, password: string) => {
	const res = await fetch(
		`${process.env.API_URL}/wp-json/cocart/v2/login`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Basic ${btoa(`${user}:${password}`)}`,
			},
			cache: 'no-cache',
		}
	)
	const data = await res.json()
	if (res.ok) {
		return {
			data: data,
			error: false,
		}
	}

	return {
		data: null,
		error: {
			code: data.code,
			message: data.message,
		},
	};
}
