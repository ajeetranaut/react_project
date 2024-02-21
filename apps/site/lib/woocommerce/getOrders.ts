'use server';

import { ICheckoutBillings, ILineItems } from "@/types";
import { WooCommerce } from "../utils/woocommerce";
import { revalidatePath } from "next/cache";

// NOTE:  WooCommerce Create order
export type OrderProps = {
    billing: ICheckoutBillings;
    shipping: ICheckoutBillings;
    line_items: ILineItems[];
    customer_id?: number;
}

/**
 * Create WooCommerce order.
 * @param orderData object of  billing, shipping, line_items, customer_id
 * @returns  { data, error }
 */
export const createOrder = async (orderData: OrderProps) => {
    const { billing, shipping, line_items, customer_id } = orderData;

    const { data, error } = await WooCommerce.post("orders", {
        payment_method: "cod",
        payment_method_title: "Cash On Delivery",
        set_paid: false,
        billing: billing,
        shipping: shipping,
        line_items: line_items,
        customer_id: customer_id || 0
    })

    if (!error) {
        revalidatePath("/dashboard/orders", 'page')
        return {
            data,
            error: null
        }
    }
    return {
        data: [],
        error: true
    }
}

// NOTE:  WooCommerce Get orders
export type GetOrderProps = {
    per_page: number;
    page: number;
    status: string;
    userId: number;
}

/**
 * Get WooCommerce orders data.
 * @param orderData object of  per_page: string, page: number, status: string, userId: number, 
 * @returns  { data, error }
 */
export const getOrders = async (orderData: GetOrderProps) => {
    const { per_page, page, status, userId } = orderData;
    const { data, error } = await WooCommerce.get("orders", {
        per_page: per_page ? Number(per_page) : 10,
        page: page ? Number(page) : 1,
        customer: Number(userId),
        status: status ? String(status) : "any",
    })
    if (!error) {
        const ordersData = data.map((item: any) => {
            return {
                id: item.id,
                // date format 22-12-2021
                date: new Date(item.date_created).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                }),
                itemLength: item.line_items.length,
                total: item.total,
                status: item.status,
            };
        });
        return {
            data: ordersData,
            error: null
        }
    }
    return {
        data: [],
        error: true
    }
}

// NOTE:  WooCommerce Get order details
/**
 * Get WooCommerce order details data.
 * @param orderId as string
 * @returns  { data, error }
 */
export const getOrderDetails = async (orderId: string) => {
    const { data, error } = await WooCommerce.get(`orders/${orderId}`)
    if (!error) {
        // format the order data
        const orderData = {
            billing: {
                address_1: data?.billing?.address_1 || "Empty",
                email: data?.billing?.email,
                phone: data?.billing?.phone || "Empty",
            },
            shipping: {
                address_1: data?.shipping?.address_1 || "Empty",
                phone: data?.shipping?.phone || "Empty",
            },
            orderInfo: {
                id: data?.id,
                payment_method: data?.payment_method || "Pending",
                subtotal: "0.00",
                discount_total: data?.discount_total,
                shipping_total: data?.shipping_total,
                total: data?.total,
            },
            line_items: data?.line_items.map((item: any) => {
                return {
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    price: item.price,
                    quantity: item.quantity,
                    total: item?.total,
                };
            }),
        };
        return {
            data: orderData,
            error: null
        }
    }
    return {
        data: [],
        error: true
    }
}