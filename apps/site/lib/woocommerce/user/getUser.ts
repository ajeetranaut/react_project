'use server';
import { ShippingProps } from "@/types";
import { revalidatePath } from "next/cache";
import { WooCommerce, wooToken } from "../../utils/woocommerce";

// NOTE: Data props
type dataProps = {
	email?: string;
	first_name?: string;
	last_name?: string;
	username?: string;
	billing?: {
		email?: string;
		phone?: string;
	} & ShippingProps,
	shipping?: ShippingProps
}

// NOTE: Create user function
export const createUser = async (data: dataProps) => {
	const res = await fetch(
		`${process.env.API_URL}/wp-json/wc/v3/customers`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Basic ${wooToken}`,
			},
			body: JSON.stringify(data),
			cache: 'no-cache',
		}
	)
	const user = await res.json()

	if (user.code == "registration-error-email-exists" || user.code == "registration-error-username-exists") {
		return {
			data: null,
			error: {
				code: user.code,
				message: "Email or Username already exists",
			},
		}
	}

	if (user.code == "customer_invalid_email") {
		return {
			data: null,
			error: {
				code: user.code,
				message: "Invalid Email",
			},
		}
	}

	return {
		data: user,
		error: null,
	}
}

/**
 *  Get user function with revalidate path
 * @param id
 * @param path
 * @param pathType
 * @returns
 */
// NOTE: Get user function
export const getUser = async (id: string | number, path?: string, pathType?: 'page' | 'layout') => {
	const { data: user, error } = await WooCommerce.get(`customers/${id}`)
	if (user) {

		/**
		 * if path and pathType is available, revalidate path
		 * @param path
		 * @param pathType
		 */
		if (path && pathType) {
			revalidatePath(path, pathType)
		}

		return {
			data: user,
			error: null
		}
	}
	if (
		error.response.data.code == "registration-error-email-exists" ||
		error.response.data.code == "registration-error-username-exists"
	) {
		return {
			data: null,
			error: {
				code: error.response.data.code,
				message: "Email or Username already exists",
			},
		};
	}
	if (error.response.data.code == "customer_invalid_email") {
		return {
			data: null,
			error: {
				code: error.response.data.code,
				message: "Invalid Email",
			},
		};
	}
}

/**
 *  Update user function with revalidate path
 * @param data
 * @param id
 * @param path
 * @param pathType
 * @returns
 */
// NOTE: Update user function
export const updateUser = async (data: dataProps, id: number, path?: string, pathType?: 'page' | 'layout') => {
	const res = await fetch(
		`${process.env.API_URL}/wp-json/wc/v3/customers/${id}`,
		{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Basic ${wooToken}`,
			},
			body: JSON.stringify(data),
			cache: 'no-cache',
		}
	)
	const user = await res.json()

	if (user.code == "registration-error-email-exists" || user.code == "registration-error-username-exists") {
		return {
			data: null,
			error: {
				code: user.code,
				message: "Email or Username already exists",
			},
		}
	}

	if (user.code == "customer_invalid_email") {
		return {
			data: null,
			error: {
				code: user.code,
				message: "Invalid Email",
			},
		}
	}

	/**
	 * if path and pathType is available, revalidate path
	 * @param path
	 * @param pathType
	 */
	if (path && pathType) {
		revalidatePath(path, pathType)
	}

	return {
		data: user,
		error: null,
	}
}

/**
 *  Delete user function with revalidate path
 * @param id
 * @param path
 * @param pathType
 * @returns
 */
// NOTE: Delete user function
export const deleteUser = async (id: string | number, path?: string, pathType?: 'page' | 'layout') => {
	const { data: user, error } = await WooCommerce.delete(`customers/${id}`)
	if (user) {

		/**
		 * if path and pathType is available, revalidate path
		 * @param path
		 * @param pathType
		 */
		if (path && pathType) {
			revalidatePath(path, pathType)
		}

		return {
			data: user,
			error: null
		}
	}
	if (
		error.response.data.code == "registration-error-email-exists" ||
		error.response.data.code == "registration-error-username-exists"
	) {
		return {
			data: null,
			error: {
				code: error.response.data.code,
				message: "Email or Username already exists",
			},
		};
	}
	if (error.response.data.code == "customer_invalid_email") {
		return {
			data: null,
			error: {
				code: error.response.data.code,
				message: "Invalid Email",
			},
		};
	}
}