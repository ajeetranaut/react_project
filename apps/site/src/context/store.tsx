"use client";
import ar from "@/dictionaries/ar";
import en from "@/dictionaries/en";
import es from "@/dictionaries/es";
import { ICart } from "@/types";
import { getCookie, setCookie } from "cookies-next";
import { getCartData } from "lib/coCart/getCart";
import { getCartTotals } from "lib/coCart/getTotals";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";
import toast from "react-hot-toast";
import { Locale, i18n } from "../../i18n-config";
import { getCategories } from "../../lib/woocommerce/getCategories";

type Props = {
	children: React.ReactNode;
};

// NOTE: Global context props
interface contextProps {
	lang: Locale;
	dictionaries?: any;
	setDictionaries?: any;
	changeLang: (lang: Locale) => void;
	direction?: "ltr" | "rtl";
	changeDirection?: (direction: "ltr" | "rtl") => void;
	hydration: boolean;
	setHydration: (hydration: boolean) => void;
	loginModal: boolean;
	setLoginModal: (loginModal: boolean) => void;
	toggleLoginModal?: () => void;
	allCategories: [] | null;
	setAllCategories?: (allCategories: [] | null) => void;
	mobileMenu: boolean;
	setMobileMenu: (mobileMenu: boolean) => void;
	cartData: ICart | null;
	cartTotals: any | null;
	mutateCart: () => Promise<void>;
	cartLoader: boolean;
	setCartLoader: (cartLoader: boolean) => void;
}

// NOTE: Global context store
const GlobalContext = React.createContext<contextProps>({
	lang: i18n.defaultLocale,
	dictionaries: i18n.defaultLocale === "en" ? en : i18n.defaultLocale === "ar" ? ar : i18n.defaultLocale === 'es' ? es : en,
	setDictionaries: () => {
	},
	changeLang: () => {
	},
	direction: "ltr",
	changeDirection: () => {
	},
	hydration: false,
	setHydration: () => {
	},
	loginModal: false,
	setLoginModal: () => {
	},
	toggleLoginModal: () => {
	},
	allCategories: null,
	setAllCategories: () => {
	},
	mobileMenu: false,
	setMobileMenu: () => {
	},
	cartData: null,
	cartTotals: null,
	mutateCart: async () => {

	},
	cartLoader: true,
	setCartLoader: () => {
	},
});

