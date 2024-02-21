import { ReturnIcon, SecuredIcon, SupportIcon, VehicleIcon } from "@/components/icons/iconBox";

export type MenuProps = {
	name: string;
	link: string;
	child?: MenuProps[];
};

const en = {
	/**
	 * Header Dictionary Here for English
	 */
	header: {
		menuName: 'Menu',
		slogan: `Get <span class="font-bold ">20% Flat Discount</span> on Your First Order`,
		searchPlaceholder: "Search product here...",
		searchBtnText: "Search",
		noResultText: "No Result Found",
		viewAllText: "View All",
		resultText: "Result Found",
		cartText: "My Cart",
		helpText: "Need Help? Contact Us",
		loginText: "Login",
		registerText: "Registration",
		or: "or",
		categoryText: "All Categories",
		menu: [
			{
				name: "Home",
				link: "/",
			},
			{
				name: "Shop",
				link: "/shop",
				child: [
					{
						name: "Right sideBar",
						link: "/shop",
					},
					{
						name: "Left sideBar",
						link: "/shop/shop-left-sidebar",
					},
					{
						name: "No sideBar",
						link: "/shop/shop-no-sidebar",
					},
				]
			},
			{
				name: "Special Offer",
				link: "#",
			},
			{
				name: "New Arrivals",
				link: "#",
			},
			{
				name: "About Us",
				link: "/about-us",
			},
			{
				name: "Blog",
				link: "/blog",
			},
			{
				name: "Faqs",
				link: "#",
			},
			{
				name: "Contact Us",
				link: "/contact-us",
			},
		] as MenuProps[],
		logoutText: "Logout",
	},
	/**
	 * Home Page Dictionary Here for English
	 */
	home: {
		textType: "en",
		title: "Home",
		description: "This is the home page.",
		sliders: [
			{
				title: "PERFECT COLLECTION GADGETS",
				excerpt: "FREE HOME DELIVERY OUTSIDE FROM THE CITY",
				button: {
					title: "SHOP NOW",
					link: "/shop",
					target: "_self",
				},
				image: {
					src: "/image/banner1.png",
					height: 650,
					width: 553,
					index: 0,
				},
				offer: "Flat 20% Off",
				offerType: "NEW",
			},
			{
				title: "PERFECT COLLECTION GADGETS",
				excerpt: "FREE HOME DELIVERY OUTSIDE FROM THE CITY",
				button: {
					title: "SHOP NOW",
					link: "/shop",
					target: "_self",
				},
				image: {
					src: "/image/banner2.png",
					height: 650,
					width: 553,
					index: 0,
				},
				offer: "Flat 30% Off",
				offerType: "SALE",
			},
			{
				title: "PERFECT COLLECTION GADGETS",
				excerpt: "FREE HOME DELIVERY OUTSIDE FROM THE CITY",
				button: {
					title: "SHOP NOW",
					link: "/shop",
					target: "_self",
				},
				image: {
					src: "/image/banner1.png",
					height: 650,
					width: 553,
					index: 0,
				},
				offer: "Flat 40% Off",
				offerType: "HOT",
			},
		],
		support: [
			{
				icon: <VehicleIcon />,
				title: "Free Shipping",
				description: "On all orders over $75.00",
			},
			{
				icon: <ReturnIcon />,
				title: "Free Returns",
				description: "Returns within 7 days",
			},
			{
				icon: <SupportIcon />,
				title: "Support 24/7",
				description: "Contact us 24 hours a day",
			},
			{
				icon: <SecuredIcon />,
				title: "100% Payment Secure",
				description: "Your payment is safe with us",
			},
		],
		selling_products: {
			title: "Our Best Selling Products",
			btnText: "View All Deals",
		},
		products_banners: [
			{
				category: "watch",
				title: "Apple Watch",
				image: "/image/product13.png",
				price: 399,
				btn: {
					title: "SHOP NOW",
					link: "/shop",
					target: "_self",
				},
			},
			{
				category: "Tablet",
				title: "iPad Pro 2022",
				image: "/image/product14.png",
				price: 1080,
				btn: {
					title: "SHOP NOW",
					link: "/shop",
					target: "_self",
				},
			},
			{
				category: "Wireless",
				title: "Headphone",
				image: "/image/product14.png",
				price: 160,
				btn: {
					title: "SHOP NOW",
					link: "/shop",
					target: "_self",
				},
			},
		],
		trending_products: {
			btn: {
				title: "View All Products",
				link: "/shop",
				target: "_self",
			},
			tabData: [
				{
					title: "New Arrival",
					query: {
						per_page: 8,
						orderby: `date`,
						order: "asc",
					}
				},
				{
					title: "Best Seller",
					query: {
						per_page: 8,
						orderby: `popularity`,
						order: "desc",
					}
				},
				{
					title: "Featured",
					query: {
						per_page: 8,
						featured: true,
					}
				},
				{
					title: "Top Rated",
					query: {
						per_page: 8,
						orderby: `rating`,
					}
				},
				{
					title: "Most Popular",
					query: {
						per_page: 8,
						orderby: `popularity`,
						order: "desc",
					}
				},
			],
		},
		newsletter: {
			title: "Subscribe to our newsletter",
			subtitle: {
				normal: "Get 20%",
				bold: "Flat Discount",
			},
			placeholder: "Enter Email Address",
			buttonText: "Subscribe",
		},
		recently_viewed: {
			title: "Recently Viewed",
			btnText: "View More",
		},
	},
	/**
	 * Shop Page Dictionary Here for English
	 */
	shop: {
		breadcrumb: {
			title: "Shop",
			description: "Something differet, every day.",
		},
		recently_viewed: {
			title: "Recently Viewed",
			btnText: "View More",
		},
		headerText: {
			filterButton: "Filter",
			showText: {
				showing: "Showing",
				of: "of",
				results: "results",
			},
			textType: "en",
		},
		filters: {
			title: "Filter",
			categoryTitle: "Category",
			colorTitle: "Colors",
			priceTitle: "Price",
		},
		loadMore: "Load More",
	},
	/**
	 * About Us Page Dictionary Here for English
	 */
	about_us: {
		breadcrumb: {
			title: "About Us",
			description: "Something differet, every day.",
		},
		banner: {
			title: "Empowering",
			sub_title: "eCommerce brands everywhere.",
			description: "Learn more about our story and the hard-working people behind the pink envelope.",
			lgImage: {
				src: "/about.png",
				alt: "About Us",
				imageWidth: 1350,
				imageHeight: 500,
			},
			smImage: {
				src: "/about.png",
				alt: "About Us",
				imageWidth: 500,
				imageHeight: 380,
			},
		},
		support: [
			{
				icon: <VehicleIcon />,
				title: "Free Shipping",
				description: "On all ordes over $75.00",
			},
			{
				icon: <ReturnIcon />,
				title: "Free Returns",
				description: "Returnswithin 7 days",
			},
			{
				icon: <SupportIcon />,
				title: "Support 24/7",
				description: "Contact us 4 hours a day",
			},
			{
				icon: <SecuredIcon />,
				title: "100% Payment Secure",
				description: "Your payment i safe wih us",
			},
		],
		our_teams: {
			title: "Our Team",
			description: "Our team is made up of passionate people who love to create.",
			list: [
				{
					avatar: "/image/team1.png",
					name: "Linh Nguyen",
					title: "Oner & Founder",
				},
				{
					avatar: "/image/team2.png",
					name: "Linh Nguyen",
					title: "Oner & Founder",
				},
				{
					avatar: "/image/team3.png",
					name: "Linh Nguyen",
					title: "Oner & Founder",
				},
				{
					avatar: "/image/team4.png",
					name: "Linh Nguyen",
					title: "Oner & Founer",
				},
			],
		},
		our_offers: {
			title: "What can we do for you?",
			offers: [
				{
					title: "Free Shipping",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui roncus auctor.",
				},
				{
					title: "100% Money Back",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui roncus auctor.",
				},
				{
					title: "Support 24/7",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui roncus auctr.",
				},
			],
			image: {
				src: "/image/platform1.png",
				alt: "Offer Image",
				width: 640,
				height: 520,
			},
		},
	},
	/**
	 * Blog Page Dictionary Here for English
	 */
	blog: {
		breadcrumb: {
			title: "Latest News",
			description: "Something different, every day.",
		},
		sidebarTitles: {
			searchSidebarTitle: "Search",
			searchPlaceholder: "Search Post...",
			categorySidebarTitle: "Browse By Categories",
			recentPostsSidebarTitle: "Recent Posts",
			tagsSidebarTitle: "Tags",
			sidebarMobileButton: "More Option",
		},
		authorByText: "By"
	},
	/**
	 * Blog Ssearch Page Dictionary Here for English
	 */
	blog_search: {
		breadcrumb: {
			title: "Search Result:",
		},
		authorByText: "By",
		loadButtonText: "Load More",
		noResultText: "No Result Found",
	},
	/**
	 * Blog Category Page Dictionary Here for English
	 */
	blog_category: {
		breadcrumb: {
			title: "Category:",
		},
		authorByText: "By",
		loadButtonText: "Load More"
	},
	/**
	 * Blog Tag Page Dictionary Here for English
	 */
	blog_Tag: {
		breadcrumb: {
			title: "Tag Name:",
		},
		authorByText: "By",
		loadButtonText: "Load More"
	},
	/**
	 * Blog Single Page Dictionary Here for English
	 */
	blog_single: {
		sidebarTitles: {
			searchSidebarTitle: "Search",
			searchPlaceholder: "Search Post...",
			categorySidebarTitle: "Browse By Categories",
			recentPostsSidebarTitle: "Recent Posts",
			tagsSidebarTitle: "Tags"
		},
		authorByText: "By",
		socialShareText: "Share On",
		replyFormText: {
			cancelText: "Cancel",
			namePlaceholder: "Name",
			emailPlaceholder: "Email",
			messagePlaceholder: "Message",
			replyButtonText: "Replys",
		},
		commentFormText: {
			responseText: "Thanks For Your Comment. Your Comment Is Under Review Now.",
			headerText: "Write Your Comment",
			namePlaceholder: "Name",
			emailPlaceholder: "Email",
			messagePlaceholder: "Comment",
			replyButtonText: "Share Comment",
		}
	},
	/**
	 * Contact Us Page Dictionary Here for English
	 */
	contact_us: {
		breadcrumb: {
			title: "Contact Us",
			description: "Something differet, every day.",
		},
		textType: "en",
		contactFormText: {
			headerText: "Send Message",
			namePlaceholder: "Name",
			emailPlaceholder: "Email",
			subjectPlaceholder: "SubJect",
			messagePlaceholder: "Write your message...",
			buttonText: "Send Message",
			loadButtonText: "Processing..."
		}
	},
	/**
	 * Product Category Page Dictionary Here for English
	 */
	product_category: {
		breadcrumb: {
			title: "Category:",
		},
	},
	/**
	 * Blog Author Page Dictionary Here for English
	 */
	blog_author: {
		breadcrumb: {
			title: "Author:",
		},
		authorByText: "By",
		loadButtonText: "Load More"
	},
	/**
	 * Recently Viewed Page Dictionary Here for English
	 */
	recently_viewed: {
		breadcrumb: {
			title: "Recently Viewed",
		}
	},
	/**
	 * Dashboard Page Dictionary Here for English
	 */
	dashboard: {
		textData: {
			billingText: "Billing Info",
			shippingText: "Shipping Address",
			editText: "Edit",
			noResultText: "No Result Found",
			fromText: {
				firstNamePlaceholder: "First Name",
				lastNamePlaceholder: "Last Name",
				companyPlaceholder: "Company Name",
				emailPlaceholder: "Email Address",
				phonePlaceholder: "Phone",
				countryPlaceholder: "Country",
				address1Placeholder: "Street Address 1",
				address2Placeholder: "Street Address 2",
				statePlaceholder: "State",
				cityPlaceholder: "City",
				postCodePlaceholder: "Post Code",
				buttonText: "Save Changes"
			}
		},
		sidebarText: {
			editText: "Edit"
		}
	},
	/**
	 * Dashboard Settings Page Dictionary Here for English
	 */
	dashboard_settings: {
		textData: {
			titleText: "Basic Info",
			fromText: {
				firstNamePlaceholder: "First Name",
				lastNamePlaceholder: "Last Name",
				usernamePlaceholder: "Username",
				emailPlaceholder: "Email Address",
				buttonText: "Save Changes"
			}
		},
		sidebarText: {
			editText: "Edit"
		}
	},
	/**
	 * Dashboard Orders Page Dictionary Here for English
	 */
	dashboard_orders: {
		textType: "en",
		textData: {
			noOrderText: "There are no orders yet.",
			tableHeaders: {
				orderId: "Order ID",
				date: "Date",
				item: "Item",
				total: "Total",
				status: "Status",
				action: "Action",
				view: "View",
			}
		},
		sidebarText: {
			editText: "Edit"
		}
	},
	/**
	 * Dashboard Orders Details Page Dictionary Here for English
	 */
	orders_details: {
		textData: {
			headerText: "Order Details",
			backButtonText: "Back To List",
			address: {
				billingTitle: "BILLING ADDRESS",
				shippingTitle: "SHIPPING ADDRESS",
				location: "LOCATION",
				email: "EMAIL",
				phone: "PHONE"
			},
			pricing: {
				orderId: "Order ID",
				method: "Payment Method",
				subtotal: "Subtotal",
				discount: "Discount",
				shipping: "Shipping",
				total: "Total"
			},
			tableHeaders: {
				product: "PRODUCT",
				price: "PRICE",
				quantity: "QTY",
				quantityMobile: "QUANTITY",
				subtotal: "SUBTOTAL"
			}
		},
		sidebarText: {
			editText: "Edit"
		}
	},
	/**
	 * Cart Page Dictionary Here for English
	 */
	cart: {
		breadcrumb: {
			title: "Cart",
		},
		cartItemsText: {
			product: "PRODUCT",
			price: "PRICE",
			quantity: "QUANTITY",
			subtotal: "SUBTOTAL"
		},
		cartSummaryText: {
			headerText: "Order Summary",
			subtotalText: "Subtotal",
			shippingText: "Shipping",
			shippingValue: "Cash On Delivery",
			totalText: "Total",
			buttonText: "Proceed To Checkout"
		}
	},
	/**
	 * Checkout Page Dictionary Here for English
	 */
	checkout: {
		textType: "en",
		breadcrumb: {
			title: "Checkout",
		},
		summaryTextData: {
			headerText: "Order Summary",
			emptyText: "Your cart is empty",
			couponText: "Discount Coupon",
			couponButtonText: "Apply",
			subtotalText: "Subtotal",
			discountText: "Discount",
			totalText: "Total"
		},
		billingTextData: {
			headerText: "Billing Details",
			returnCartText: "Return to cart",
			emptyText: "Your cart is currently empty.",
			fromText: {
				firstNamePlaceholder: "First Name",
				lastNamePlaceholder: "Last Name",
				companyPlaceholder: "Company Name",
				optionalText: "Optional",
				countryPlaceholder: "Select Country",
				countryLabel: "Country / Region",
				addressPlaceholder: "Address",
				addressLabel: "Street Address",
				cityPlaceholder: "City",
				cityLabel: "Your Town / City",
				statePlaceholder: "Select State",
				stateLabel: "Your State",
				postCodePlaceholder: "Your Post Code/Zip",
				postCodeLabel: "Postcode / ZIP",
				phonePlaceholder: "Your Phone",
				phoneLabel: "Phone",
				emailPlaceholder: "Your Email Address",
				emailLabel: "Email Address",
				orderButtonText: "Place Order",
				processButtonText: "Processing..."
			}
		}
	},
	/**
	 * Product Page Dictionary Here for English
	 */
	product: {
		detailsText: {
			colorTitle: "COLORS",
			socialTitle: "Share On",
			reviewsText: "reviews",
		},
		cartButton: {
			addCart: "Add To Cart",
			buyNow: "Buy Now",
		},
		tabHeaders: {
			description: "Description",
			additionalInfo: "Additional Information",
			review: "Review"
		},
		reviewInput: {
			header: "Leave a Review",
			ratingText: "Your rating",
			buttonText: "Send Message",
			namePlaceholder: "Name",
			emailPlaceholder: "Email",
			reviewPlaceholder: "Write your message..."
		},
		recently_viewed: {
			title: "Recently Viewed",
			btnText: "View More",
		},
	},
	/**
	 * Not Found Page Dictionary Here for English
	 */
	not_found: {
		headerText: {
			headerText: "Page Not Found",
			descriptionText: "We are sorry, This page is unknown or does not exist the page you are looking for.",
			beckHome: "Back To Home",
			previousPage: "Previous Page",
			directionType: "ltr"
		},
		contactText: {
			headerText: "Need Emergency Help",
			buttonText: "Contact Us"
		},
	},
	/**
	 * Footer Dictionary Here for English
	 */
	footer: {
		info: {
			address: {
				title: "Address",
				description: "3566 Bird Spring Lane, Houston Texs",
			},
			phone: {
				title: "Phone",
				description: "+1 423 208 388",
			},
			email: {
				title: "Email",
				description: "hello@metashop.cm",
			},
		},
		quick_links: {
			title: "Quick Links",
			data: [
				{
					name: "About Us",
					link: "/about-us",
					target: "_sef",
				},
				{
					name: "Shop",
					link: "/shop",
					target: "_sef",
				},
				{
					name: "Special Offer",
					link: "#",
					target: "_sef",
				},
				{
					name: "New Arrivals",
					link: "#",
					target: "_sef",
				},
				{
					name: "Blog",
					link: "/blog",
					target: "_sef",
				},
				{
					name: "FAQs",
					link: "#",
					target: "_sef",
				},
				{
					name: "Contact Us",
					link: "/contact-us",
					target: "_sef",
				},
			],
		},
		account: {
			title: "Account",
			data: [
				{
					name: "My Account",
					link: "/dashboard",
					target: "_sef",
				},
				{
					name: "Order History",
					link: "#",
					target: "_sef",
				},
				{
					name: "Address Book",
					link: "#",
					target: "_sef",
				},
				{
					name: "Wishlist",
					link: "#",
					target: "_sef",
				},
				{
					name: "Coupon Code",
					link: "#",
					target: "_sef",
				},
				{
					name: "Login",
					link: "#",
					target: "_sef",
				},
				{
					name: "Registration",
					link: "#",
					target: "_sef",
				},
			],
		},
		support: {
			title: "Support",
			data: [
				{
					name: "Help Center",
					link: "#",
					target: "_sef",
				},
				{
					name: "How To Buy",
					link: "#",
					target: "_sef",
				},
				{
					name: "Track Your Order",
					link: "#",
					target: "_sef",
				},
				{
					name: "Store Location",
					link: "#",
					target: "_sef",
				},
				{
					name: "Return & Refund Policy",
					link: "#",
					target: "_sef",
				},
				{
					name: "Terms & Condition",
					link: "#",
					target: "_sef",
				},
				{
					name: "Privacy Policy",
					link: "#",
					target: "_sef",
				},
			],
		},
		newsletter: {
			title: "Newsletter",
			description: "Subscribe to our newsletter and get 20% off your first purchase",
			placeholder: "Enter Email Address",
			buttonText: "Subscrie",
		},
		copy_right: {
			description: "© 2024 MetaShop. All Rights Reserve.",
		},
	},
	/**
	 * Sign_in Modal Dictionary Here for English
	 */
	sign_in: {
		title: "Sign In",
		subtitle: "Enter your login information",
		emailPlaceholder: "Username or Email",
		passwordPlaceholder: "Password",
		remember_me: "Remember Me",
		forgot_password: "Forgot Password?",
		btnText: "Sign In",
		btnLoadingText: "Processing...",
	},
	/**
	 * Sign_up Modal Dictionary Here for English
	 */
	sign_up: {
		title: "Sign Up",
		subtitle: "Enter your login information",
		firstNamePlaceholder: "First Name",
		lastNamePlaceholder: "Last Name",
		usernamePlaceholder: "Username",
		emailPlaceholder: "Email",
		passwordPlaceholder: "Password",
		confirmPasswordPlaceholder: "Confirm Password",
		btnText: "Sign Up",
		btnLoadingText: "Processing...",
	},
	/**
	 * Global Error Dictionary Here for English
	 */
	error: {
		// Error components must be Client Components
		title: "Something went wrong!",
		description: "We're having trouble loading this page. Please try again. If the problem persists, contact support.",
		btnText: "Try again",
	},
};

export default en;
