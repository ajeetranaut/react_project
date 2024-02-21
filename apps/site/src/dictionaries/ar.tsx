import { ReturnIcon, SecuredIcon, SupportIcon, VehicleIcon } from "@/components/icons/iconBox";
import { MenuProps } from "@/dictionaries/en";

const ar = {
	/**
	 * Header Dictionary Here for Arabic
	 */
	header: {
		menuName: 'القائمة',
		slogan: `احصل على <span class="font-bold ">20٪ خصم مستقيم</span> على أول طلب لديك`,
		searchPlaceholder: "ابحث عن المنتج هنا...",
		searchBtnText: "بحث",
		noResultText: "لم يتم العثور على نتائج",
		viewAllText: "عرض الكل",
		resultText: "تم العثور على نتائج",
		cartText: "عربة التسوق",
		helpText: "هل تحتاج إلى مساعدة؟ اتصل بنا",
		loginText: "تسجيل الدخول",
		registerText: "التسجيل",
		or: "أو",
		categoryText: "جميع الفئات",
		menu: [
			{
				name: "الرئيسية",
				link: "/",
			},
			{
				name: "المتجر",
				link: "/shop",
				child: [
					{
						name: "الشريط الجانبي الأيمن",
						link: "/shop",
					},
					{
						name: "الشريط الجانبي الأيسر",
						link: "/shop/shop-left-sidebar",
					},
					{
						name: "بدون شريط جانبي",
						link: "/shop/shop-no-sidebar",
					},
				]
			},
			{
				name: "عرض خاص",
				link: "#",
			},
			{
				name: "وصل حديثا",
				link: "#",
			},
			{
				name: "عنا",
				link: "/about-us",
			},
			{
				name: "المدونة",
				link: "/blog",
			},
			{
				name: "الأسئلة الشائعة",
				link: "#",
			},
			{
				name: "اتصل بنا",
				link: "/contact-us",
			},
		] as MenuProps[],
		logoutText: "تسجيل الخروج",
	},
	/**
	 * Home Page Dictionary Here for Arabic
	 */
	home: {
		textType: "ar",
		title: "الرئيسية",
		description: "هذه هي الصفحة الرئيسية.",
		sliders: [
			{
				title: "مجموعة الأجهزة المثالية",
				excerpt: "توصيل مجاني إلى المناطق الخارجية من المدينة",
				button: {
					title: "تسوق الآن",
					link: "/التسوق",
					target: "_self",
				},
				image: {
					src: "/image/banner1.png",
					height: 650,
					width: 553,
					index: 0,
				},
				offer: "خصم 20%",
				offerType: "جديد",
			},
			{
				title: "مجموعة الأجهزة المثالية",
				excerpt: "توصيل مجاني إلى المناطق الخارجية من المدينة",
				button: {
					title: "تسوق الآن",
					link: "/التسوق",
					target: "_self",
				},
				image: {
					src: "/image/banner2.png",
					height: 650,
					width: 553,
					index: 0,
				},
				offer: "خصم 30%",
				offerType: "تخفيضات",
			},
			{
				title: "مجموعة الأجهزة المثالية",
				excerpt: "توصيل مجاني إلى المناطق الخارجية من المدينة",
				button: {
					title: "تسوق الآن",
					link: "/التسوق",
					target: "_self",
				},
				image: {
					src: "/image/banner1.png",
					height: 650,
					width: 553,
					index: 0,
				},
				offer: "خصم 40%",
				offerType: "ساخن",
			},
		],
		support: [
			{
				icon: <VehicleIcon />,
				title: "شحن مجاني",
				description: "على جميع الطلبات التي تزيد عن 75.00 دولار",
			},
			{
				icon: <ReturnIcon />,
				title: "إرجاع مجاني",
				description: "إرجاع الطلبات في غضون 7 أيام",
			},
			{
				icon: <SupportIcon />,
				title: "الدعم على مدار 24/7",
				description: "تواصل معنا على مدار 24 ساعة في اليوم",
			},
			{
				icon: <SecuredIcon />,
				title: "دفع آمن بنسبة 100%",
				description: "دفعك آمن معنا",
			},
		],
		selling_products: {
			title: "أفضل منتجاتنا المباعة",
			btnText: "عرض جميع العروض",
		},
		products_banners: [
			{
				category: "ساعة",
				title: "Apple Watch",
				image: "/image/product13.png",
				price: 399,
				btn: {
					title: "تسوق الآن",
					link: "/shop",
					target: "_self",
				},
			},
			{
				category: "حاسوب لوحي",
				title: "iPad Pro 2022",
				image: "/image/product14.png",
				price: 1080,
				btn: {
					title: "تسوق الآن",
					link: "/shop",
					target: "_self",
				},
			},
			{
				category: "لاسلكي",
				title: "سماعات الرأس",
				image: "/image/product14.png",
				price: 160,
				btn: {
					title: "تسوق الآن",
					link: "/shop",
					target: "_self",
				},
			},
		],
		trending_products: {
			btn: {
				title: "عرض جميع المنتجات",
				link: "/shop",
				target: "_self",
			},
			tabData: [
				{
					title: "وصول جديد",
					query: {
						per_page: 8,
						orderby: `date`,
						order: "asc",
					}
				},
				{
					title: "الأكثر مبيعًا",
					query: {
						per_page: 8,
						orderby: `popularity`,
						order: "desc",
					}
				},
				{
					title: "مميز",
					query: {
						per_page: 8,
						featured: true,
					}
				},
				{
					title: "الأعلى تقييماً",
					query: {
						per_page: 8,
						orderby: `rating`,
					}
				},
				{
					title: "الأكثر شيوعاً",
					query: {
						per_page: 8,
						orderby: `popularity`,
						order: "desc",
					}
				},
			],
		},
		newsletter: {
			title: "اشترك في النشرة الإخبارية لدينا",
			subtitle: {
				normal: "احصل على 20%",
				bold: "خصم مستقر",
			},
			placeholder: "أدخل عنوان البريد الإلكتروني",
			buttonText: "اشتراك",
		},
		recently_viewed: {
			title: "شوهدت مؤخرًا",
			btnText: "عرض المزيد",
		},
	},
	/**
	 * Shop Page Dictionary Here for Arabic
	 */
	shop: {
		breadcrumb: {
			title: "متجر",
			description: "شيء مختلف كل يوم.",
		},
		recently_viewed: {
			title: "شوهدت مؤخرًا",
			btnText: "عرض المزيد",
		},
		headerText: {
			filterButton: "المرشحات",
			showText: {
				showing: "عرض",
				of: "من",
				results: "نتيجة",
			},
			textType: "ar",
		},
		filters: {
			title: "المرشحات",
			categoryTitle: "فئة",
			colorTitle: "الألوان",
			priceTitle: "سعر",
		},
		loadMore: "تحميل المزيد",
	},
	/**
	 * About Us Page Dictionary Here for Arabic
	 */
	about_us: {
		breadcrumb: {
			title: "من نحن",
			description: "شيء مختلف كل يوم.",
		},
		banner: {
			title: "تمكين",
			sub_title: "علامات التجارة الإلكترونية في كل مكان.",
			description: "تعرف على المزيد عن قصتنا والأشخاص العاملين بجد وراء الظرف الوردي.",
			lgImage: {
				src: "/about.png",
				alt: "معلومات عنا",
				imageWidth: 1350,
				imageHeight: 500,
			},
			smImage: {
				src: "/about.png",
				alt: "معلومات عنا",
				imageWidth: 500,
				imageHeight: 380,
			},
		},
		support: [
			{
				icon: <VehicleIcon />,
				title: "شحن مجاني",
				description: "على جميع الطلبات التي تزيد عن 75.00 دولار",
			},
			{
				icon: <ReturnIcon />,
				title: "إرجاع مجاني",
				description: "إرجاع الطلبات في غضون 7 أيام",
			},
			{
				icon: <SupportIcon />,
				title: "الدعم على مدار 24/7",
				description: "تواصل معنا على مدار 24 ساعة في اليوم",
			},
			{
				icon: <SecuredIcon />,
				title: "دفع آمن بنسبة 100%",
				description: "دفعك آمن معنا",
			},
		],
		our_teams: {
			title: "فريقنا",
			description: "يتكون فريقنا من أشخاص متحمسين يحبون الإبداع.",
			list: [
				{
					avatar: "/image/team1.png",
					name: "لينه نغوين",
					title: "المالكة والمؤسسة",
				},
				{
					avatar: "/image/team2.png",
					name: "لينه نغوين",
					title: "المالكة والمؤسسة",
				},
				{
					avatar: "/image/team3.png",
					name: "لينه نغوين",
					title: "المالكة والمؤسسة",
				},
				{
					avatar: "/image/team4.png",
					name: "لينه نغوين",
					title: "المالكة والمؤسسة",
				},
			],
		},
		our_offers: {
			title: "ماذا يمكننا أن نقدم لك؟",
			offers: [
				{
					title: "الشحن مجاناً",
					description:
						"لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسسينغ إليت. إن إيوسمود إيبسوم إت دوي رونكوس أوكتور.",
				},
				{
					title: "100٪ استرداد الأموال",
					description:
						"لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسسينغ إليت. إن إيوسمود إيبسوم إت دوي رونكوس أوكتور.",
				},
				{
					title: "الدعم على مدار الساعة",
					description:
						"لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسسينغ إليت. إن إيوسمود إيبسوم إت دوي رونكوس أوكتور.",
				},
			],
			image: {
				src: "/image/platform1.png",
				alt: "صورة العرض",
				width: 640,
				height: 520,
			},
		},
	},
	/**
	 * Blog Page Dictionary Here for Arabic
	 */
	blog: {
		breadcrumb: {
			title: "أحدث الأخبار",
			description: "شيء مختلف، كل يوم.",
		},
		sidebarTitles: {
			searchSidebarTitle: "يبحث",
			searchPlaceholder: "بحث في المشاركة...",
			categorySidebarTitle: "تصفح حسب الفئات",
			recentPostsSidebarTitle: "المشاركات الاخيرة",
			tagsSidebarTitle: "العلامات",
			sidebarMobileButton: "المزيد من الخيارات",
		},
		authorByText: "بواسطة"
	},
	/**
	 * Blog Search Page Dictionary Here for Arabic
	 */
	blog_search: {
		breadcrumb: {
			title: "نتيجة البحث:",
		},
		authorByText: "بواسطة",
		loadButtonText: "تحميل المزيد",
		noResultText: "لم يتم العثور على نتائج"
	},
	/**
	 * Blog Category Page Dictionary Here for Arabic
	 */
	blog_category: {
		breadcrumb: {
			title: "فئة:",
		},
		authorByText: "بواسطة",
		loadButtonText: "تحميل المزيد"
	},
	/**
	 * Blog Tag Page Dictionary Here for Arabic
	 */
	blog_Tag: {
		breadcrumb: {
			title: "اسم العلامة:",
		},
		authorByText: "بواسطة",
		loadButtonText: "تحميل المزيد"
	},
	/**
	 * Blog Single Page Dictionary Here for Arabic
	 */
	blog_single: {
		sidebarTitles: {
			searchSidebarTitle: "يبحث",
			searchPlaceholder: "بحث في المشاركة...",
			categorySidebarTitle: "تصفح حسب الفئات",
			recentPostsSidebarTitle: "المشاركات الاخيرة",
			tagsSidebarTitle: "العلامات"
		},
		authorByText: "بواسطة",
		socialShareText: "مشاركه فى",
		replyFormText: {
			cancelText: "يلغي",
			namePlaceholder: "اسم",
			emailPlaceholder: "بريد إلكتروني",
			messagePlaceholder: "رسالة",
			replyButtonText: "رد",
		},
		commentFormText: {
			responseText: "شكرا على تعليقك. تعليقك قيد المراجعة الآن.",
			headerText: "اكتب تعليقك",
			namePlaceholder: "اسم",
			emailPlaceholder: "بريد إلكتروني",
			messagePlaceholder: "تعليق",
			replyButtonText: "مشاركة التعليق",
		}
	},
	/**
	 * Contact Us Page Dictionary Here for Arabic
	 */
	contact_us: {
		breadcrumb: {
			title: "اتصل بنا",
			description: "شيء مختلف كل يوم.",
		},
		textType: "ar",
		contactFormText: {
			headerText: "أرسل رسالة",
			namePlaceholder: "اسم",
			emailPlaceholder: "بريد إلكتروني",
			subjectPlaceholder: "موضوع",
			messagePlaceholder: "اكتب رسالتك...",
			buttonText: "أرسل رسالة",
			loadButtonText: "يعالج..."
		}
	},
	/**
	 * Product Category Page Dictionary Here for Arabic
	 */
	product_category: {
		breadcrumb: {
			title: "فئة:",
		},
	},
	/**
	 * Blog Author Page Dictionary Here for Arabic
	 */
	blog_author: {
		breadcrumb: {
			title: "مؤلف:",
		},
		authorByText: "بواسطة",
		loadButtonText: "تحميل المزيد"
	},
	/**
	 * Recently Viewed Page Dictionary Here for Arabic
	 */
	recently_viewed: {
		breadcrumb: {
			title: "شوهدت مؤخرا",
		}
	},
	/**
	 * Dashboard Page Dictionary Here for Arabic
	 */
	dashboard: {
		textData: {
			billingText: "معلومات الفواتير",
			shippingText: "عنوان الشحن",
			editText: "يحرر",
			noResultText: "لا توجد نتائج",
			fromText: {
				firstNamePlaceholder: "الاسم الأول",
				lastNamePlaceholder: "اسم العائلة",
				companyPlaceholder: "اسم الشركة",
				emailPlaceholder: "عنوان البريد الإلكتروني",
				phonePlaceholder: "هاتف",
				countryPlaceholder: "دولة",
				address1Placeholder: "عنوان الشارع 1",
				address2Placeholder: "عنوان الشارع 2",
				statePlaceholder: "ولاية",
				cityPlaceholder: "مدينة",
				postCodePlaceholder: "شفرة البريد",
				buttonText: "حفظ التغييرات"
			}
		},
		sidebarText: {
			editText: "يحرر",
		}
	},
	/**
	 * Dashboard Settings Page Dictionary Here for Arabic
	 */
	dashboard_settings: {
		textData: {
			titleText: "الاسم الأول",
			fromText: {
				firstNamePlaceholder: "الاسم الأول",
				lastNamePlaceholder: "اسم العائلة",
				usernamePlaceholder: "اسم المستخدم",
				emailPlaceholder: "عنوان البريد الإلكتروني",
				buttonText: "حفظ التغييرات"
			}
		},
		sidebarText: {
			editText: "يحرر",
		}
	},
	/**
	 * Dashboard Orders Page Dictionary Here for Arabic
	 */
	dashboard_orders: {
		textType: "ar",
		textData: {
			noOrderText: "لا توجد أوامر حتى الآن.",
			tableHeaders: {
				orderId: "بطاقة تعريف",
				date: "تاريخ",
				item: "غرض",
				total: "المجموع",
				status: "حالة",
				action: "فعل",
				view: "منظر",
			}
		},
		sidebarText: {
			editText: "يحرر",
		}
	},
	/**
	 * Dashboard Orders Details Page Dictionary Here for Arabic
	 */
	orders_details: {
		textData: {
			headerText: "تفاصيل الطلب",
			backButtonText: "الرجوع للقائمة",
			address: {
				billingTitle: "عنوان وصول الفواتير",
				shippingTitle: "عنوان الشحن",
				location: "موقع",
				email: "بريد إلكتروني",
				phone: "هاتف"
			},
			pricing: {
				orderId: "بطاقة تعريف",
				method: "طريقة الدفع او السداد",
				subtotal: "المجموع الفرعي",
				discount: "تخفيض",
				shipping: "شحن",
				total: "المجموع"
			},
			tableHeaders: {
				product: "منتج",
				price: "سعر",
				quantity: "كمية",
				quantityMobile: "كمية",
				subtotal: "المجموع الفرعي"
			}
		},
		sidebarText: {
			editText: "يحرر",
		}
	},
	/**
	 * Cart Page Dictionary Here for Arabic
	 */
	cart: {
		breadcrumb: {
			title: "عربة التسوق",
		},
		cartItemsText: {
			product: "منتج",
			price: "سعر",
			quantity: "كمية",
			subtotal: "المجموع الفرعي"
		},
		cartSummaryText: {
			headerText: "ملخص الطلب",
			subtotalText: "المجموع الفرعي",
			shippingText: "شحن",
			shippingValue: "الدفع عند الاستلام",
			totalText: "المجموع",
			buttonText: "الشروع في الخروج"
		}
	},
	/**
	 * Checkout Page Dictionary Here for Arabic
	 */
	checkout: {
		textType: "ar",
		breadcrumb: {
			title: "الدفع",
		},
		summaryTextData: {
			headerText: "ملخص الطلب",
			emptyText: "عربة التسوق فارغة",
			couponText: "كوبون الخصم",
			couponButtonText: "يتقدم",
			subtotalText: "المجموع الفرعي",
			discountText: "تخفيض",
			totalText: "المجموع"
		},
		billingTextData: {
			headerText: "تفاصيل الفاتورة",
			returnCartText: "العودة إلى السلة",
			emptyText: "عربة التسوق فارغة حاليا.",
			fromText: {
				firstNamePlaceholder: "الاسم الأول",
				lastNamePlaceholder: "اسم العائلة",
				companyPlaceholder: "اسم الشركة",
				optionalText: "خياري",
				countryPlaceholder: "حدد الدولة",
				countryLabel: "البلد / المنطقة",
				addressPlaceholder: "عنوان",
				addressLabel: "عنوان الشارع",
				cityPlaceholder: "مدينة",
				cityLabel: "مدينتك/ مدينتك",
				statePlaceholder: "اختر ولايه",
				stateLabel: "ولايتك",
				postCodePlaceholder: "الرمز البريدي/الرمز البريدي الخاص بك",
				postCodeLabel: "الرمز البريدي / الرمز البريدي",
				phonePlaceholder: "هاتفك",
				phoneLabel: "هاتف",
				emailPlaceholder: "عنوان بريدك  الإلكتروني",
				emailLabel: "عنوان البريد الإلكتروني",
				orderButtonText: "مكان الامر",
				processButtonText: "يعالج..."
			}
		}
	},
	/**
	 * Product Page Dictionary Here for Arabic
	 */
	product: {
		detailsText: {
			colorTitle: "الألوان",
			socialTitle: "مشاركه فى",
			reviewsText: "المراجعات"
		},
		cartButton: {
			addCart: "أضف إلى السلة",
			buyNow: "اشتري الآن",
		},
		tabHeaders: {
			description: "وصف",
			additionalInfo: "معلومات إضافية",
			review: "مراجعة"
		},
		reviewInput: {
			header: "ترك التعليق",
			ratingText: "تقييمك",
			buttonText: "أرسل رسالة",
			namePlaceholder: "اسم",
			emailPlaceholder: "بريد إلكتروني",
			reviewPlaceholder: "اكتب رسالتك..."
		},
		recently_viewed: {
			title: "شوهدت مؤخرا",
			btnText: "عرض المزيد",
		},
	},
	/**
	 * Not Found Page Dictionary Here for Arabic
	 */
	not_found: {
		headerText: {
			headerText: "الصفحة غير موجودة",
			descriptionText: "عذرًا، هذه الصفحة غير معروفة أو غير موجودة، الصفحة التي تبحث عنها.",
			beckHome: "العودة إلى المنزل",
			previousPage: "الصفحة السابقة",
			directionType: "rtl"
		},
		contactText: {
			headerText: "بحاجة إلى مساعدة طارئة",
			buttonText: "اتصل بنا"
		},
	},
	/**
	 * Footer Dictionary Here for Arabic
	 */
	footer: {
		info: {
			address: {
				title: "العنوان",
				description: "3566 بيرد سبرينج لين، هيوستن، تكسس",
			},
			phone: {
				title: "الهاتف",
				description: "+1 423 208 388",
			},
			email: {
				title: "البريد الإلكتروني",
				description: "hello@metashop.cm",
			},
		},
		quick_links: {
			title: "روابط سريعة",
			data: [
				{
					name: "حولنا",
					link: "/about-us",
					target: "_sef",
				},
				{
					name: "المتجر",
					link: "/shop",
					target: "_sef",
				},
				{
					name: "عرض خاص",
					link: "#",
					target: "_sef",
				},
				{
					name: "وصول جديد",
					link: "#",
					target: "_sef",
				},
				{
					name: "المدونة",
					link: "/blog",
					target: "_sef",
				},
				{
					name: "أسئلة شائعة",
					link: "#",
					target: "_sef",
				},
				{
					name: "اتصل بنا",
					link: "/contact-us",
					target: "_sef",
				},
			],
		},
		account: {
			title: "الحساب",
			data: [
				{
					name: "حسابي",
					link: "/dashboard",
					target: "_sef",
				},
				{
					name: "تاريخ الطلبات",
					link: "#",
					target: "_sef",
				},
				{
					name: "دليل العناوين",
					link: "#",
					target: "_sef",
				},
				{
					name: "قائمة الرغبات",
					link: "#",
					target: "_sef",
				},
				{
					name: "رمز القسيمة",
					link: "#",
					target: "_sef",
				},
				{
					name: "تسجيل الدخول",
					link: "#",
					target: "_sef",
				},
				{
					name: "التسجيل",
					link: "#",
					target: "_sef",
				},
			],
		},
		support: {
			title: "الدعم",
			data: [
				{
					name: "مركز المساعدة",
					link: "#",
					target: "_sef",
				},
				{
					name: "كيفية الشراء",
					link: "#",
					target: "_sef",
				},
				{
					name: "تتبع طلبك",
					link: "#",
					target: "_sef",
				},
				{
					name: "موقع المتجر",
					link: "#",
					target: "_sef",
				},
				{
					name: "سياسة الإرجاع والاسترداد",
					link: "#",
					target: "_sef",
				},
				{
					name: "الشروط والأحكام",
					link: "#",
					target: "_sef",
				},
				{
					name: "سياسة الخصوصية",
					link: "#",
					target: "_sef",
				},
			],
		},
		newsletter: {
			title: "النشرة الإخبارية",
			description: "اشترك في النشرة الإخبارية لدينا واحصل على خصم 20% على أول عملية شراء لديك",
			placeholder: "أدخل عنوان البريد الإلكتروني",
			buttonText: "الاشترك",
		},
		copy_right: {
			description: "© 2024 ميتاشوب. كل الحقوق محفوظ.",
		},
	},
	/**
	 * Sign In Modal Dictionary Here for Arabic
	 */
	sign_in: {
		title: "تسجيل الدخول",
		subtitle: "أدخل معلومات تسجيل الدخول الخاصة بك",
		emailPlaceholder: "اسم المستخدم أو البريد الإلكتروني",
		passwordPlaceholder: "كلمة المرور",
		remember_me: "تذكرني",
		forgot_password: "هل نسيت كلمة المرور؟",
		btnText: "تسجيل الدخول",
		btnLoadingText: "جار التحميل...",
	},
	/**
	 * Sign Up Modal Dictionary Here for Arabic
	 */
	sign_up: {
		title: "التسجيل",
		subtitle: "أدخل معلومات التسجيل الخاصة بك",
		firstNamePlaceholder: "الاسم الأول",
		lastNamePlaceholder: "اسم العائلة",
		usernamePlaceholder: "اسم المستخدم",
		emailPlaceholder: "البريد الإلكتروني",
		passwordPlaceholder: "كلمة المرور",
		confirmPasswordPlaceholder: "تأكيد كلمة المرور",
		btnText: "التسجيل",
		btnLoadingText: "جار التحميل...",
	},
	/**
	 * Global Error Dictionary Here for Arabic
	 */
	error: {
		// يجب أن تكون مكونات الخطأ مكونات العميل
		title: "حدث خطأ!",
		description: "نواجه مشكلة في تحميل هذه الصفحة. الرجاء المحاولة مرة أخرى. إذا استمرت المشكلة ، اتصل بالدعم.",
		btnText: "حاول مرة أخرى",
	},
};

export default ar;