// NOTE: Global provider for context store
export const GlobalProvider = ({ children }: Props) => {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()
	// *** set default language 'en'
	const [lang, setLang] = React.useState<Locale>(i18n.defaultLocale);
	// *** set default direction 'ltr'
	const [direction, setDirection] = React.useState<"ltr" | "rtl">("ltr");
	// *** set default dictionaries by language
	const [dictionaries, setDictionaries] = useState(lang === "en" ? en : lang === "ar" ? ar : lang === 'es' ? es : en)
	const [hydration, setHydration] = useState(false);
	const [loginModal, setLoginModal] = React.useState(false);
	const [allCategories, setAllCategories] = useState<[] | null>(null)
	const [mobileMenu, setMobileMenu] = useState<boolean>(false)
	const [, startTransition] = useTransition()

	// NOTE: Set the hydration state to true
	useEffect(() => {
		setHydration(true);
	}, []);

	// NOTE: Get All Categories Data from API by Server Side Rendering
	useEffect(() => {
		const closeId = setTimeout(() => {
			if (!allCategories) {
				startTransition(() => {
					getCategories({
						hide_empty: true,
					}).then((res) => {
						if (res.error) {
							setAllCategories([])
						}
						setAllCategories(res.data)
					})
				})
			}
		}, 200)

		return () => clearTimeout(closeId)
	}, [allCategories])

	// Region for setting the language
	useEffect(() => {
		const getLang = getCookie("lang");
		if (getLang) {
			setLang(getLang as Locale);
		}

		const getDirection = getCookie("direction");
		if (getDirection) {
			setDirection(getDirection as "ltr" | "rtl");
		}

		// NOTE: Set the lang cookie if it doesn't exist
		const internalId = setInterval(() => {
			const getLang = getCookie("lang");
			if (!getLang) {
				setCookie("lang", lang);
				setDictionaries(lang === "en" ? en : lang === "ar" ? ar : lang === 'es' ? es : en);
			}

			// NOTE: Set the direction cookie if it doesn't exist
			const getDirection = getCookie("direction");
			if (!getDirection) {
				setCookie("direction", direction);
			}
		}, 500);

		return () => {
			clearInterval(internalId);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// NOTE: Change the language function handler
	const changeLang = (lang: Locale) => {
		setLang(lang);
		setDictionaries(lang === "en" ? en : lang === "ar" ? ar : lang === 'es' ? es : en);
		setCookie("lang", lang);
		// window.location.reload();
	};

	// NOTE: Change the direction function handler
	const changeDirection = (direction: "ltr" | "rtl") => {
		setDirection(direction);
		setCookie("direction", direction);
	};

	// NOTE: Automatically change the language based on the cookie lang value
	useEffect(() => {
		const getLang = localStorage.getItem("lang") || getCookie("lang");
		if (getLang) {
			setLang(getLang as Locale);
			setDictionaries(getLang === "en" ? en : getLang === "ar" ? ar : getLang === 'es' ? es : en);
		} else {
			localStorage.setItem("lang", lang);
			setCookie("lang", lang);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// NOTE: Toggle login modal
	const toggleLoginModal = () => {
		setLoginModal(!loginModal);
	};

	// NOTE: Automatically open the login modal if the url has a callbackUrl
	useEffect(() => {
		if (searchParams.get("callbackUrl")) {
			setLoginModal(true)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// NOTE: Automatically add toast notification if the url has an error
	useEffect(() => {
		if (searchParams.get("error")) {
			toast.error('Email or password is incorrect, please try again', {
				duration: 5000,
				position: 'top-center',
			})
			setLoginModal(true)
			// router error query remove
			router.replace(pathname, undefined)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// NOTE: fetch cart & cart totals data
	const [cartData, setCartData] = useState<ICart | null>(null)
	const [cartTotals, setCartTotals] = useState<any>(null);
	const [cartLoader, setCartLoader] = useState(true)

	const cartUpdateHandler = async (cartKey: string) => {
		setCartLoader(true) // cart loader true
		const { data } = await getCartData(cartKey);
		setCartData(data); // cart data
		const { data: cartTotals } = await getCartTotals(cartKey);
		setCartTotals(cartTotals); // cart totals
		setCartLoader(false) // cart loader false
	}

	const cartKey = getCookie("cart_key") as string;
	/*---------- Cart Data Mutating useEffect ----------*/
	useEffect(() => {
		const closeId = setTimeout(() => {
			startTransition(() => {
				if (cartLoader) {
					cartUpdateHandler(cartKey)
				}
			})
		}, 200)

		return () => clearTimeout(closeId)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cartLoader]);


	// user window in focus call cartUpdateHandler function
	useEffect(() => {
		window.addEventListener('focus', () => {
			cartUpdateHandler(cartKey)
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	/*---------- Cart Data Mutating promise Function ----------*/
	const mutateCart = async () => {
		const cartKey = getCookie("cart_key") as string;
		if (cartKey) {
			setCartLoader(true)
		}
	}

	// NOTE: Return the global context provider
	return (
		<GlobalContext.Provider
			value={{
				lang,
				changeLang,
				dictionaries,
				setDictionaries,
				direction,
				changeDirection,
				hydration,
				setHydration,
				loginModal,
				setLoginModal,
				toggleLoginModal,
				allCategories,
				setAllCategories,
				mobileMenu,
				setMobileMenu,
				cartData,
				cartTotals,
				mutateCart,
				cartLoader,
				setCartLoader
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

// NOTE: Global context hook
export const useGlobalContext = () => React.useContext(GlobalContext);

// NOTE: Global context consumer
export const GlobalConsumer = GlobalContext.Consumer;
