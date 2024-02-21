import { ReturnIcon, SecuredIcon, SupportIcon, VehicleIcon } from "@/components/icons/iconBox";
import { MenuProps } from "@/dictionaries/en";

const es = {
	/**
	 * Header Dictionary Here for Spanish
	 */
	header: {
		menuName: 'Menú',
		slogan: `Obtén un <span class="font-bold">20% de descuento directo</span> en tu primer pedido`,
		searchPlaceholder: "Buscar producto aquí...",
		searchBtnText: "Buscar",
		noResultText: "No se encontraron resultados",
		viewAllText: "Ver todo",
		resultText: "Resultados encontrados",
		cartText: "Mi carrito",
		helpText: "¿Necesitas ayuda? Contáctanos",
		loginText: "Iniciar sesión",
		registerText: "Registro",
		or: "o",
		categoryText: "Todas las categorías",
		menu: [
			{
				name: "Inicio",
				link: "/",
			},
			{
				name: "Tienda",
				link: "/shop",
				child: [
					{
						name: "Barra lateral derecha",
						link: "/shop",
					},
					{
						name: "Barra lateral izquierda",
						link: "/shop/shop-left-sidebar",
					},
					{
						name: "Sin barra lateral",
						link: "/shop/shop-no-sidebar",
					},
				],
			},
			{
				name: "Oferta especial",
				link: "#",
			},
			{
				name: "Nuevos productos",
				link: "#",
			},
			{
				name: "Sobre nosotros",
				link: "/about-us",
			},
			{
				name: "Blog",
				link: "/blog",
			},
			{
				name: "Preguntas frecuentes",
				link: "#",
			},
			{
				name: "Contáctanos",
				link: "/contact-us",
			},
		] as MenuProps[],
		logoutText: "Cerrar sesión",
	},
	/**
	 * Home Page Dictionary Here for Spanish
	 */
	home: {
		textType: "es",
		title: "Inicio",
		description: "Esta es la página de inicio.",
		sliders: [
			{
				title: "COLECCIÓN PERFECTA DE GADGETS",
				excerpt: "ENTREGA GRATUITA A DOMICILIO FUERA DE LA CIUDAD",
				button: {
					title: "COMPRAR AHORA",
					link: "/shop",
					target: "_self",
				},
				image: {
					src: "/image/banner1.png",
					height: 650,
					width: 553,
					index: 0,
				},
				offer: "Descuento del 20%",
				offerType: "NUEVO",
			},
			{
				title: "COLECCIÓN PERFECTA DE GADGETS",
				excerpt: "ENTREGA GRATUITA A DOMICILIO FUERA DE LA CIUDAD",
				button: {
					title: "COMPRAR AHORA",
					link: "/shop",
					target: "_self",
				},
				image: {
					src: "/image/banner2.png",
					height: 650,
					width: 553,
					index: 0,
				},
				offer: "Descuento del 30%",
				offerType: "OFERTA",
			},
			{
				title: "COLECCIÓN PERFECTA DE GADGETS",
				excerpt: "ENTREGA GRATUITA A DOMICILIO FUERA DE LA CIUDAD",
				button: {
					title: "COMPRAR AHORA",
					link: "/shop",
					target: "_self",
				},
				image: {
					src: "/image/banner1.png",
					height: 650,
					width: 553,
					index: 0,
				},
				offer: "Descuento del 40%",
				offerType: "CALIENTE",
			},
		],
		support: [
			{
				icon: <VehicleIcon />,
				title: "Envío gratuito",
				description: "En todos los pedidos superiores a $75.00",
			},
			{
				icon: <ReturnIcon />,
				title: "Devoluciones gratuitas",
				description: "Devoluciones dentro de los 7 días",
			},
			{
				icon: <SupportIcon />,
				title: "Soporte 24/7",
				description: "Contáctenos las 24 horas del día",
			},
			{
				icon: <SecuredIcon />,
				title: "Pago 100% seguro",
				description: "Su pago está seguro con nosotros",
			},
		],
		selling_products: {
			title: "Nuestros productos más vendidos",
			btnText: "Ver todas las ofertas",
		},
		products_banners: [
			{
				category: "Reloj",
				title: "Apple Watch",
				image: "/image/product13.png",
				price: 399,
				btn: {
					title: "Comprar ahora",
					link: "/shop",
					target: "_self",
				},
			},
			{
				category: "Tableta",
				title: "iPad Pro 2022",
				image: "/image/product14.png",
				price: 1080,
				btn: {
					title: "Comprar ahora",
					link: "/shop",
					target: "_self",
				},
			},
			{
				category: "Inalámbrico",
				title: "Auriculares",
				image: "/image/product14.png",
				price: 160,
				btn: {
					title: "Comprar ahora",
					link: "/shop",
					target: "_self",
				},
			},
		],
		trending_products: {
			btn: {
				title: "Ver todos los productos",
				link: "/shop",
				target: "_self",
			},
			tabData: [
				{
					title: "Nueva llegada",
					query: {
						per_page: 8,
						orderby: `date`,
						order: "asc",
					}
				},
				{
					title: "Más vendido",
					query: {
						per_page: 8,
						orderby: `popularity`,
						order: "desc",
					}
				},
				{
					title: "Destacado",
					query: {
						per_page: 8,
						featured: true,
					}
				},
				{
					title: "Mejor valorado",
					query: {
						per_page: 8,
						orderby: `rating`,
					}
				},
				{
					title: "Más popular",
					query: {
						per_page: 8,
						orderby: `popularity`,
						order: "desc",
					}
				},
			],
		},
		newsletter: {
			title: "Suscríbete a nuestro boletín",
			subtitle: {
				normal: "Obtén un 20%",
				bold: "Descuento plano",
			},
			placeholder: "Ingrese la dirección de correo electrónico",
			buttonText: "Suscribirse",
		},
		recently_viewed: {
			title: "Vistos recientemente",
			btnText: "Ver más",
		},
	},
	/**
	 * Shop Page Dictionary Here for Spanish
	 */
	shop: {
		breadcrumb: {
			title: "Tienda",
			description: "Algo diferente, todos los días.",
		},
		recently_viewed: {
			title: "Vistos recientemente",
			btnText: "Ver más",
		},
		headerText: {
			filterButton: "Filtros",
			showText: {
				showing: "Mostrando",
				of: "de",
				results: "resultados",
			},
			textType: "es"
		},
		filters: {
			title: "Filtros",
			categoryTitle: "Categoría",
			colorTitle: "Colores",
			priceTitle: "Precio",
		},
		loadMore: "Carga más",
	},
	/**
	 * About Us Page Dictionary Here for Spanish
	 */
	about_us: {
		breadcrumb: {
			title: "Acerca de nosotros",
			description: "Algo diferente, todos los días.",
		},
		banner: {
			title: "Potenciando",
			sub_title: "marcas de comercio electrónico en todas partes.",
			description: "Conoce más sobre nuestra historia y las personas trabajadoras detrás del sobre rosa.",
			lgImage: {
				src: "/about.png",
				alt: "Acerca de nosotros",
				imageWidth: 1350,
				imageHeight: 500,
			},
			smImage: {
				src: "/about.png",
				alt: "Acerca de nosotros",
				imageWidth: 500,
				imageHeight: 380,
			},
		},
		support: [
			{
				icon: <VehicleIcon />,
				title: "Envío gratuito",
				description: "En todos los pedidos superiores a $75.00",
			},
			{
				icon: <ReturnIcon />,
				title: "Devoluciones gratuitas",
				description: "Devoluciones dentro de los 7 días",
			},
			{
				icon: <SupportIcon />,
				title: "Soporte 24/7",
				description: "Contáctenos las 24 horas del día",
			},
			{
				icon: <SecuredIcon />,
				title: "Pago 100% seguro",
				description: "Su pago está seguro con nosotros",
			},
		],
		our_teams: {
			title: "Nuestro Equipo",
			description: "Nuestro equipo está compuesto por personas apasionadas a las que les encanta crear.",
			list: [
				{
					avatar: "/image/team1.png",
					name: "Linh Nguyen",
					title: "Propietaria y Fundadora",
				},
				{
					avatar: "/image/team2.png",
					name: "Linh Nguyen",
					title: "Propietaria y Fundadora",
				},
				{
					avatar: "/image/team3.png",
					name: "Linh Nguyen",
					title: "Propietaria y Fundadora",
				},
				{
					avatar: "/image/team4.png",
					name: "Linh Nguyen",
					title: "Propietaria y Fundadora",
				},
			],
		},
		our_offers: {
			title: "¿Qué podemos hacer por ti?",
			offers: [
				{
					title: "Envío Gratuito",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
				},
				{
					title: "Devolución del 100% del Dinero",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
				},
				{
					title: "Soporte 24/7",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
				},
			],
			image: {
				src: "/image/platform1.png",
				alt: "Imagen de la Oferta",
				width: 640,
				height: 520,
			},
		},
	},
	/**
	 * Blog Page Dictionary Here for Spanish
	 */
	blog: {
		breadcrumb: {
			title: "Últimas noticias",
			description: "Algo diferente, cada día."
		},
		sidebarTitles: {
			searchSidebarTitle: "Buscar",
			searchPlaceholder: "Buscar publicación...",
			categorySidebarTitle: "Navegar por categorías",
			recentPostsSidebarTitle: "Mensajes recientes",
			tagsSidebarTitle: "Etiquetas",
			sidebarMobileButton: "Más opción",
		},
		authorByText: "Por"
	},
	/**
	 * Blog Search Page Dictionary Here for Spanish
	 */
	blog_search: {
		breadcrumb: {
			title: "Resultado de búsqueda:",
		},
		authorByText: "Por",
		loadButtonText: "Carga más",
		noResultText: "No se encontraron resultados"
	},
	/**
	 * Blog Category Page Dictionary Here for Spanish
	 */
	blog_category: {
		breadcrumb: {
			title: "Categoría:",
		},
		authorByText: "Por",
		loadButtonText: "Carga más"
	},
	/**
	 * Blog Tag Page Dictionary Here for Spanish
	 */
	blog_Tag: {
		breadcrumb: {
			title: "Nombre de etiqueta:",
		},
		authorByText: "Por",
		loadButtonText: "Carga más"
	},
	/**
	 * Blog Single Page Dictionary Here for Spanish
	 */
	blog_single: {
		sidebarTitles: {
			searchSidebarTitle: "Buscar",
			searchPlaceholder: "Buscar publicación...",
			categorySidebarTitle: "Navegar por categorías",
			recentPostsSidebarTitle: "Mensajes recientes",
			tagsSidebarTitle: "Etiquetas"
		},
		authorByText: "Por",
		socialShareText: "Compartir en",
		replyFormText: {
			cancelText: "Cancelar",
			namePlaceholder: "Nombre",
			emailPlaceholder: "Correo electrónico",
			messagePlaceholder: "Mensaje",
			replyButtonText: "Responder",
		},
		commentFormText: {
			responseText: "Gracias por tu comentario. Su comentario está bajo revisión ahora.",
			headerText: "Escribe tu comentario",
			namePlaceholder: "Nombre",
			emailPlaceholder: "Correo electrónico",
			messagePlaceholder: "Comentario",
			replyButtonText: "Compartir Comentar",
		}
	},
	/**
	 * Contact Us Page Dictionary Here for Spanish
	 */
	contact_us: {
		breadcrumb: {
			title: "Contacta con nosotros",
			description: "Algo diferente, todos los días.",
		},
		textType: "es",
		contactFormText: {
			headerText: "Enviar mensaje",
			namePlaceholder: "Nombre",
			emailPlaceholder: "Correo electrónico",
			subjectPlaceholder: "Sujeto",
			messagePlaceholder: "Escribe tu mensaje...",
			buttonText: "Enviar mensaje",
			loadButtonText: "Procesando..."
		}
	},
	/**
	 * Product Category Page Dictionary Here for Spanish
	 */
	product_category: {
		breadcrumb: {
			title: "Categoría:",
		},
	},
	/**
	 * Blog Author Page Dictionary Here for Spanish
	 */
	blog_author: {
		breadcrumb: {
			title: "Autor:",
		},
		authorByText: "Por",
		loadButtonText: "Carga más"
	},
	/**
	 * Recently Viewed Page Dictionary Here for Spanish
	 */
	recently_viewed: {
		breadcrumb: {
			title: "Visto Recientemente",
		}
	},
	/**
	 * Dashboard Page Dictionary Here for Spanish
	 */
	dashboard: {
		textData: {
			billingText: "Información de facturación",
			shippingText: "Dirección de envío",
			editText: "Editar",
			noResultText: "No se encontraron resultados",
			fromText: {
				firstNamePlaceholder: "Nombre de pila",
				lastNamePlaceholder: "Apellido",
				companyPlaceholder: "nombre de empresa",
				emailPlaceholder: "Dirección de correo electrónico",
				phonePlaceholder: "Teléfono",
				countryPlaceholder: "País",
				address1Placeholder: "Dirección Calle 1",
				address2Placeholder: "Dirección 2",
				statePlaceholder: "Estado",
				cityPlaceholder: "Ciudad",
				postCodePlaceholder: "Código postal",
				buttonText: "Guardar cambios"
			}
		},
		sidebarText: {
			editText: "Editar"
		}
	},
	/**
	 * Dashboard Settings Page Dictionary Here for Spanish
	 */
	dashboard_settings: {
		textData: {
			titleText: "Información básica",
			fromText: {
				firstNamePlaceholder: "Nombre de pila",
				lastNamePlaceholder: "Apellido",
				usernamePlaceholder: "Nombre de usuario",
				emailPlaceholder: "Dirección de correo electrónico",
				buttonText: "Guardar cambios"
			}
		},
		sidebarText: {
			editText: "Editar"
		}
	},
	/**
	 * Dashboard Orders Page Dictionary Here for Spanish
	 */
	dashboard_orders: {
		textType: "es",
		textData: {
			noOrderText: "Aún no hay pedidos.",
			tableHeaders: {
				orderId: "Solicitar ID",
				date: "Fecha",
				item: "Artículo",
				total: "Total",
				status: "Estado",
				action: "Acción",
				view: "Vista",
			}
		},
		sidebarText: {
			editText: "Editar"
		}
	},
	/**
	 * Dashboard Orders Details Page Dictionary Here for Spanish
	 */
	orders_details: {
		textData: {
			headerText: "Detalles del pedido",
			backButtonText: "Volver a la lista",
			address: {
				billingTitle: "DIRECCIÓN DE ENVÍO",
				shippingTitle: "DIRECCIÓN DE ENVÍO",
				location: "UBICACIÓN",
				email: "CORREO ELECTRÓNICO",
				phone: "TELÉFONO"
			},
			pricing: {
				orderId: "Solicitar ID",
				method: "Método de pago",
				subtotal: "Total parcial",
				discount: "Descuento",
				shipping: "Envío",
				total: "Total"
			},
			tableHeaders: {
				product: "PRODUCTO",
				price: "PRECIO",
				quantity: "CANTIDAD",
				quantityMobile: "CANTIDAD",
				subtotal: "SUBTOTAL"
			}
		},
		sidebarText: {
			editText: "Editar"
		}
	},
	/**
	 * Cart Page Dictionary Here for Spanish
	 */
	cart: {
		breadcrumb: {
			title: "Carro",
		},
		cartItemsText: {
			product: "PRODUCTO",
			price: "PRECIO",
			quantity: "CANTIDAD",
			subtotal: "TOTAL PARCIAL"
		},
		cartSummaryText: {
			headerText: "Resumen del pedido",
			subtotalText: "Total parcial",
			shippingText: "Envío",
			shippingValue: "Cash On Delivery",
			totalText: "Total",
			buttonText: "Pasar por la caja"
		}
	},
	/**
	 * Checkout Page Dictionary Here for Spanish
	 */
	checkout: {
		textType: "es",
		breadcrumb: {
			title: "Verificar",
		},
		summaryTextData: {
			headerText: "Resumen del pedido",
			emptyText: "Tu carrito esta vacío",
			couponText: "Cupón de descuento",
			couponButtonText: "Aplicar",
			subtotalText: "Total parcial",
			discountText: "Descuento",
			totalText: "Total"
		},
		billingTextData: {
			headerText: "Detalles de facturación",
			returnCartText: "Volver al carrito",
			emptyText: "Su carrito está vacío.",
			fromText: {
				firstNamePlaceholder: "Nombre de pila",
				lastNamePlaceholder: "Apellido",
				companyPlaceholder: "nombre de empresa",
				optionalText: "Opcional",
				countryPlaceholder: "Seleccionar país",
				countryLabel: "País / Región",
				addressPlaceholder: "Dirección",
				addressLabel: "Dirección",
				cityPlaceholder: "Ciudad",
				cityLabel: "Tu Pueblo/Ciudad",
				statePlaceholder: "Seleccione estado",
				stateLabel: "Tu estado",
				postCodePlaceholder: "Su código postal/Zip",
				postCodeLabel: "Código postal/ZIP",
				phonePlaceholder: "Su teléfono",
				phoneLabel: "Teléfono",
				emailPlaceholder: "Su dirección de correo electrónico",
				emailLabel: "Dirección de correo electrónico",
				orderButtonText: "Realizar pedido",
				processButtonText: "Procesando..."
			}
		}
	},
	/**
	 * Product Page Dictionary Here for Spanish
	 */
	product: {
		detailsText: {
			colorTitle: "COLORES",
			socialTitle: "Compartir en",
			reviewsText: "opiniones"
		},
		cartButton: {
			addCart: "Añadir a la cesta",
			buyNow: "Comprar ahora",
		},
		tabHeaders: {
			description: "Descripción",
			additionalInfo: "Información Adicional",
			review: "Revisar"
		},
		reviewInput: {
			header: "Dejar un comentario",
			ratingText: "Tu clasificación",
			buttonText: "Enviar mensaje",
			namePlaceholder: "Nombre",
			emailPlaceholder: "Correo electrónico",
			reviewPlaceholder: "Escribe tu mensaje..."
		},
		recently_viewed: {
			title: "Visto Recientemente",
			btnText: "Ver más",
		},
	},
	/**
	 * Not Found Page Dictionary Here for Spanish
	 */
	not_found: {
		headerText: {
			headerText: "Página no encontrada",
			descriptionText: "Lo sentimos, Esta página es desconocida o no existe la página que estás buscando.",
			beckHome: "De vuelta a casa",
			previousPage: "Pagina anterior",
			directionType: "ltr"
		},
		contactText: {
			headerText: "Necesita ayuda de emergencia",
			buttonText: "Contacta con nosotros"
		},
	},
	/**
	 * Footer Dictionary Here for Spanish
	 */
	footer: {
		info: {
			address: {
				title: "Dirección",
				description: "3566 Bird Spring Lane, Houston, Texs",
			},
			phone: {
				title: "Teléfono",
				description: "+1 423 208 388",
			},
			email: {
				title: "Correo Electrónico",
				description: "hello@metashop.cm",
			},
		},
		quick_links: {
			title: "Enlaces Rápidos",
			data: [
				{
					name: "Acerca de Nosotros",
					link: "/about-us",
					target: "_sef",
				},
				{
					name: "Tienda",
					link: "/shop",
					target: "_sef",
				},
				{
					name: "Oferta Especial",
					link: "#",
					target: "_sef",
				},
				{
					name: "Nuevos Llegados",
					link: "#",
					target: "_sef",
				},
				{
					name: "Blog",
					link: "/blog",
					target: "_sef",
				},
				{
					name: "Preguntas Frecuentes",
					link: "#",
					target: "_sef",
				},
				{
					name: "Contáctenos",
					link: "/contact-us",
					target: "_sef",
				},
			],
		},
		account: {
			title: "Cuenta",
			data: [
				{
					name: "Mi Cuenta",
					link: "/dashboard",
					target: "_sef",
				},
				{
					name: "Historial de Pedidos",
					link: "#",
					target: "_sef",
				},
				{
					name: "Libreta de Direcciones",
					link: "#",
					target: "_sef",
				},
				{
					name: "Lista de Deseos",
					link: "#",
					target: "_sef",
				},
				{
					name: "Código de Cupón",
					link: "#",
					target: "_sef",
				},
				{
					name: "Iniciar Sesión",
					link: "#",
					target: "_sef",
				},
				{
					name: "Registro",
					link: "#",
					target: "_sef",
				},
			],
		},
		support: {
			title: "Soporte",
			data: [
				{
					name: "Centro de Ayuda",
					link: "#",
					target: "_sef",
				},
				{
					name: "Cómo Comprar",
					link: "#",
					target: "_sef",
				},
				{
					name: "Rastrea tu Pedido",
					link: "#",
					target: "_sef",
				},
				{
					name: "Ubicación de la Tienda",
					link: "#",
					target: "_sef",
				},
				{
					name: "Política de Devolución y Reembolso",
					link: "#",
					target: "_sef",
				},
				{
					name: "Términos y Condiciones",
					link: "#",
					target: "_sef",
				},
				{
					name: "Política de Privacidad",
					link: "#",
					target: "_sef",
				},
			],
		},
		newsletter: {
			title: "Boletín",
			description: "Suscríbete a nuestro boletín y obtén un 20% de descuento en tu primera compra",
			placeholder: "Ingrese la dirección de correo electrónico",
			buttonText: "Suscribire",
		},
		copy_right: {
			description: "© 2024 MetaShop. Todos los derechos reservado.",
		},
	},
	/**
	 * Sign In Modal Dictionary Here for Spanish
	 */
	sign_in: {
		title: "Iniciar Sesión",
		subtitle: "Ingresa tu información de inicio de sesión",
		emailPlaceholder: "Nombre de usuario o correo electrónico",
		passwordPlaceholder: "Contraseña",
		remember_me: "Recuérdame",
		forgot_password: "¿Olvidaste tu contraseña?",
		btnText: "Iniciar Sesión",
		btnLoadingText: "Procesando...",
	},
	/**
	 * Sign Up Modal Dictionary Here for Spanish
	 */
	sign_up: {
		title: "Registrarse",
		subtitle: "Ingresa tu información de registro",
		firstNamePlaceholder: "Nombre",
		lastNamePlaceholder: "Apellido",
		usernamePlaceholder: "Nombre de usuario",
		emailPlaceholder: "Correo electrónico",
		passwordPlaceholder: "Contraseña",
		confirmPasswordPlaceholder: "Confirmar Contraseña",
		btnText: "Registrarse",
		btnLoadingText: "Procesando...",
	},
	/**
	 * Global Error Dictionary Here for Spanish
	 */
	error: {
		// Los componentes de error deben ser Componentes del Cliente
		title: "¡Algo salió mal!",
		description: "Estamos teniendo problemas para cargar esta página. Por favor, inténtalo de nuevo. Si el problema persiste, contacta al soporte.",
		btnText: "Intentar de nuevo",
	},
};

export default es;
