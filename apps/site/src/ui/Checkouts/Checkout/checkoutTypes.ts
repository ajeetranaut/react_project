// user data interface
export interface IUserDataInterface {
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    address_1?: string;
    city?: string;
    state?: string;
    postcode?: string;
    country?: string;
    company?: string;
}

// cart data interface array of object
export interface ICartDataInterface {
    id: number;
    title: string;
    totals: {
        total: number;
    };
    featured_image: string;
}
// summery data interface
export interface ISummeryDataInterface {
    total: number;
    subtotal: number;
    discount: number;
}
// policy data interface
export interface IPolicyDataInterface {
    title: string;
    description: string;
    link: {
        title: string;
        url: string;
        target: string;
    };
}

// sign up data interface
export interface ISignUpDataInterface {
    title: string;
}

// company policy data interface
export interface ICompanyPolicyDataInterface {
    title: string;
    companyName: string;
    link: {
        title: string;
        url: string;
        target: string;
    };
}

// company policy data interface
export interface ISummaryTextData {
    headerText: string;
    emptyText: string;
    couponText: string;
    couponButtonText: string;
    subtotalText: string;
    discountText: string;
    totalText: string;
}

// company policy data interface
export interface IBillingTextData {
    headerText: string;
    returnCartText: string
    emptyText: string
    fromText: {
        firstNamePlaceholder: string
        lastNamePlaceholder: string;
        companyPlaceholder: string;
        optionalText: string;
        countryPlaceholder: string;
        countryLabel: string;
        addressPlaceholder: string;
        addressLabel: string;
        cityPlaceholder: string;
        cityLabel: string;
        statePlaceholder: string;
        stateLabel: string;
        postCodePlaceholder: string;
        postCodeLabel: string;
        phonePlaceholder: string;
        phoneLabel: string;
        emailPlaceholder: string;
        emailLabel: string;
        orderButtonText: string;
        processButtonText: string;
    }
}

