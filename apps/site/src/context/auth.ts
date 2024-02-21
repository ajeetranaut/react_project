// import Gitlab from "next-auth/providers/gitlab"
// @ts-ignore
import type {NextAuthConfig} from "next-auth";
// import Google from "next-auth/providers/google"
// import Hubspot from "next-auth/providers/hubspot"
// import Instagram from "next-auth/providers/instagram"
// import Kakao from "next-auth/providers/kakao"
// import Keycloak from "next-auth/providers/keycloak"
// import Line from "next-auth/providers/line"
// import LinkedIn from "next-auth/providers/linkedin"
// import Mailchimp from "next-auth/providers/mailchimp"
// import Mailru from "next-auth/providers/mailru"
// import Medium from "next-auth/providers/medium"
// import Naver from "next-auth/providers/naver"
// import Netlify from "next-auth/providers/netlify"
// import Okta from "next-auth/providers/okta"
// import Onelogin from "next-auth/providers/onelogin"
// import Osso from "next-auth/providers/osso"
// import Osu from "next-auth/providers/osu"
// import Passage from "next-auth/providers/passage"
// import Patreon from "next-auth/providers/patreon"
// import Pinterest from "next-auth/providers/pinterest"
// import Pipedrive from "next-auth/providers/pipedrive"
// import Reddit from "next-auth/providers/reddit"
// import Salesforce from "next-auth/providers/salesforce"
// import Slack from "next-auth/providers/slack"
// import Spotify from "next-auth/providers/spotify"
// import Strava from "next-auth/providers/strava"
// import Todoist from "next-auth/providers/todoist"
// import Trakt from "next-auth/providers/trakt"
// import Twitch from "next-auth/providers/twitch"
// import Twitter from "next-auth/providers/twitter"
// import UnitedEffects from "next-auth/providers/united-effects"
// import Vk from "next-auth/providers/vk"
// import Wikimedia from "next-auth/providers/wikimedia"
// import Wordpress from "next-auth/providers/wordpress"
// import WorkOS from "next-auth/providers/workos"
// import Yandex from "next-auth/providers/yandex"
// import Zitadel from "next-auth/providers/zitadel"
// import Zoho from "next-auth/providers/zoho"
// import Zoom from "next-auth/providers/zoom"
import NextAuth from "next-auth";

// import Apple from "next-auth/providers/apple"
// import Atlassian from "next-auth/providers/atlassian"
// import Auth0 from "next-auth/providers/auth0"
// import Authentik from "next-auth/providers/authentik"
// import AzureAD from "next-auth/providers/azure-ad"
// import AzureB2C from "next-auth/providers/azure-ad-b2c"
// import Battlenet from "next-auth/providers/battlenet"
// import Box from "next-auth/providers/box"
// import BoxyHQSAML from "next-auth/providers/boxyhq-saml"
// import Bungie from "next-auth/providers/bungie"
// import Cognito from "next-auth/providers/cognito"
// import Coinbase from "next-auth/providers/coinbase"
// import Discord from "next-auth/providers/discord"
// import Dropbox from "next-auth/providers/dropbox"
// import DuendeIDS6 from "next-auth/providers/duende-identity-server6"
// import Eveonline from "next-auth/providers/eveonline"
// import Facebook from "next-auth/providers/facebook"
// import Faceit from "next-auth/providers/faceit"
// import FortyTwoSchool from "next-auth/providers/42-school"
// import Foursquare from "next-auth/providers/foursquare"
// import Freshbooks from "next-auth/providers/freshbooks"
// import Fusionauth from "next-auth/providers/fusionauth"
// import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import WordpressProvider from "next-auth/providers/wordpress";
import {getLogin} from "../../lib/coCart/getLogin";

export const config = {
	theme: {
		logo: "https://next-auth.js.org/img/logo/logo-sm.png",
	},
	providers: [
		CredentialsProvider({
			credentials: {
				username: {label: "Username", type: "text"},
				password: {label: "Password", type: "password"},
			},
			async authorize(credentials) {
				// ** WP Login fetch API with CoCart
				const {data} = await getLogin(credentials.username as string, credentials.password as string)
				
				if (data) {
					return {
						role: data.role,
						...data
					}
				}
				
				return null
			},
		}),
		WordpressProvider({
			clientId: "94581",
			clientSecret: "Oar5IGnkhHCvaag0DUkbjpPotpRIpyPSn3ai43ZDeD1jy17IjqJVXabpTgLDIVAI"
		})
	],
	callbacks: {
		authorized({request, auth}: {
			request: any,
			auth: any
		}) {
			const {pathname} = request.nextUrl
			if (pathname.includes("/dashboard")) return !!auth
			return true
		},
		async jwt({token, user, trigger, session}: {
			token: any,
			user: any,
			trigger: any,
			session: any
		}) {
			if (user) {
				token = user
			}
			if (trigger === "update") {
				// Note, that `session` can be any arbitrary object, remember to validate it!
				token.first_name = session.first_name
				token.last_name = session.last_name
			}
			
			return token
		},
		async session({session, token}: {
			session: any,
			token: any,
			newSession: any
		}) {
			session.user.id = Number(token.user_id)
			session.user.role = token.role
			session.user.first_name = token.first_name
			session.user.last_name = token.last_name
			session.user.email = token.email
			session.user.avatar_urls = token.avatar_urls
			session.user.username = token?.username || token?.display_name
			return session
		}
	},
	
	pages: {
		signIn: "/",
	}
} as NextAuthConfig

// @ts-ignore
export const {handlers, auth} = NextAuth(config)