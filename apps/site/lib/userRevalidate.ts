'use server'
import {revalidatePath} from "next/cache"

export const userRevalidate = async (path: string, pathType: 'page' | 'layout') => {
	
	/**
	 * if path and pathType is available, revalidate path
	 * @param path
	 * @param pathType
	 */
	if (path && pathType) {
		revalidatePath(path, pathType)
	}
}