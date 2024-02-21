// types/next-auth.d.ts
// noinspection ES6UnusedImports
import {type DefaultSession} from "next-auth";
// The `JWT` interface can be found in the `next-auth/jwt` submodule
// noinspection ES6UnusedImports
import "@auth/core/jwt";

declare module "@auth/core" {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: {
			/** The user's postal address. */
			role: string | null | undefined
			// By default, TypeScript merges new interface properties and overwrite existing ones. In this case, the default session user properties will be overwritten, with the new one defined above. To keep the default session user properties, you need to add them back into the newly declared interface
		} & DefaultSession["user"] // To keep the default types
	}
}

declare module 'next-auth' {
	interface Session {
		user: {
			/** The user's postal address. */
			id: string | null | undefined
			role: string | null | undefined
			first_name: string | null | undefined
			last_name: string | null | undefined
			email: string | null | undefined
			username: string | null | undefined
			avatar_urls: string | null | undefined
			// By default, TypeScript merges new interface properties and overwrite existing ones. In this case, the default session user properties will be overwritten, with the new one defined above. To keep the default session user properties, you need to add them back into the newly declared interface
		} & DefaultSession["user"] // To keep the default types
	}
	
	interface User {
		user_id: string | null | undefined
		role: string | null | undefined
		first_name: string | null | undefined
		last_name: string | null | undefined
		email: string | null | undefined
		display_name: string | null | undefined
		avatar_urls: string | null | undefined
	}
}

declare module "@auth/core/jwt" {
	/** Returned by the `jwt` callback and `auth`, when using JWT sessions */
	interface JWT {
		id: string | null | undefined,
		role: string | null | undefined,
		first_name: string | null | undefined,
		last_name: string | null | undefined,
		email: string | null | undefined,
		username: string | null | undefined,
		avatar_urls: string | null | undefined,
	}
} 
